create extension if not exists "uuid-ossp";

create table if not exists public.organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  industry text,
  credits integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.users (
  id uuid primary key references auth.users on delete cascade,
  organization_id uuid references public.organizations,
  role text not null default 'client',
  created_at timestamptz not null default now()
);

create table if not exists public.audits (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references public.organizations on delete cascade,
  name text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists public.interviews (
  id uuid primary key default uuid_generate_v4(),
  audit_id uuid not null references public.audits on delete cascade,
  participant_name text not null,
  role text,
  status text not null default 'scheduled',
  recording_url text,
  transcript jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.interview_responses (
  id uuid primary key default uuid_generate_v4(),
  interview_id uuid not null references public.interviews on delete cascade,
  dimension text not null,
  prompt text not null,
  answer text,
  sentiment text,
  created_at timestamptz not null default now()
);

create table if not exists public.maturity_dimensions (
  id uuid primary key default uuid_generate_v4(),
  audit_id uuid references public.audits on delete cascade,
  dimension text not null,
  score integer not null,
  weight numeric not null default 0.125,
  created_at timestamptz not null default now()
);

create table if not exists public.recommendations (
  id uuid primary key default uuid_generate_v4(),
  audit_id uuid references public.audits on delete cascade,
  title text not null,
  summary text,
  category text,
  effort text,
  impact text,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default uuid_generate_v4(),
  audit_id uuid references public.audits on delete cascade,
  url text,
  status text not null default 'processing',
  created_at timestamptz not null default now()
);

create table if not exists public.credit_transactions (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references public.organizations,
  delta integer not null,
  reason text,
  created_at timestamptz not null default now()
);

create or replace function public.adjust_credits(org_id uuid, credit_delta integer)
returns integer
language plpgsql
security definer
as $$
declare
  new_balance integer;
begin
  update public.organizations
  set credits = credits + credit_delta
  where id = org_id
  returning credits into new_balance;

  insert into public.credit_transactions (organization_id, delta, reason)
  values (org_id, credit_delta, 'API adjustment');

  return new_balance;
end;
$$;


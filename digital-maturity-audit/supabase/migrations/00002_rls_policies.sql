alter table public.organizations enable row level security;
alter table public.users enable row level security;
alter table public.audits enable row level security;
alter table public.interviews enable row level security;
alter table public.interview_responses enable row level security;
alter table public.maturity_dimensions enable row level security;
alter table public.recommendations enable row level security;
alter table public.reports enable row level security;
alter table public.credit_transactions enable row level security;

create policy "Users access their organization"
on public.organizations
for select using (id in (select organization_id from public.users where id = auth.uid()));

create policy "Users see linked audits"
on public.audits
for select using (
  organization_id in (
    select organization_id from public.users where id = auth.uid()
  )
);

create policy "Users manage interviews"
on public.interviews
for select using (
  audit_id in (
    select id from public.audits
    where organization_id in (
      select organization_id from public.users where id = auth.uid()
    )
  )
);

create policy "Admins insert interviews"
on public.interviews
for insert with check (
  auth.jwt()->> 'role' = 'admin'
);

create policy "Users see recommendations"
on public.recommendations
for select using (
  audit_id in (
    select id from public.audits
    where organization_id in (
      select organization_id from public.users where id = auth.uid()
    )
  )
);


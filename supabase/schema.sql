-- Run this in the Supabase SQL editor for your project.

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  client_name text,
  description text not null default '',
  tech_stack text[] not null default '{}',
  project_url text,
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

-- Anyone can read projects (the public portfolio page).
create policy "Projects are publicly readable"
  on public.projects for select
  using (true);

-- Only authenticated users (i.e. you, logged into /admin) can write.
create policy "Authenticated users can insert projects"
  on public.projects for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update projects"
  on public.projects for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete projects"
  on public.projects for delete
  to authenticated
  using (true);

-- After running this, create your admin login in
-- Supabase Dashboard -> Authentication -> Users -> Add user,
-- using the email/password you want to log into /admin with.

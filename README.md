# Semin Numanović — Portfolio

Personal portfolio site built with Next.js, Tailwind CSS, and Supabase. Projects
shown on the homepage are managed through a small admin panel at `/admin`.

## Getting started

```bash
npm install
cp .env.local.example .env.local # fill in your Supabase project values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site, and
[http://localhost:3000/admin](http://localhost:3000/admin) for the admin panel.

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run `supabase/schema.sql` to create the `projects` table
   and its row-level security policies.
3. In **Authentication → Users**, add one user with the email/password you
   want to use to log into `/admin`. Sign-ups are not exposed anywhere in the
   app, so this is the only account that can manage projects.
4. Copy your project URL and anon key from **Project Settings → API** into
   `.env.local`:

   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

## Project structure

- `src/app/page.tsx` — public portfolio page (hero, work, about, services, contact)
- `src/app/admin` — login + dashboard for adding/editing/deleting projects
- `src/lib/supabase` — Supabase client helpers (browser, server, proxy/session)
- `src/proxy.ts` — protects `/admin/*` routes, redirects signed-out visitors to login
- `supabase/schema.sql` — database schema and RLS policies

## Deploying

Any Next.js host works (e.g. Vercel). Set the two `NEXT_PUBLIC_SUPABASE_*`
environment variables in your hosting provider's dashboard before deploying.

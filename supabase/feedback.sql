-- Feedback table for the site's feedback button.
-- Run this in Supabase → SQL Editor.

create table if not exists public.feedback (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name       text,
  email      text,
  message    text not null,
  page       text,
  locale     text
);

-- Lock the table down with Row Level Security.
alter table public.feedback enable row level security;

-- Allow the public (anon) key to INSERT feedback only — no select/update/delete.
-- This is what the website uses; reading is done via the dashboard / service role.
create policy "anon can insert feedback"
  on public.feedback
  for insert
  to anon
  with check (true);

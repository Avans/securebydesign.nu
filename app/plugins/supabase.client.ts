import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Single browser-side Supabase client, provided as `$supabase`.
export default defineNuxtPlugin(() => {
  const { supabaseUrl, supabaseAnonKey } = useRuntimeConfig().public

  const client: SupabaseClient | null =
    supabaseUrl && supabaseAnonKey
      ? createClient(supabaseUrl as string, supabaseAnonKey as string)
      : null

  if (!client) {
    console.warn('[supabase] SUPABASE_URL / SUPABASE_ANON_KEY missing — feedback is disabled.')
  }

  return { provide: { supabase: client } }
})

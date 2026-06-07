import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function hasServiceRoleSecret(key: string | undefined) {
  return Boolean(key && key.trim().length > 0 && !key.startsWith('sb_publishable_') && !key.startsWith('sb_anon_'))
}

export const createClient = async () => {
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY

  // Return a pure admin client that bypasses RLS since we verify auth with NextAuth instead of Supabase Auth
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret!
  )
}

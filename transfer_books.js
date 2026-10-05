import { createClient } from '@supabase/supabase-js';

const url = "https://ciduixfyorzjtrrsofnv.supabase.co";
// I will use the service role key or anon key? I can only use anon key. Since we have RLS enabled and only authenticated users can insert, I will need to login with the user's credentials? No, the user hasn't given me credentials.
// But wait! If RLS is enabled for INSERT, the anon key CANNOT insert data!
// How can I transfer the contents if I don't have the user's password?

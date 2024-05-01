import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL, // Your Supabase URL
  process.env.SUPABASE_KEY // Your Supabase service key
);

export { supabase };

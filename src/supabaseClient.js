import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jaxupcklwlfowzymidlh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpheHVwY2tsd2xmb3d6eW1pZGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MjM5OTEsImV4cCI6MjA3OTA5OTk5MX0.zB6-Qslbsq9_XEWwFClTBH9JaCC7BjvJjcRJGWEwX1g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
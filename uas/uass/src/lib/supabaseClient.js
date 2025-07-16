import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hfrqdstmmfbcouonnwip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmcnFkc3RtbWZiY291b25ud2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2Nzg2NzUsImV4cCI6MjA2NzI1NDY3NX0.2ocxU9J0CHp-idLd3MTqdMuo99RRVVZhoguAagKfhZQ';

export const supabase = createClient(supabaseUrl, supabaseKey);

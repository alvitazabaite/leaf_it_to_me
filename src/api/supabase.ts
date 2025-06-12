import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrunhiglbpbmuynkurtq.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlydW5oaWdsYnBibXV5bmt1cnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMjAwMjMsImV4cCI6MjA2NDY5NjAyM30.UZh9JGP_fQIFeqDYBL56OLGhYLt213DHllvNwIorg20';

export const supabase = createClient(supabaseUrl, supabaseKey);

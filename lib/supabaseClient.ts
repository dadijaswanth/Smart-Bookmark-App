import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://qfzrtlrcrecnhfzuhuox.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmenJ0bHJjcmVjbmhmenVodW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMDE5OTksImV4cCI6MjA4NjY3Nzk5OX0.-YqQSMJsWRWb3PyA3H0P0C5T8FOVvIaRkwC2QvkDucE'
)

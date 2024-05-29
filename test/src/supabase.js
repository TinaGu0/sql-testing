import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eugtrpscybnywbqiuphn.supabase.co' //url
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1Z3RycHNjeWJueXdicWl1cGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5NDQ5NTUsImV4cCI6MjAzMjUyMDk1NX0.M4HoHu8RE9OXiHO66tE1LSoTXCJz-kj0PdS3pJv___U' //anon key
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

export { supabase }
import {createClient} from "@supabase/supabase-js";


export const supabase = createClient(
    "https://ljwijxxohedqfmhfkytg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd2lqeHhvaGVkcWZtaGZreXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg0NTI3OTAsImV4cCI6MTk3NDAyODc5MH0.pThf0jv0a-dlWwdwoe8LQLldbCu-idD0HBJHb0boeDs",
    { detectSessionInUrl: false }
);
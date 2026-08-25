
import { createClient } from "@/lib/supabase/client";

export async function signInWithEmail(
  email: string,
  password: string,
) {
  const supabase = createClient();

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    throw error;
  }

  return data;
}




export async function signUpWithEmail(
  fullName: string,
  email: string,
  password: string,
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}
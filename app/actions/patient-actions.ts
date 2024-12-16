"use server";
import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { redirect } from "next/navigation";

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { data: signInData, error: signInError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (signInError) {
    return encodedRedirect("error", "/patient/sign-in", signInError.message);
  }

  const userId = signInData.user?.id;

  if (!userId) {
    return encodedRedirect("error", "/patient/sign-in", "User not found");
  }

  const { data: patientData, error: patientError } = await supabase
    .from("patient")
    .select("id_user")
    .eq("id_user", userId);

  if (patientError || !patientData) {
    await supabase.auth.signOut();
    return encodedRedirect("error", "/patient/sign-in", patientError.message);
  }

  return redirect("/protected/patient");
};

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const phone = formData.get("phone") as string;


  const supabase = await createClient();

  const { data: userData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    return encodedRedirect("error", "/patient/sign-up", signUpError.message);
  }

  const userId = userData.user?.id;

  if (!userId) {
    return encodedRedirect("error", "/patient/sign-up", "Failed to create user");
  }

  const { error: patientError } = await supabase.from("patient").insert({
    id_user: userId,
    first_name: first_name,
    last_name: last_name,
    phone: phone,
  });

  if (patientError) {
    await supabase.auth.admin.deleteUser(userId);
    return encodedRedirect("error", "/patient/sign-up", patientError.message);
  }

  return redirect(
    "/patient/sign-in?message=Account created successfully. Please sign in."
  );
};



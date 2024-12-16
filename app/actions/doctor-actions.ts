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
    return encodedRedirect("error", "/doctor/sign-in", signInError.message);
  }

  const userId = signInData.user?.id;

  if (!userId) {
    return encodedRedirect("error", "/doctor/sign-in", "User not found");
  }

  const { data: doctorData, error: doctorError } = await supabase
    .from("doctor")
    .select("id_user")
    .eq("id_user", userId);

  if (doctorError || !doctorData) {
    await supabase.auth.signOut();
    return encodedRedirect("error", "/doctor/sign-in", doctorError.message);
  }

  return redirect("/protected/doctor");
};

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const speciality = formData.get("speciality") as string;

  const supabase = await createClient();

  const { data: userData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    return encodedRedirect("error", "/doctor/sign-up", signUpError.message);
  }

  const userId = userData.user?.id;

  if (!userId) {
    return encodedRedirect("error", "/doctor/sign-up", "Failed to create user");
  }

  const { error: doctorError } = await supabase.from("doctor").insert({
    id_user: userId,
    name: name,
    phone: phone,
    speciality: speciality,
  });

  if (doctorError) {
    await supabase.auth.admin.deleteUser(userId);
    return encodedRedirect("error", "/doctor/sign-up", doctorError.message);
  }

  return redirect(
    "/doctor/sign-in?message=Account created successfully. Please sign in."
  );
};
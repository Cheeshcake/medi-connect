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
    return encodedRedirect("error", "/admin/sign-in", signInError.message);
  }

  const userId = signInData.user?.id;

  if (!userId) {
    return encodedRedirect("error", "/admin/sign-in", "User not found");
  }

  const { data: adminData, error: adminError } = await supabase
    .from("admin")
    .select("id_user")
    .eq("id_user", userId);

  if (adminError || !adminData || adminData.length === 0) {
    await supabase.auth.signOut();
    return encodedRedirect("error", "/admin/sign-in", adminError?.message || "User not found");
  }

  console.log("adminData", adminData);

  return redirect("/protected/admin");
};

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;


  const supabase = await createClient();

  const { data: userData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    return encodedRedirect("error", "/admin/sign-up", signUpError.message);
  }

  const userId = userData.user?.id;

  if (!userId) {
    return encodedRedirect("error", "/admin/sign-up", "Failed to create user");
  }

  const { error: adminError } = await supabase.from("admin").insert([
    {
        id_user: userId,
        name: name,
        phone: phone,
      }
  ]).select();

  if (adminError) {
    await supabase.auth.admin.deleteUser(userId);
    return encodedRedirect("error", "/admin/sign-up", adminError.message);
  }

  return redirect(
    "/admin/sign-in?message=Account created successfully. Please sign in."
  );
};

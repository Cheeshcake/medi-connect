"use server";
import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { get } from "http";
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

export const getDoctorInfoAction = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      error: userError?.message || "User not authenticated",
      data: null,
    };
  }

  const userId = user.id;

  const { data: doctorData, error: doctorError } = await supabase
    .from("doctor")
    .select("*")
    .eq("id_user", userId)
    .single();

  if (doctorError || !doctorData) {
    return {
      error: doctorError?.message || "Patient details not found",
      data: null,
    };
  }

  return {
    error: null,
    data: doctorData,
  };
};

export const getPatientsAction = async () => {
  const supabase = await createClient();

  const { data: patientsData, error: patientsError } = await supabase
    .from("patient")
    .select("id, id_user, created_at, first_name, last_name, phone, image_url");

  if (patientsError || !patientsData) {
    return {
      error: patientsError?.message || "Patients not found",
      data: null,
    };
  }

  return {
    error: null,
    data: patientsData,
  };
};

export const getPatientByIdAction = async (id: string) => {
  const supabase = await createClient();

  const { data: patientData, error: patientError } = await supabase
    .from("patient")
    .select("*")
    .eq("id", id)
    .single();

  if (patientError || !patientData) {
    return {
      error: patientError?.message || "Patient not found",
      data: null,
    };
  }

  return {
    error: null,
    data: patientData,
  };
};

export const getDoctorAppointmentsAction = async (id: string) => {
  const supabase = await createClient();
  const { data: appointmentsData, error: appointmentsError } = await supabase
    .from("consultation")
    .select(
      `
    *,
    patient:id_patient(*)
  `
    )
    // .eq("id_doctor", id)
    .returns<Array<any>>();
  if (appointmentsError || !appointmentsData) {
    return {
      error: appointmentsError?.message || "Appointments not found",
      data: null,
    };
  }

  return {
    error: null,
    data: appointmentsData,
  };
};

export const changeAppointmentStatusAction = async (
  id: string,
  status: string
) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("consultation")
    .update({ status })
    .eq("id", id);

  if (error || !data) {
    return {
      error: error?.message || "Error updating appointment status",
      data: null,
    };
  }

  return {
    error: null,
    data: data,
  };
};

export const addPrescriptionAction = async (prescription: {
  id_patient: string;
  content: string;
}) => {
  const supabase = await createClient();
  const { id_patient, content } = prescription;
  const { data, error } = await supabase.from("prescription").insert({
    id_patient: id_patient,
    content: content,
  });

  if (error) {
    return {
      error: error.message,
      data: null,
    };
  }

  return {
    error: null,
    data: data,
  };
};

export const getPrescriptionsAction = async () => {
  const supabase = await createClient();
  const { data: prescriptionsData, error: prescriptionsError } = await supabase
    .from("prescription")
    .select(
      `
    *,
    patient:id_patient(*)
  `
    )
    .returns<Array<any>>();
  if (prescriptionsError || !prescriptionsData) {
    return {
      error: prescriptionsError?.message || "Prescriptions not found",
      data: null,
    };
  }

  return {
    error: null,
    data: prescriptionsData,
  };
};


export const deletePrescriptionAction = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("prescription").delete().eq("id", id);

  if (error) {
    return {
      error: error.message,
      data: null,
    };
  }

  return {
    error: null,
    data: data,
  };
};
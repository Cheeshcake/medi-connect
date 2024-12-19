import { DoctorCertification, DoctorEducation } from "./doctor";

export type TPatientInfo = {
  first_name: string;
  last_name: string;
  phone: string;
  illnesses: string[];
  image_url: string;
};

export type GetPatientInfoResponse = {
  error: string | null;
  data: TPatientInfo | null;
};

export type Appointment = {
  id_doctor: string;
  date: Date;
  time: string;
  reason: string;
  message: string;
};

export type BookAppointmentResponse = {
  error: string | null;
  data: Appointment | null;
};

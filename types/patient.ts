

export type TPatientInfo = {
  id: string;
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
  id_patient:string;
  id_doctor: string;
  date: string;
  time: string;
  reason: string;
  message: string;
};

export type BookAppointmentResponse = {
  error: string | null;
  data: Appointment | null;
};

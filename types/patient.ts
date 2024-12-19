export type TPatientInfo = {
  first_name: string;
  last_name: string;
  phone: string;
  illnesses: string[];
};

export type GetPatientInfoResponse = {
  error: string | null;
  data: TPatientInfo | null;
};

export type TDoctorInfo = {
  id: number;
  name: string;
  phone: string;
  speciality: string;
  experience: number;
  rating: number;
  location: string;
  num_patients: number;
  slots: number;
  created_at: Date;
};

export type GetDoctorsResponse = {
  error: string | null;
  data: TDoctorInfo[] | null;
};

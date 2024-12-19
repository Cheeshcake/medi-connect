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

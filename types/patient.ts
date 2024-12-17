export type TPatientInfo = {
  first_name: string;
  last_name: string;
  phone: string;
};

export type GetPatientInfoResponse = {
  error: string | null;
  data: TPatientInfo | null;
};

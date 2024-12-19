export type DoctorEducation = {
  degree: string;
  institution: string;
  year: number;
};

export type DoctorCertification = {
  name: string;
  organization: string;
  year: number;
};

export type TDoctorInfo = {
  id: number;
  name: string;
  phone: string;
  image_url: string;
  speciality: string;
  experience: number;
  rating: number;
  location: string;
  num_patients: number;
  slots: number;
  bio: string;
  education: DoctorEducation[];
  certifications: DoctorCertification[];
  created_at: Date;
};

export type GetDoctorsResponse = {
  error: string | null;
  data: TDoctorInfo[] | null;
};

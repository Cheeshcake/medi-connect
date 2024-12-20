"use client";

import React, { createContext, useContext, useState } from "react";
import {
  DoctorEducation,
  DoctorCertification,
} from "@/types/doctor";

export interface DoctorType {
  id: string;
  id_user: string;
  name: string;
  phone: string;
  speciality: string;
  createdAt: string;
  image_url?: string;
  num_patients?: number;
  slots?: number;
  rating?: number;
  certifications?: DoctorCertification[];
  education?: DoctorEducation[];
  bio?: string;
  experience?: number;
  location?: string;
}

interface DoctorContextType {
  doctor: DoctorType;
  setDoctor: React.Dispatch<React.SetStateAction<DoctorType>>;
}

const DoctorContext = createContext<DoctorContextType>({
  doctor: {
    id: "",
    id_user: "",
    name: "",
    phone: "",
    speciality: "",
    createdAt: "",
    image_url: "",
    num_patients: 0,
    slots: 0,
    rating: 0,
    certifications: [],
    education: [],
    bio: "",
    experience: 0,
    location: "",
  },
  setDoctor: () => {},
});

export const useDoctor = () => {
  return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }: { children: React.ReactNode }) => {
  const [doctor, setDoctor] = useState<DoctorType>({
    id: "",
    id_user: "",
    name: "",
    phone: "",
    speciality: "",
    createdAt: "",
    image_url: undefined,
    num_patients: undefined,
    slots: undefined,
    rating: undefined,
    certifications: [],
    education: [],
    bio: undefined,
    experience: undefined,
    location: undefined,
  });

  return (
    <DoctorContext.Provider value={{ doctor, setDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

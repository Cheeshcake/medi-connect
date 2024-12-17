"use client";

import React, { createContext, useContext, useState } from "react";

interface DoctorType {
  id: string;
  id_user: string;
  name: string;
  phone: string;
  speciality: string;
  createdAt: string;
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
  },
  setDoctor: () => {},
});

export const useDoctor = () => {
  return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }: { children: React.ReactNode }) => {
  const [doctor, setDoctor] = useState({
    id: "",
    id_user: "",
    name: "",
    phone: "",
    speciality: "",
    createdAt: "",
  });

  return (
    <DoctorContext.Provider value={{ doctor, setDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

"use client";

import React from "react";
import { DoctorsList } from "@/components/patient/doctors-list";
import { useGetDoctors } from "@/hooks/patient/use-get-doctors";
import DoctorsListSkeleton from "@/components/patient/skeletons/doctors-list-skeleton";

const Page = () => {
  const { doctors, doctorsError, isGettingDoctors } = useGetDoctors();

  return (
    <div className=" mx-auto">
      <h1 className="text-3xl text-primary font-bold mb-6">Find a Doctor</h1>
      {isGettingDoctors ? (
        <DoctorsListSkeleton />
      ) : !doctors || doctorsError ? (
        <div>No Doctors Found</div>
      ) : (
        <DoctorsList doctors={doctors} />
      )}
    </div>
  );
};

export default Page;

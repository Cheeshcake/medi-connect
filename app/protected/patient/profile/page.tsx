"use client";
import React from "react";
import ProfileCard from "@/components/patient/profile-card";
import { useGetPatientInfo } from "@/hooks/patient/use-get-patient-info";
import ProfileCardSkeleton from "@/components/patient/skeletons/profile-card-skeletn";

const Page = () => {
  const { patientInfo, isGettingPatient } = useGetPatientInfo();

  const handleSave = (newData: typeof patientInfo) => {
    console.log("Saving updated patient data:", newData);
  };

  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl text-primary font-bold mb-6">Profile Overview</h1>
      {isGettingPatient ? (
        <ProfileCardSkeleton />
      ) : (
        <ProfileCard initialData={patientInfo} onSave={handleSave} />
      )}
    </div>
  );
};

export default Page;

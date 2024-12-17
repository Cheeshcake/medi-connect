"use client";
import React from "react";
import ProfileCard from "@/components/patient/profile-card";
import { useGetPatientInfo } from "@/hooks/patient/use-get-patient-info";
import ProfileCardSkeleton from "@/components/patient/skeletons/profile-card-skeletn";
import { useEditPatient } from "@/hooks/patient/use-edit-patient";
import { TPatientInfo } from "@/types/patient";

const Page = () => {
  const { patientInfo, isGettingPatient } = useGetPatientInfo();

  const { editProfile, isEditingProfile } = useEditPatient();

  const handleSave = (newData: TPatientInfo) => {
    console.log("Saving updated patient data:", newData);

    const formData = new FormData();
    formData.append("first_name", newData.first_name);
    formData.append("last_name", newData.last_name);
    formData.append("phone", newData.phone);

    editProfile({ data: formData });
  };

  if (!patientInfo) {
    return <div>No info available</div>;
  }

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

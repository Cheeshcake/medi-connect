"use client";
import React from "react";
import ProfileCard from "@/components/patient/profile-card";
import { useGetPatientInfo } from "@/hooks/patient/use-get-patient-info";
import ProfileCardSkeleton from "@/components/patient/skeletons/profile-card-skeleton";
import { useEditPatient } from "@/hooks/patient/use-edit-patient";
import { TPatientInfo } from "@/types/patient";
import { PatientChart } from "@/components/patient/patient-chart";
import { IllnessesAccordion } from "@/components/patient/illnesses-accordion";
import IllnessesAccordionSkeleton from "@/components/patient/skeletons/illnesses-accordion-skeleton";

const Page = () => {
  const { patientInfo, isGettingPatient } = useGetPatientInfo();

  const { editProfile, isEditingProfile } = useEditPatient();

  const handleSave = (newData: TPatientInfo) => {
    const formData = new FormData();
    formData.append("first_name", newData.first_name);
    formData.append("last_name", newData.last_name);
    formData.append("phone", newData.phone);
    if (newData.image_url !== undefined) {
      formData.append("image_url", newData.image_url || "");
    }

    editProfile({ data: formData });
  };
  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl text-primary font-bold mb-6">Profile Overview</h1>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {isGettingPatient ? (
            <ProfileCardSkeleton />
          ) : (
            <ProfileCard
              initialData={patientInfo}
              onSave={handleSave}
              isLoading={isEditingProfile}
            />
          )}
          {isGettingPatient ? (
            <IllnessesAccordionSkeleton />
          ) : (
            <IllnessesAccordion illnesses={patientInfo.illnesses} />
          )}
        </div>
        <PatientChart />
      </div>
    </div>
  );
};

export default Page;

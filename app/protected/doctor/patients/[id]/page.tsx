"use client";
import React from "react";
import ProfileCardSkeleton from "@/components/patient/skeletons/profile-card-skeleton";
import { PatientChart } from "@/components/patient/patient-chart";
import IllnessesAccordionSkeleton from "@/components/patient/skeletons/illnesses-accordion-skeleton";
import { useParams } from "next/navigation";
import { useGetPatientById } from "@/hooks/doctor/use-get-patient-by-id";
import ProfileCard from "@/components/doctor/patients/patient-card";
import { TPatientInfo } from "@/types/patient";
import { IllnessesAccordion } from "@/components/doctor/patients/illnesses-card";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const Page = () => {
  const { id } = useParams();
  const {
    data: patientInfo,
    isError,
    isLoading,
  } = useGetPatientById(id as string);

  return (
    <div className="mx-auto py-8 max-w-6xl">
      <Link
        href={"/protected/doctor/patients"}
        className="text-sm flex items-center gap-2 text-primary mb-2 hover:text-primary/80  "
      >
        {" "}
        <ArrowLeft className="w-5" />
        return to all patients
      </Link>
      <h1 className="text-3xl text-primary font-bold mb-6">Patient Info</h1>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {isLoading ? (
            <ProfileCardSkeleton />
          ) : (
            <ProfileCard
              initialData={patientInfo?.data ?? ({} as TPatientInfo)}
            />
          )}
          {isLoading ? (
            <IllnessesAccordionSkeleton />
          ) : (
            <IllnessesAccordion
              illnesses={patientInfo?.data?.illnesses as string[]}
            />
          )}
        </div>
        <PatientChart />
      </div>
    </div>
  );
};

export default Page;

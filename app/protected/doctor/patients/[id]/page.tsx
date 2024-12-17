"use client";
import React from "react";
import { useGetPatientById } from "@/hooks/doctor/use-get-patient-by-id";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PatientDetails } from "@/components/doctor/patients/patient-details";

export default function PatientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const { data, isLoading, isError, error } = useGetPatientById(id);
  const patient = data?.data;

  return (
    <div className="pt-4 px-4">
      <div>
        <Link
          className="text-md text-primary mb-5 flex items-center gap-2"
          href="/protected/doctor/patients"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to All Patients
        </Link>
      </div>
      <div className="container mx-auto py-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError && error ? (
          <div>{(error as Error)?.message}</div>
        ) : patient ? (
          <PatientDetails patient={patient} />
        ) : (
          <div>Patient not found</div>
        )}
      </div>
    </div>
  );
}

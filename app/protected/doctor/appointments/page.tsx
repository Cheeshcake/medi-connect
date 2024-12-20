"use client";
import { useDoctor } from "@/app/providers/doctor-provider";
import AppointmentsList from "@/components/doctor/appointments/appointments-list";
import SkeletonAppointment from "@/components/doctor/appointments/skeleton-appointment";
import { useGetAppointments } from "@/hooks/doctor/use-get-appointments";
import React from "react";
export default function DoctorAppointmentsPage() {
  const { doctor } = useDoctor();
  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useGetAppointments(doctor?.id);
  console.log(appointments);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Doctor's Appointments</h1>
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SkeletonAppointment />
            <SkeletonAppointment />
            <SkeletonAppointment />

            
        </div>
      ) : isError ? (
        <div>{(error as Error).message}</div>
      ) : (
        <AppointmentsList appointments={appointments?.data} />
      )}
    </div>
  );
}

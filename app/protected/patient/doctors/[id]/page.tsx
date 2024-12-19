"use client";

import React from "react";
import { useGetDoctor } from "@/hooks/patient/use-get-doctor";
import DoctorProfileSkeleton from "@/components/patient/skeletons/doctor-profile-skeleton";
import { DoctorProfileInfo } from "@/components/patient/doctor-profile-info";
import { DoctorBooking } from "@/components/patient/doctor-booking";

const DoctorProfilePage = () => {
  const { data: doctor, isLoading, error } = useGetDoctor();

  const handleBookAppointment = (date: Date, time: string) => {
    // This function will be implemented later to open the NiceModal dialog
    console.log("Booking appointment for:", date, time);
  };

  if (isLoading) return <DoctorProfileSkeleton />;
  if (error) return <div>Error loading doctor profile</div>;
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl text-primary font-bold mb-6">Doctor Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <DoctorProfileInfo doctor={doctor} />
        </div>
        <div className="lg:col-span-2">
          <DoctorBooking onBook={handleBookAppointment} />
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;

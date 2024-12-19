"use client";

import React from "react";
import DoctorProfileSkeleton from "@/components/patient/skeletons/doctor-profile-skeleton";
import { DoctorProfileInfo } from "@/components/patient/doctor-profile-info";
import { DoctorBooking } from "@/components/patient/doctor-booking";
import { useGetDoctorById } from "@/hooks/patient/use-get-doctor";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { showBookAppointmentDialog } from "@/components/patient/book-appointment-dialog";

const DoctorProfilePage = () => {
  const { id } = useParams();
  const { data: doctor, isLoading, error } = useGetDoctorById(id as string);

  const handleBookAppointment = (date: Date, time: string) => {
    console.log("Booking appointment for:", date, time);
    showBookAppointmentDialog({
      doctorId: doctor?.id.toString() || "",
      date,
      time,
    });
  };

  if (isLoading) return <DoctorProfileSkeleton />;
  if (error) return <div>Error loading doctor profile</div>;
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="mx-auto py-8">
      <Link href={"/protected/patient/doctors"}>
        <Button
          variant={"ghost"}
          className="text-primary hover:text-primary/70 hover:bg-transparent pl-0"
        >
          <ArrowLeft />
          Go back to list of doctors
        </Button>
      </Link>
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

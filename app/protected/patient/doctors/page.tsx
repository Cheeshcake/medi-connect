"use client";

import React from "react";
import { DoctorsList } from "@/components/patient/doctors-list";
import { useGetDoctors } from "@/hooks/patient/use-get-doctors";

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Jane Smith",
    specialty: "Cardiologist",
    rating: 4.8,
    location: "New York",
    availableSlots: 3,
    imageUrl: "/placeholder.svg?height=100&width=100",
    patients: 1000,
    experience: 15,
  },
  {
    id: 2,
    name: "John Doe",
    specialty: "Dermatologist",
    rating: 4.5,
    location: "Los Angeles",
    availableSlots: 5,
    imageUrl: "/placeholder.svg?height=100&width=100",
    patients: 800,
    experience: 10,
  },
  {
    id: 3,
    name: "Emily Brown",
    specialty: "Pediatrician",
    rating: 4.9,
    location: "Chicago",
    availableSlots: 2,
    imageUrl: "/placeholder.svg?height=100&width=100",
    patients: 1200,
    experience: 20,
  },
  {
    id: 4,
    name: "Michael Lee",
    specialty: "Orthopedic Surgeon",
    rating: 4.7,
    location: "Houston",
    availableSlots: 4,
    imageUrl: "/placeholder.svg?height=100&width=100",
    patients: 950,
    experience: 12,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    specialty: "Neurologist",
    rating: 4.6,
    location: "Philadelphia",
    availableSlots: 1,
    imageUrl: "/placeholder.svg?height=100&width=100",
    patients: 750,
    experience: 8,
  },
];

const Page = () => {
  const { doctors, doctorsError, isGettingDoctors } = useGetDoctors();

  if (!doctors) {
    return <div>No Doctors Found</div>;
  }
  return (
    <div className=" mx-auto">
      <h1 className="text-3xl text-primary font-bold mb-6">Find a Doctor</h1>
      <DoctorsList doctors={doctors} />
    </div>
  );
};

export default Page;

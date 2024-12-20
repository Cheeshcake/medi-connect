"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import DoctorCard from "./doctor-card";
import { TDoctorInfo } from "@/types/doctor";

type DoctorsListProps = {
  doctors: TDoctorInfo[];
};

const specialties = [
  "All",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Neurologist",
];

export function DoctorsList({ doctors }: DoctorsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpeciality === "All" || doctor.speciality === selectedSpeciality)
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 md:max-w-[20rem]  bg-patient-background "
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <Select
          value={selectedSpeciality}
          onValueChange={setSelectedSpeciality}
        >
          <SelectTrigger className="w-full md:w-[200px]  bg-patient-background ">
            <SelectValue placeholder="Select specialty" />
          </SelectTrigger>
          <SelectContent className="bg-patient-background ">
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <p className="text-center text-patient-secondary-text mt-8">
          No doctors found matching your criteria.
        </p>
      )}
    </div>
  );
}

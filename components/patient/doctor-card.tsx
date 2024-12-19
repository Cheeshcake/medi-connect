"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SpotlightCard from "../spotlight/spotlight-card";
import { TDoctorInfo } from "@/types/patient";

type DoctorCardProps = {
  doctor: TDoctorInfo;
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="z-10 relative flex flex-col justify-between h-full gap-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={doctor.image_url || ""} alt={doctor.name} />
            <AvatarFallback className="bg-primary text-white dark:text-neutral-800 font-medium">
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-1 capitalize">
              Dr. {doctor.name}
            </h2>
            <p className="text-sm text-patient-secondary-text capitalize mb-2">
              {doctor.speciality}
            </p>
            <div className="flex items-center gap-1 mb-2">
              <Star size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}/5</span>
              <Badge className="ml-2">{doctor.experience} years exp.</Badge>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="" />
              <span className="text-sm font-medium">{doctor.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="" />
              <span className="text-sm font-medium">
                {doctor.num_patients}+ patients
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="" />
              <span className="text-sm font-medium">
                {doctor.slots} slots available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="" />
              <span className="text-sm font-medium">Next available: Today</span>
            </div>
          </div>
          <Link href={`/patient/doctors/${doctor.id}`} className="w-full ">
            <Button className="w-full">View Profile & Book</Button>
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default DoctorCard;

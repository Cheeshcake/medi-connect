"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  availableSlots: number;
  imageUrl: string;
  patients: number;
  experience: number;
};

type DoctorCardProps = {
  doctor: Doctor;
};

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={doctor.imageUrl} alt={doctor.name} />
            <AvatarFallback>
              {doctor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-1">{doctor.name}</h2>
            <p className="text-sm text-muted-foreground mb-2">
              {doctor.specialty}
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Star size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating} / 5</span>
              <Badge variant="outline" className="ml-2">
                {doctor.experience} years exp.
              </Badge>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-muted-foreground" />
            <span className="text-sm">{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-muted-foreground" />
            <span className="text-sm">{doctor.patients}+ patients</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-muted-foreground" />
            <span className="text-sm">
              {doctor.availableSlots} slots available
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-muted-foreground" />
            <span className="text-sm">Next available: Today</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <Link href={`/patient/doctors/${doctor.id}`} className="w-full">
          <Button className="w-full">View Profile & Book</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Star,
  Users,
  Clock,
  Phone,
  BookOpen,
  Award,
} from "lucide-react";
import SpotlightCard from "@/components/spotlight/spotlight-card";
import {
  DoctorEducation,
  DoctorCertification,
  TDoctorInfo,
} from "@/types/doctor";

type DoctorProfileInfoProps = {
  doctor: TDoctorInfo;
};

export const DoctorProfileInfo = ({ doctor }: DoctorProfileInfoProps) => {
  return (
    <>
      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6 p-6">
          <Avatar className="w-32 h-32">
            <AvatarImage src={doctor.image_url || ""} alt={doctor.name} />
            <AvatarFallback className="bg-primary text-white dark:text-neutral-800 text-2xl font-medium">
              {doctor.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-2 capitalize">
              Dr. {doctor.name}
            </h2>
            <p className="text-lg text-patient-secondary-text mb-2 capitalize">
              {doctor.speciality}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-400" />
              <span className="font-medium">{doctor.rating}/5</span>
              <Badge>{doctor.experience} years exp.</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 font-medium">
                <MapPin />
                <span>{doctor.location}</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Users />
                <span>{doctor.num_patients}+ patients</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Phone />
                <span>{doctor.phone}</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock />
                <span>{doctor.slots} slots available</span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border mb-8">
        <CardHeader>
          <CardTitle className="capitalize">About Dr. {doctor.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-patient-secondary-text font-medium">
            {doctor.bio}
          </p>
        </CardContent>
      </SpotlightCard>

      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border mb-8">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {doctor.education.map((edu: DoctorEducation, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <BookOpen className="text-primary mt-1" />
                <div>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-patient-secondary-text">
                    {edu.institution}, {edu.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </SpotlightCard>

      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {doctor.certifications.map(
              (cert: DoctorCertification, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <Award className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-patient-secondary-text">
                      {cert.organization}, {cert.year}
                    </p>
                  </div>
                </li>
              )
            )}
          </ul>
        </CardContent>
      </SpotlightCard>
    </>
  );
};

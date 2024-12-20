import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Star,
  Users,
  Clock,
  Phone,
  BookOpen,
  Award,
} from "lucide-react";
import {
  DoctorEducation,
  DoctorCertification,
} from "@/types/doctor";
import { DoctorType } from "@/app/providers/doctor-provider";


type DoctorProfileInfoProps = {
  doctor: DoctorType;
};

export const DoctorInfo = ({ doctor }: DoctorProfileInfoProps) => {
  return (
    <div className="lg:pb-[120px] grid grid-cols-2 gap-8">
      <div className="bg-white/30 dark:bg-white/10 border-border mb-8 rounded-3xl p-8 h-full">
        <div className="flex flex-col md:flex-row items-start gap-6 p-6">
          <Avatar className="w-32 h-32">
            <AvatarImage src={doctor.image_url || "avatar.jpg"} alt={doctor.name} />
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
      </div>

      <div className="bg-white/30 dark:bg-white/10 border-border mb-8 rounded-3xl p-8 h-full">
        <CardHeader>
          <CardTitle className="capitalize">About Dr. {doctor.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-patient-secondary-text font-medium">
            {doctor.bio}
          </p>
        </CardContent>
      </div>

      <div className="bg-white/30 dark:bg-white/10 border-border mb-8 rounded-3xl p-8 h-full">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {doctor.education && doctor.education.map((edu: DoctorEducation, index: number) => (
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
      </div>

      <div className="bg-white/30 dark:bg-white/10 border-border rounded-3xl p-8 h-full">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {doctor.certifications && doctor.certifications.map(
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
      </div>
    </div>
  );
};

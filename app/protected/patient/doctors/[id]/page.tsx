"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import DoctorProfileSkeleton from "@/components/patient/skeletons/doctor-profile-skeleton";
import { useGetDoctor } from "@/hooks/patient/use-get-doctor";
import { DoctorCertification, DoctorEducation } from "@/types/doctor";

const DoctorProfilePage = () => {
  const { data: doctor, isLoading, error } = useGetDoctor();

  if (isLoading) return <DoctorProfileSkeleton />;
  if (error) return <div>Error loading doctor profile</div>;
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-primary font-bold mb-6">Doctor Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
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
                  <div className="flex items-center gap-2  font-medium">
                    <MapPin />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2  font-medium">
                    <Users />
                    <span>{doctor.num_patients}+ patients</span>
                  </div>
                  <div className="flex items-center gap-2  font-medium">
                    <Phone />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2  font-medium">
                    <Clock />
                    <span>{doctor.slots} slots available</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border mb-8">
            <CardHeader>
              <CardTitle className="capitalize">
                About Dr. {doctor.name}
              </CardTitle>
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

          <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border ">
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
        </div>

        <div>
          <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border sticky top-8">
            <CardHeader>
              <CardTitle>Book a Consultation</CardTitle>
              <CardDescription>
                Select a date and time for your appointment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={new Date()}
                className="rounded-md border mb-4"
              />
              <div className="grid grid-cols-3 gap-2 mb-4">
                {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map(
                  (time) => (
                    <Button key={time} variant="outline" className="w-full">
                      {time}
                    </Button>
                  )
                )}
              </div>
              <Button className="w-full">Book Appointment</Button>
            </CardContent>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;

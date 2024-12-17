"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Calendar, Phone, User } from "lucide-react";

interface PatientDetailsProps {
  patient: {
    id: string;
    name: string;
    age: number;
    gender: string;
    contactNumber: string;
    lastVisit: string;
    medicalHistory: string;
    currentMedications: string;
    allergies: string;
    bloodType: string;
  };
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">{patient.name}</CardTitle>
        <CardDescription>Patient ID: {patient.id}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 opacity-70" />
            <Label>Age/Gender:</Label>
            <span>
              {patient.age} / {patient.gender}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 opacity-70" />
            <Label>Contact:</Label>
            <span>{patient.contactNumber}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 opacity-70" />
            <Label>Last Visit:</Label>
            <span>{patient.lastVisit}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Label>Blood Type:</Label>
            <span>{patient.bloodType}</span>
          </div>
        </div>
        <div>
          <Label>Medical History:</Label>
          <p className="mt-1">{patient.medicalHistory}</p>
        </div>
        <div>
          <Label>Current Medications:</Label>
          <p className="mt-1">{patient.currentMedications}</p>
        </div>
        <div>
          <Label>Allergies:</Label>
          <p className="mt-1">{patient.allergies}</p>
        </div>
      </CardContent>
    </Card>
  );
}

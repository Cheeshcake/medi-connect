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
    id: number;
    id_user: string;
    created_at: string;
    first_name: string;
    last_name: string;
    phone: string;
  };
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          {patient.first_name} {patient.last_name}
        </CardTitle>
        <CardDescription>Patient ID: {patient.id}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 opacity-70" />
            <Label>User ID:</Label>
            <span>{patient.id}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 opacity-70" />
            <Label>Contact:</Label>
            <span>{patient.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 opacity-70" />
            <Label>Created At:</Label>
            <span>{new Date(patient.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/protected/doctor/patients">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Patients List
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

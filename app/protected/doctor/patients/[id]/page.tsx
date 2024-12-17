import { notFound } from "next/navigation";
import { PatientDetails } from "@/components/doctor/patients/patient-details";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This would typically come from a database
const patients = [
  {
    id: "1",
    name: "John Doe",
    age: 35,
    gender: "Male",
    contactNumber: "123-456-7890",
    lastVisit: "2023-06-15",
    medicalHistory: "Hypertension, Diabetes Type 2",
    currentMedications: "Lisinopril, Metformin",
    allergies: "Penicillin",
    bloodType: "A+",
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 28,
    gender: "Female",
    contactNumber: "987-654-3210",
    lastVisit: "2023-06-10",
    medicalHistory: "Asthma",
    currentMedications: "Albuterol",
    allergies: "None",
    bloodType: "O-",
  },
];

async function getPatient(id: string) {
  // In a real application, this would be an API or database call
  const patient = patients.find((p) => p.id === id);
  if (!patient) {
    notFound();
  }
  return patient;
}

export default async function PatientPage({
  params,
}: {
  params: { id: string };
}) {
  const patient = await getPatient(params.id);

  return (
    <div className=" pt-4 px-4">
      <div className="">
        <Link
          className="text-md text-primary mb-5 flex items-center gap-2"
          href="/protected/doctor/patients"
        >
          <ArrowLeft className="w-6 h-6" />
          Back to All Patients
        </Link>
      </div>
      <div className="container mx-auto py-10">
        <PatientDetails patient={patient} />
      </div>
    </div>
  );
}

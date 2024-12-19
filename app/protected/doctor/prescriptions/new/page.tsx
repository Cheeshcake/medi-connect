import { PrescriptionForm } from "@/components/doctor/prescriptions/new-prescription";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-semibold">New Prescription</h1>
      <div className="justify-stretch w-full  mt-20 ">
        <PrescriptionForm />
      </div>
    </div>
  );
};

export default Page;

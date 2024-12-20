"use client";

import React from "react";
import DoctorProfileSkeleton from "@/components/patient/skeletons/doctor-profile-skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DoctorInfo } from "@/components/doctor/account/doctor-info";
import { useGetDoctor } from "@/hooks/use-get-user";

const DoctorProfilePage = () => {
  const { data: doctor, isLoading } = useGetDoctor();
  return (
    <div className="mx-auto py-8 max-w-6xl">
      <Link href={"/protected/doctor/dashboard"}>
        <Button
          variant={"ghost"}
          className="text-primary hover:text-primary/70 hover:bg-transparent pl-0"
        >
          <ArrowLeft />
          Go back to dashboard
        </Button>
      </Link>
      <h1 className="text-3xl text-primary font-bold mb-6">Doctor Profile</h1>
      <div className="">
        <div className="">
            {isLoading ? <DoctorProfileSkeleton /> : <DoctorInfo doctor={doctor?.data} />}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;

"use client";
import React, { useState } from "react";
import Dock from "@/components/dock/dock";
import { PATIENT_NAVIGATION_ITEMS } from "@/constants/patient-navigation";
import Image from "next/image";
import Link from "next/link";
import UserNav from "@/components/user/user-nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetPatientInfo } from "@/hooks/patient/use-get-patient-info";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0,
            gcTime: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col bg-patient-bg-gradient min-h-screen ">
        <div className="w-full flex justify-between items-center py-3 px-6">
          <Link href={"/protected/patient"} className="flex justify-center">
            <Image
              src={"/images/logo.webp"}
              className="w-16 h-16 object-contain"
              alt="Logo"
              width={1980}
              height={1450}
            />
          </Link>
          <UserNav />
        </div>
        <Dock items={PATIENT_NAVIGATION_ITEMS} position="left" />
        <div className=" py-5 px-5 md:px-14 md:pl-[6.5rem] max-w-[80rem] w-full mx-auto z-10">
          {children}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;

import React from "react";
import Dock from "@/components/dock/dock";
import { PATIENT_NAVIGATION_ITEMS } from "@/constants/patient-navigation";
import Image from "next/image";
import Link from "next/link";
import UserNav from "@/components/user/user-nav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-patient-bg-gradient h-screen ">
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
      <div className=" py-5 px-14 md:pl-[6.5rem] max-w-[80rem] w-full mx-auto z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Dock from "@/components/dock/dock";
import { PATIENT_NAVIGATION_ITEMS } from "@/constants/patient-navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Dock items={PATIENT_NAVIGATION_ITEMS} position="left" />
      <div className="ml-[7rem] p-5">{children}</div>
    </div>
  );
};

export default Layout;

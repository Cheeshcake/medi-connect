import { BriefcaseMedical, Home, Settings, User } from "lucide-react";

export const PATIENT_NAVIGATION_ITEMS = [
  {
    label: "Home",
    icon: <Home />,
    href: "/protected/patient",
  },
  {
    label: "Doctors",
    icon: <BriefcaseMedical />,
    href: "/protected/patient/doctors",
  },
  {
    label: "Patient Profile",
    icon: <Settings />,
    href: "/protected/patient/profile",
  },
];

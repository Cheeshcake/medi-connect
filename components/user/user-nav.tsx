import { AlertCircle, Bell } from "lucide-react";
import UserDropdown from "./user-dropdown";
import { TPatientInfo } from "@/types/patient";
import { useGetPatientInfo } from "@/hooks/patient/use-get-patient-info";

const UserNav = () => {
  const { patientInfo } = useGetPatientInfo();

  return (
    <div className="flex items-start justify-end gap-4">
      <div className="flex gap-2">
        <div className="cursor-pointer rounded-full border bg-white dark:bg-white/10 p-2">
          <Bell className="h-5 w-5" />
        </div>
        <div className="cursor-pointer rounded-full border bg-white dark:bg-white/10 p-2">
          <AlertCircle className="h-5 w-5" />
        </div>
      </div>
      <UserDropdown user={patientInfo} />
    </div>
  );
};

export default UserNav;

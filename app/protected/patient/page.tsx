import React from "react";
import { getPatientInfoAction } from "@/app/actions/patient-actions";
import { SplitText } from "@/components/text/split-text";
import InfoCard from "@/components/patient/info-card";
import { Activity, Calendar, FileText, Pill } from "lucide-react";

const Page = async () => {
  const { data, error } = await getPatientInfoAction();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-1">
        <SplitText
          text={`Welcome back, ${data?.first_name}!`}
          className="text-primary text-[3.5rem] font-bold"
        />
        <SplitText
          delay={40}
          text="Here's an overview of your health information and upcoming activities."
          className="text-patient-secondary-text text-xl font-medium"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <InfoCard title="Upcoming Appointments" icon={<Calendar />}>
          <div>
            <p className="font-semibold">Next appointment:</p>
            <p>Dr. Smith - Cardiology</p>
            <p>June 15, 2023 at 10:00 AM</p>
          </div>
        </InfoCard>
        <InfoCard title="Recent Test Results" icon={<FileText />}>
          <div>
            <p>Blood Work - May 28, 2023</p>
            <p>X-Ray Results - May 15, 2023</p>
            <p className="text-primary mt-2 cursor-pointer hover:underline w-fit">
              View all results
            </p>
          </div>
        </InfoCard>
        <InfoCard title="Medications" icon={<Pill />}>
          <div>
            <p>Lisinopril - 10mg daily</p>
            <p>Metformin - 500mg twice daily</p>
            <p className="text-primary mt-2 cursor-pointer hover:underline w-fit">
              View all medications
            </p>
          </div>
        </InfoCard>
        <InfoCard title="Health Metrics" icon={<Activity />}>
          <div>
            <p>Blood Pressure: 120/80 mmHg</p>
            <p>Weight: 70 kg</p>
            <p>Last updated: June 1, 2023</p>
          </div>
        </InfoCard>
      </div>
    </div>
  );
};

export default Page;

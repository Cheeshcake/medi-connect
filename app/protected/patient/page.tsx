import React from "react";
import { getPatientInfoAction } from "@/app/actions/patient-actions";
import { SplitText } from "@/components/text/split-text";

const Page = async () => {
  const { data, error } = await getPatientInfoAction();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
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
    </div>
  );
};

export default Page;

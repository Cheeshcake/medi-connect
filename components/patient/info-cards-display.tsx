"use client";
import React from "react";
import InfoCard from "@/components/patient/info-card";
import { Activity, Calendar, FileText, Pill } from "lucide-react";
import { motion } from "framer-motion";

const InfoCardsDisplay = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
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
    </motion.div>
  );
};

export default InfoCardsDisplay;

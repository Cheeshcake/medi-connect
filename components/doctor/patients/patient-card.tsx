"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, Thermometer } from "lucide-react";
import { TPatientInfo } from "@/types/patient";
import Image from "next/image";

type ProfileCardProps = {
  initialData: TPatientInfo;
};

const ProfileCard = ({ initialData }: ProfileCardProps) => {
  const [data, setData] = useState(initialData);

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className="w-full md:max-w-[30rem] " variants={item}>
      <div className="bg-white/30 dark:bg-white/10 rounded-3xl p-8 border-border h-full transition-all duration-300 ease-in-out hover:-translate-y-1.5">
        <div className="z-10 relative flex flex-col gap-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Personal Info</h2>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src={data.image_url ?? "/avatar.jpg"}
              alt={`${data.first_name} ${data.last_name}`}
              width={50}
              height={50}
              className="rounded-full"
            />

            <div>
              <h3 className="text-xl font-semibold">{`${data.first_name} ${data.last_name}`}</h3>
              <div className="mt-2 flex items-center">
                <Heart className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium">Health Status: Good</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-[30rem] mx-auto w-full">
            {Object.entries(data).map(
              ([key, value]) =>
                key !== "illnesses" &&
                key !== "image_url" && (
                  <div key={key} className="flex flex-col">
                    <label
                      htmlFor={key}
                      className="text-sm font-medium text-patient-secondary-text"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <p className="mt-1 text-neutral-800 dark:text-gray-100">
                      {value}
                    </p>
                  </div>
                )
            )}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Stats</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <Heart className="w-8 h-8 text-red-500 mb-1" />
                <span className="text-sm font-medium">Heart Rate</span>
                <span className="text-lg font-bold">72 bpm</span>
              </div>
              <div className="flex flex-col items-center">
                <Activity className="w-8 h-8 text-blue-500 mb-1" />
                <span className="text-sm font-medium">Activity</span>
                <Progress value={75} className="w-16 h-2 mt-1" />
              </div>
              <div className="flex flex-col items-center">
                <Thermometer className="w-8 h-8 text-yellow-500 mb-1" />
                <span className="text-sm font-medium">Temperature</span>
                <span className="text-lg font-bold">98.6°F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;

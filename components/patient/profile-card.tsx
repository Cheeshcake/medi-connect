"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../spotlight/spotlight-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit2, Check } from "lucide-react";
import { TPatientInfo } from "@/types/patient";

type ProfileCardProps = {
  initialData: TPatientInfo;
  onSave: (data: TPatientInfo) => void;
};

const ProfileCard = ({ initialData, onSave }: ProfileCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <motion.div variants={item}>
      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border max-w-[30rem] min-h-[11rem] transition-all duration-300 ease-in-out hover:-translate-y-1.5">
        <div className="z-10 relative flex flex-col gap-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Personal Info</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={isEditing ? handleSave : handleEdit}
            >
              {isEditing ? (
                <Check className="h-4 w-4" />
              ) : (
                <Edit2 className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label
                  htmlFor={key}
                  className="text-sm font-medium text-patient-secondary-text"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                {isEditing ? (
                  <Input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="mt-1"
                  />
                ) : (
                  <p className="mt-1 text-neutral-800 dark:text-gray-100">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default ProfileCard;

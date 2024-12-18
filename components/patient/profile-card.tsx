"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../spotlight/spotlight-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Edit2,
  Check,
  Loader,
  Heart,
  Activity,
  Thermometer,
} from "lucide-react";
import { TPatientInfo } from "@/types/patient";

type ProfileCardProps = {
  initialData: TPatientInfo;
  onSave: (data: TPatientInfo) => void;
  isLoading: boolean;
};

const ProfileCard = ({ initialData, onSave, isLoading }: ProfileCardProps) => {
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
    <motion.div className="w-full md:max-w-[30rem]" variants={item}>
      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border h-full transition-all duration-300 ease-in-out hover:-translate-y-1.5">
        <div className="z-10 relative flex flex-col gap-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Personal Info</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={isEditing ? handleSave : handleEdit}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="animate-spin w-4 h-4" />
              ) : isEditing ? (
                <Check className="h-4 w-4" />
              ) : (
                <Edit2 className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src="/placeholder.svg?height=80&width=80"
                alt={`${data.first_name} ${data.last_name}`}
              />
              <AvatarFallback>
                {data.first_name[0].toUpperCase()}
                {data.last_name[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{`${data.first_name} ${data.last_name}`}</h3>
              {/* <p className="text-sm text-muted-foreground">{data.email}</p> */}
              <div className="mt-2 flex items-center">
                <Heart className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm font-medium">Health Status: Good</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-[30rem] mx-auto w-full">
            {Object.entries(data).map(
              ([key, value]) =>
                key !== "illnesses" && (
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
      </SpotlightCard>
    </motion.div>
  );
};

export default ProfileCard;

"use client";
import React from "react";
import SpotlightCard from "../spotlight/spotlight-card";
import { motion } from "framer-motion";

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const InfoCard = ({ title, children, icon }: InfoCardProps) => {
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
    <motion.div variants={item}>
      <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border min-h-[11rem] transition-all duration-300 ease-in-out hover:-translate-y-1.5">
        <div className="z-10 relative flex flex-col gap-4">
          <div className="flex gap-2 items-start">
            {icon && <span className=" text-primary">{icon}</span>}
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          {children}
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default InfoCard;

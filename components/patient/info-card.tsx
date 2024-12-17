"use client";
import React from "react";
import SpotlightCard from "../spotlight/spotlight-card";

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const InfoCard = ({ title, children, icon }: InfoCardProps) => {
  return (
    <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border min-h-[11rem]">
      <div className="z-10 relative flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          {icon && <span className=" text-primary">{icon}</span>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {children}
      </div>
    </SpotlightCard>
  );
};

export default InfoCard;

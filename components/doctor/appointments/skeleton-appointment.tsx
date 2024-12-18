import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonAppointment = () => {
  return (
    <Card className="flex flex-col gap-4 p-4">
      <div className="flex items-start flex-col gap-4 p-4">
        <Skeleton className="w-36 h-6" />
        <Skeleton className="w-full h-6" />
      </div>
      <div className="space-y-4">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-24 h-6" />

        <div className="flex items-center justify-around mt-4 gap-5">
          <Skeleton className="w-24 h-9" />
          <Skeleton className="w-24 h-9" />
          <Skeleton className="w-24 h-9" />
        </div>
      </div>
    </Card>
  );
};

export default SkeletonAppointment;

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProfileCardSkeleton = () => {
  return (
    <Skeleton className="max-w-[30rem] w-full min-h-[13.5rem] flex flex-col gap-6 rounded-3xl h-full p-7">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-6 w-52 bg-primary-100" />
        <Skeleton className="w-5 h-5 rounded-full bg-primary-100" />
      </div>
      <div className="grid gap-4 grid-cols-2">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-16 h-5 bg-primary-100" />
          <Skeleton className="w-24 h-5 bg-primary-100" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-16 h-5 bg-primary-100" />
          <Skeleton className="w-24 h-5 bg-primary-100" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-16 h-5 bg-primary-100" />
          <Skeleton className="w-24 h-5 bg-primary-100" />
        </div>
      </div>
    </Skeleton>
  );
};

export default ProfileCardSkeleton;

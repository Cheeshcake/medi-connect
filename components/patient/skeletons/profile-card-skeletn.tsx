import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProfileCardSkeleton = () => {
  return (
    <Skeleton className="max-w-[30rem] w-full flex flex-col gap-6 rounded-3xl h-full p-6">
      <div className="w-full flex items-center justify-between">
        <Skeleton className="h-8 w-52 bg-primary-100" />
        <Skeleton className="w-8 h-8 rounded-full bg-primary-100" />
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="w-20 h-20 rounded-full bg-primary-100" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-40 bg-primary-100" />
          <Skeleton className="h-4 w-32 bg-primary-100" />
          <div className="flex items-center gap-2 mt-2">
            <Skeleton className="w-4 h-4 bg-primary-100 rounded-full" />
            <Skeleton className="h-4 w-24 bg-primary-100" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Skeleton className="w-16 h-4 bg-primary-100" />
            <Skeleton className="w-24 h-5 bg-primary-100" />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Skeleton className="h-6 w-32 mb-2 bg-primary-100" />
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full bg-primary-100" />
              <Skeleton className="w-16 h-4 bg-primary-100" />
              <Skeleton className="w-12 h-5 bg-primary-100" />
            </div>
          ))}
        </div>
      </div>
    </Skeleton>
  );
};

export default ProfileCardSkeleton;

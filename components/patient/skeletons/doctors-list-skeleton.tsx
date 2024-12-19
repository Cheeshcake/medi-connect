"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import React from "react";

const DoctorsListSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search doctors..."
            className="pl-10 md:max-w-[20rem] bg-patient-background "
            disabled
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <Select>
          <SelectTrigger
            className="w-full md:w-[200px]  bg-patient-background "
            disabled
          >
            <SelectValue placeholder="Select specialty" />
          </SelectTrigger>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <DoctorCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

const DoctorCardSkeleton = () => {
  return (
    <Skeleton className="w-full h-full p-6 rounded-3xl min-h-[280px]">
      <div className="flex flex-col justify-between h-full gap-4">
        {/* Top Section: Avatar and Info */}
        <div className="flex items-start gap-4">
          <Skeleton className="bg-primary-100 w-20 h-20 rounded-full" />
          <div className="flex-grow space-y-2">
            <Skeleton className="bg-primary-100 w-3/4 h-6 rounded-md" />
            <Skeleton className="bg-primary-100 w-1/2 h-4 rounded-md" />
            <Skeleton className="bg-primary-100 w-1/3 h-4 rounded-md" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="bg-primary-100 w-full h-6 rounded-md" />
            <Skeleton className="bg-primary-100 w-full h-6 rounded-md" />
            <Skeleton className="bg-primary-100 w-full h-6 rounded-md" />
            <Skeleton className="bg-primary-100 w-full h-6 rounded-md" />
          </div>
          <Skeleton className="bg-primary-100 w-full h-10 rounded-md" />
        </div>
      </div>
    </Skeleton>
  );
};

export default DoctorsListSkeleton;

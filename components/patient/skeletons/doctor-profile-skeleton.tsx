import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SpotlightCard from "@/components/spotlight/spotlight-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DoctorProfileSkeleton = () => {
  return (
    <div className="mx-auto py-8">
      <Link href={"/protected/patient/doctors"} className="pointer-events-none">
        <Button
          disabled
          variant={"ghost"}
          className="text-primary hover:text-primary/70 hover:bg-transparent pl-0"
        >
          <ArrowLeft />
          Go back to list of doctors
        </Button>
      </Link>
      <h1 className="text-3xl text-primary font-bold mb-6">Doctor Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border mb-8">
            <div className="flex flex-col md:flex-row  items-start gap-6 p-6">
              <Skeleton className="bg-primary-100 w-24 md:w-32 h-24 grow rounded-full" />
              <div className="flex-grow space-y-4 w-full">
                <Skeleton className="bg-primary-100 h-8 w-3/4" />
                <Skeleton className="bg-primary-100 h-6 w-1/2" />
                <Skeleton className="bg-primary-100 h-6 w-1/4" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="bg-primary-100 h-6 w-full" />
                  <Skeleton className="bg-primary-100 h-6 w-full" />
                  <Skeleton className="bg-primary-100 h-6 w-full" />
                  <Skeleton className="bg-primary-100 h-6 w-full" />
                </div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border mb-8">
            <CardHeader>
              <Skeleton className="bg-primary-100 h-6 w-48" />
            </CardHeader>
            <CardContent>
              <Skeleton className="bg-primary-100 h-4 w-full mb-2" />
              <Skeleton className="bg-primary-100 h-4 w-full mb-2" />
              <Skeleton className="bg-primary-100 h-4 w-3/4" />
            </CardContent>
          </SpotlightCard>

          {[0, 1].map((i) => (
            <SpotlightCard
              key={i}
              className="bg-white/30 dark:bg-white/10 border-border mb-8"
            >
              <CardHeader>
                <Skeleton className="bg-primary-100 h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[0, 1, 2].map((j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Skeleton className="bg-primary-100 h-5 w-5 rounded-full" />
                      <div className="space-y-2 flex-grow">
                        <Skeleton className="bg-primary-100 h-4 w-3/4" />
                        <Skeleton className="bg-primary-100 h-3 w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </SpotlightCard>
          ))}
        </div>

        <div className="col-span-2">
          <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border sticky top-8">
            <CardHeader>
              <Skeleton className="bg-primary-100 h-6 w-48 mb-2" />
              <Skeleton className="bg-primary-100 h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="bg-primary-100 h-64 w-full mb-4" />

              <Skeleton className="bg-primary-100 h-10 w-full" />
            </CardContent>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileSkeleton;

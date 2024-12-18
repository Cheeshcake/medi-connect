import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SpotlightCard from "../../spotlight/spotlight-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IllnessesAccordionSkeleton = () => {
  return (
    <Skeleton className="w-full rounded-3xl overflow-hidden p-6">
      <Skeleton className="h-8 w-48 mb-4 bg-primary-100" />
      <Accordion
        type="single"
        defaultValue="item-0"
        collapsible
        className="w-full"
      >
        {[...Array(5)].map((_, index) => (
          <AccordionItem
            className="border-border"
            value={`item-${index}`}
            key={index}
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <Skeleton className="h-5 w-32 bg-primary-100" />
                <Skeleton className="h-5 w-16 rounded-full bg-primary-100" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Skeleton className="h-4 w-full mb-2 bg-primary-100" />
              <Skeleton className="h-4 w-3/4 mb-2 bg-primary-100" />
              <Skeleton className="h-4 w-1/2 bg-primary-100" />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Skeleton>
  );
};

export default IllnessesAccordionSkeleton;

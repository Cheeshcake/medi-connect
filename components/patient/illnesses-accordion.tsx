"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "../spotlight/spotlight-card";
import { cn } from "@/lib/utils";

type IllnessDetails = {
  severity: "Low" | "Medium" | "High";
  details: string;
  lastUpdated: string;
};

const illnessDetailsMap: Record<string, IllnessDetails> = {
  Hypertension: {
    severity: "Medium",
    details: "Controlled with medication. Regular monitoring required.",
    lastUpdated: "2023-11-15",
  },
  "Type 2 Diabetes": {
    severity: "High",
    details:
      "Managed with diet, exercise, and insulin. HbA1c levels need improvement.",
    lastUpdated: "2023-12-01",
  },
  Asthma: {
    severity: "Low",
    details: "Mild and well-controlled. Inhaler used as needed.",
    lastUpdated: "2023-10-20",
  },
  "Chronic Kidney Disease": {
    severity: "High",
    details:
      "Stage 3 CKD. Requires dietary changes and regular nephrologist visits.",
    lastUpdated: "2023-11-28",
  },
  Migraine: {
    severity: "Medium",
    details: "Occurs occasionally. Managed with over-the-counter painkillers.",
    lastUpdated: "2023-09-30",
  },
};

const severityColors = {
  Low: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-red-100 text-red-800",
};

interface IllnessesAccordionProps {
  illnesses: string[];
}

export function IllnessesAccordion({ illnesses }: IllnessesAccordionProps) {
  return (
    <SpotlightCard className="w-full bg-white/30 dark:bg-white/10 border-border transition-all duration-300 ease-in-out hover:-translate-y-1.5">
      <div className="z-10 relative">
        <h2 className="text-2xl font-bold mb-4">Medical Conditions</h2>

        <Accordion
          type="single"
          defaultValue="item-0"
          collapsible
          className="w-full"
        >
          {illnesses?.map((illnessName, index) => {
            const illnessDetails = illnessDetailsMap[illnessName] || {
              severity: "Low",
              details: "No additional details available.",
              lastUpdated: "N/A",
            };
            return (
              <AccordionItem
                className="border-border"
                value={`item-${index}`}
                key={index}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{illnessName}</span>
                    <Badge
                      className={cn(
                        severityColors[illnessDetails.severity],
                        `hover:bg-${severityColors[illnessDetails.severity]}`
                      )}
                    >
                      {illnessDetails.severity}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">{illnessDetails.details}</p>
                  <p className="text-sm text-patient-secondary-text">
                    Last updated: {illnessDetails.lastUpdated}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </SpotlightCard>
  );
}

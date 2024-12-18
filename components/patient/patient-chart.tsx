"use client";

import { TrendingDown } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import SpotlightCard from "../spotlight/spotlight-card";

// Random blood pressure data for the last 6 months
const chartData = [
  { month: "January", systolic: 138, diastolic: 75 },
  { month: "February", systolic: 115, diastolic: 87 },
  { month: "March", systolic: 132, diastolic: 85 },
  { month: "April", systolic: 100, diastolic: 90 },
  { month: "May", systolic: 128, diastolic: 82 },
  { month: "June", systolic: 125, diastolic: 78 },
];

const chartConfig = {
  systolic: {
    label: "Systolic",
    color: "hsl(var(--chart-1))",
  },
  diastolic: {
    label: "Diastolic",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PatientChart() {
  return (
    <SpotlightCard className="bg-white/30 dark:bg-white/10 border-border transition-all duration-300 ease-in-out hover:-translate-y-1.5">
      <div className="z-10 relative ">
        <h2 className="text-2xl font-bold mb-1">Blood Pressure Trend</h2>
        <p className="text-sm text-patient-secondary-text mb-6">
          6-month overview of your blood pressure readings
        </p>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
            height={250}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[60, 160]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="colorSystolic" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-systolic)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-systolic)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="colorDiastolic" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-diastolic)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-diastolic)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="systolic"
              stroke="var(--color-systolic)"
              fillOpacity={1}
              fill="url(#colorSystolic)"
            />
            <Area
              type="monotone"
              dataKey="diastolic"
              stroke="var(--color-diastolic)"
              fillOpacity={1}
              fill="url(#colorDiastolic)"
            />
          </AreaChart>
        </ChartContainer>
        <CardFooter className="px-0 pt-4">
          <div className="flex w-full items-center justify-between text-sm">
            <div className="flex items-center gap-2 font-medium">
              Trending down by 9.4% over 6 months
              <TrendingDown className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-patient-secondary-text">
              January - June 2024
            </div>
          </div>
        </CardFooter>
      </div>
    </SpotlightCard>
  );
}

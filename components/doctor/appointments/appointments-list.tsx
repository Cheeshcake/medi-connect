"use client";
import { useState } from "react";
import AppointmentCard from "./appointment-card";

export default function AppointmentsList({ appointments }: any) {
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(
    null
  );

  console.log(appointments);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {appointments?.map((appointment: any) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          selectedAppointment={selectedAppointment}
          setSelectedAppointment={setSelectedAppointment}
        />
      ))}
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const AppointmentCard = ({
  appointment,
  setSelectedAppointment,
  selectedAppointment,
}: {
  appointment: any;
  setSelectedAppointment: (appointment: any) => void;
  selectedAppointment: any;
}) => {
  return (
    <Card key={appointment.id}>
      <CardHeader>
        <CardTitle>
          {appointment.patient.first_name} {appointment.patient.last_name}
        </CardTitle>
        <Badge
          variant={
            appointment.status === "scheduled"
              ? "secondary"
              : appointment.status === "completed"
                ? "default"
                : "destructive"
          }
        >
          {appointment.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Date:</strong> {appointment.date}
        </p>
        <p>
          <strong>Time:</strong> {appointment.time}
        </p>
        <p>
          <strong>Reason:</strong> {appointment.reason}
        </p>
        <div className="mt-4 space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setSelectedAppointment(appointment)}
              >
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Appointment Details</DialogTitle>
              </DialogHeader>
              {selectedAppointment && (
                <div>
                  <p>
                    <strong>Patient:</strong>{" "}
                    {selectedAppointment.patient.first_name}{" "}
                    {selectedAppointment.patient.last_name}
                  </p>
                  <p>
                    <strong>Contact:</strong>{" "}
                    {selectedAppointment.patient.phone}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedAppointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {selectedAppointment.time}
                  </p>
                  <p>
                    <strong>Reason:</strong> {selectedAppointment.reason}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedAppointment.status}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
          {appointment.status === "scheduled" && (
            <>
              <Button
                onClick={
                  () => {}
                  //   handleStatusChange(appointment.id, "completed")
                }
              >
                Mark Completed
              </Button>
              <Button variant="destructive" onClick={() => {}}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;

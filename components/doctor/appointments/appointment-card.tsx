import React from "react";
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
import { useChangeStatus } from "@/hooks/doctor/use-change-appointment-status";
import { Loader2 } from "lucide-react";
interface Appointment {
  id: string;
  patient: {
    first_name: string;
    last_name: string;
    phone: string;
  };
  date: string;
  time: string;
  reason: string;
  status: "scheduled" | "completed" | "cancelled";
}

interface AppointmentCardProps {
  appointment: Appointment;
  setSelectedAppointment: (appointment: Appointment | null) => void;
  selectedAppointment: Appointment | null;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  setSelectedAppointment,
  selectedAppointment,
}) => {
  const { changeStatus, isLoading, isSuccess, error } = useChangeStatus();

  const handleStatusChange = async (status: "completed" | "cancelled") => {
    try {
      await changeStatus(appointment.id, status);
    } catch (err) {
      console.error(err);
    }
  };

  const statusVariant = {
    scheduled: "secondary",
    completed: "success",
    cancelled: "destructive",
  } as const;

  return (
    <Card key={appointment.id}>
      <CardHeader>
        <CardTitle>
          {appointment.patient.first_name} {appointment.patient.last_name}
        </CardTitle>
        <Badge variant={statusVariant[appointment.status]}>
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
                onClick={() => handleStatusChange("completed")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Mark as Completed"
                )}
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleStatusChange("cancelled")}
                disabled={isLoading}
              >
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

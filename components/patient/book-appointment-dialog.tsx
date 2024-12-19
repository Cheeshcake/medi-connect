"use client";
import React, { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ResponsiveDialog from "@/components/dialog/responsive-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAddAppointment } from "@/hooks/patient/use-add-appointment";

interface BookAppointmentDialogProps {
  doctorId: string;
  date: string;
  time: string;
}

const BookAppointmentDialog = NiceModal.create(
  ({ doctorId, date, time }: BookAppointmentDialogProps) => {
    const modal = useModal();
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");
    const { addAppointment, isAddingAppointment } = useAddAppointment();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await addAppointment({
        id_doctor: doctorId,
        date,
        time,
        reason,
        message,
      });
    };

    return (
      <ResponsiveDialog
        title="Add your reason for appointment"
        isOpen={modal.visible}
        onClose={() => modal.hide()}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reason">
              Reason for Appointment{" "}
              <span className="text-destructive text-lg">*</span>
            </Label>
            <Input
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., Annual check-up, Follow-up visit"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (optional)</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any additional information you'd like to provide"
              className="resize-none"
              rows={3}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => modal.hide()}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isAddingAppointment}>
              {isAddingAppointment ? "Booking..." : "Book Appointment"}
            </Button>
          </div>
        </form>
      </ResponsiveDialog>
    );
  }
);

export default BookAppointmentDialog;

export const showBookAppointmentDialog = (
  props: BookAppointmentDialogProps
) => {
  NiceModal.show(BookAppointmentDialog, props);
};

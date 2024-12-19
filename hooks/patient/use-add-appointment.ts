import { bookAppointmentAction } from "@/app/actions/patient-actions";
import BookAppointmentDialog from "@/components/patient/book-appointment-dialog";
import { Appointment } from "@/types/patient";
import NiceModal from "@ebay/nice-modal-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddAppointment = () => {
  const mutation = useMutation({
    mutationFn: async (data: Appointment) => {
      const { id_doctor, date, time, reason, message } = data;
      return await bookAppointmentAction({
        id_doctor,
        date,
        time,
        reason,
        message,
      });
    },
    onSuccess: () => {
      toast.success("Appointment booked successfully!");
      NiceModal.remove(BookAppointmentDialog);
    },
    onError: (error: Error) => {
      console.error("Error booking appointment:", error);
      toast.error(
        error.message || "An error occurred while booking the appointment"
      );
    },
  });

  return {
    addAppointment: mutation.mutate,
    isAddingAppointment: mutation.isPending,
  };
};

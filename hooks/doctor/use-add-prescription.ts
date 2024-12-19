import { addPrescriptionAction } from "@/app/actions/doctor-actions";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

export function useAddPrescription() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: {
      id_patient: string;
      content: string;
    }) => addPrescriptionAction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["prescriptions"] });
      toast.success("Prescription added successfully!");
    },
    onError: (error) => {
      console.error("Error changing appointment status:", error);
      toast.error("Error adding prescription:"+error);
    },
  });

  return {
    addPrescription: (data: {
      id_patient: string;
      content: string;
    }) => mutation.mutate(data),
    isLoading: mutation.isLoading,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
}

import { deletePrescriptionAction } from "@/app/actions/doctor-actions";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

export const useDeletePrescription = (id: string) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
      mutationFn: () => deletePrescriptionAction(id),
      onSuccess: (response) => {
        queryClient.invalidateQueries({ queryKey: ["prescriptions"] });
        toast.success("Prescription deleted successfully!");
      },
      onError: (error) => {
        console.error("Error deleting prescription:", error);
        toast.error("Error deleting program");
      },
    });
  
    return {
      deleteProgram: mutation.mutate,
      isLoading: mutation.isLoading,
      error: mutation.error,
      isSuccess: mutation.isSuccess,
    };
  };
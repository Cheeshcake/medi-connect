import { changeAppointmentStatusAction } from "@/app/actions/doctor-actions";
import { useMutation, useQueryClient } from "react-query";

export const useChangeStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      changeAppointmentStatusAction(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
    onError: (error) => {
      console.error("Error changing appointment status:", error);
    },
  });

  return {
    changeStatus: (id: string, status: string) =>
      mutation.mutate({ id, status }),
    isLoading: mutation.isLoading,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

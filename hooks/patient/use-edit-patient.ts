import { updatePatientInfoAction } from "@/app/actions/patient-actions";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useEditPatient = () => {
  const mutation = useMutation({
    mutationFn: ({ data }: { data: FormData }) => updatePatientInfoAction(data),

    onSuccess: () => {
      toast.success("Profile info updated successfully!");
    },
    onError: (error: Error) => {
      console.error(error.message);
      toast.error(error.message || "Error occured while editing profile info");
    },
  });

  return { editProfile: mutation.mutate, isEditingProfile: mutation.isPending };
};

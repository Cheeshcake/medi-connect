import { updatePatientInfoAction } from "@/app/actions/patient-actions";
import { TPatientInfo } from "@/types/patient";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export const useEditPatient = () => {
  const mutation = useMutation({
    mutationFn: ({ data }: { data: FormData }) => updatePatientInfoAction(data),

    onSuccess: () => {
      console.log("Profile info updated successfully!");
    },
    onError: (error: Error) => {
      console.error(error.message);
      console.log(error.message || "Error occured while editing profile info");
    },
  });

  return { editProfile: mutation.mutate, isEditingProfile: mutation.isPending };
};

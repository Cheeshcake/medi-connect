import { getPatientInfoAction } from "@/app/actions/patient-actions";
import { useQuery } from "@tanstack/react-query";

export const useGetPatientInfo = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientInfo"],
    queryFn: () => getPatientInfoAction(),
    refetchOnWindowFocus: false,
  });

  return {
    patientInfo: data?.data || [],
    patientError: error,
    isGettingPatient: isLoading,
  };
};

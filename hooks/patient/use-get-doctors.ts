import { getDoctorsAction } from "@/app/actions/patient-actions";
import { useQuery } from "@tanstack/react-query";

export const useGetDoctors = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getDoctorsAction(),
  });

  return {
    doctors: data?.data,
    doctorsError: error,
    isGettingDoctors: isLoading,
  };
};

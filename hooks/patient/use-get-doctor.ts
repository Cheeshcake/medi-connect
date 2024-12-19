import { getDoctorInfoAction } from "@/app/actions/doctor-actions";
import { useQuery } from "@tanstack/react-query";

export const useGetDoctor = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["doctorData"],
    queryFn: () => getDoctorInfoAction(),
  });

  return { data: data?.data || [], isLoading, isError, error };
};

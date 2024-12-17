import { getDoctorInfoAction } from "@/app/actions/doctor-actions";
import { useQuery } from "react-query";

export const useGetDoctor = () => {
  const queryKey = ["doctor-info"]
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: () => getDoctorInfoAction(),
  });

  return { data, isLoading, isError, error };
};

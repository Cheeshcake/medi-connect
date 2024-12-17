import { getPatientByIdAction } from "@/app/actions/doctor-actions";
import { useQuery } from "react-query";

export const useGetPatientById = (id: string) => {
  const queryKey = ["patient", id];
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: () => getPatientByIdAction(id),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

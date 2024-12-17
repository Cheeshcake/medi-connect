import { getPatientsAction } from "@/app/actions/doctor-actions";
import { useQuery } from "react-query";


export const useGetPatients = () => {
  const queryKey = ["patients"]
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: () => getPatientsAction(),
  });

  return { data, isLoading, isError, error };
};
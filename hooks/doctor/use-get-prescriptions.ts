import { getPrescriptionsAction } from "@/app/actions/doctor-actions";
import { useQuery } from "react-query";

export function useGetPrescriptions() {
  const queryKey = ["prescriptions"];
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => getPrescriptionsAction(),
  });
  return {
    prescriptions: data,
    isLoading: isLoading,
    error,
  };
}

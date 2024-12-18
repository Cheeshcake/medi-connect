import { getDoctorAppointmentsAction, getPatientByIdAction } from "@/app/actions/doctor-actions";
import { useQuery } from "react-query";

export const useGetAppointments = (id:string) => {
  const queryKey = ["appointments"];
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: () => getDoctorAppointmentsAction(id),
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

import { getDoctorInfoAction } from "@/app/actions/doctor-actions";
import { getDoctorByIdAction } from "@/app/actions/patient-actions";
import { useQuery } from "@tanstack/react-query";

export const useGetDoctorById = (doctorId: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["doctorData", doctorId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return await getDoctorByIdAction(id as string);
    },
  });

  return { data: data?.data || null, isLoading, isError, error };
};

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetPatients } from "@/hooks/doctor/use-get-patients";
import { useAddPrescription } from "@/hooks/doctor/use-add-prescription";
import { Loader2 } from "lucide-react";

const prescriptionSchema = z.object({
  id_patient: z.string({
    required_error: "Patient name is required.",
  }),
  content: z.string().min(10, {
    message: "description must be at least 10 characters.",
  }),
});

type PrescriptionFormValues = z.infer<typeof prescriptionSchema>;

const defaultValues: Partial<PrescriptionFormValues> = {
  id_patient: "",
  content: "",
};

export function PrescriptionForm() {
  const form = useForm<PrescriptionFormValues>({
    resolver: zodResolver(prescriptionSchema),
    defaultValues,
  });
  const {
    addPrescription,
    isLoading: loading,
    error: err,
    isSuccess,
  } = useAddPrescription();

  function onSubmit(data: PrescriptionFormValues) {
    const prescription = {
      id_patient: data.id_patient,
      content: data.content,
    };
    addPrescription(prescription);
  }
  const { data, isLoading, isError, error } = useGetPatients();
  if (data) console.log("data", data);

  if (err) {
    toast.error((err as Error).message);
  }

  return (
    <div className=" max-w-3xl p-5 border mx-auto rounded-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="id_patient"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Patient Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="select a patient" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Patients</SelectLabel>
                      {isLoading ? (
                        <div>Loading...</div>
                      ) : isError ? (
                        <div>{(error as Error).message}</div>
                      ) : (
                        data?.data?.map((patient: any) => (
                          <SelectItem key={patient.id} value={patient.id}>
                            {patient.first_name} {patient.last_name}
                          </SelectItem>
                        ))
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the name of the patient.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prescription description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter prescription description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Any additional instructions or precautions.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button variant={"secondary"} type="reset">
              Clear
            </Button>
            <Button type="submit">
              {loading ? (
                <>
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" />
                    Creating
                  </div>
                </>
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Search, Eye, Pencil, Trash2 } from "lucide-react";
import { useGetPrescriptions } from "@/hooks/doctor/use-get-prescriptions";
import { PresciptionDeleteDialog } from "@/components/doctor/prescriptions/delete-prescription-dialog";

export default function PrescriptionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { prescriptions, isLoading, error } = useGetPrescriptions();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Prescriptions</h1>
        <Button asChild>
          <Link href="/protected/doctor/prescriptions/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Prescription
          </Link>
        </Button>
      </div>

      <div className="flex items-center mb-4">
        <Search className="mr-2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search prescriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Patient First Name</TableCell>
            <TableCell>Patient Last Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prescriptions?.data &&
            prescriptions.data.map((prescription: any) => (
              <TableRow key={prescription.id}>
                <TableCell>{prescription.patient.first_name}</TableCell>
                <TableCell>{prescription.patient.last_name}</TableCell>
                <TableCell>{prescription.created_at}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Prescription Details</DialogTitle>
                        </DialogHeader>
                        <DialogDescription className=" flex flex-col items-start justify-start mt-2">
                          <span>
                            <strong>Patient:</strong>{" "}
                            {prescription.patient.first_name}{" "}
                            {prescription.patient.last_name}
                          </span>
                          <span>
                            <strong>Content:</strong> {prescription.content}
                          </span>
                          <span>
                            <strong>Date:</strong> {prescription.created_at}
                          </span>
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        router.push(
                          `/doctor/edit-prescription/${prescription.id}`
                        )
                      }
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <PresciptionDeleteDialog id={prescription.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

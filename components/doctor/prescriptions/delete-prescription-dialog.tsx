"use client";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeletePrescription } from "@/hooks/doctor/use-delete-prescription";

export function PresciptionDeleteDialog({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const { deleteProgram, isLoading, isSuccess } = useDeletePrescription(id);

  const handleDelete = () => {
    deleteProgram();
  };


  return (
    <Dialog open={open} onOpenChange={isSuccess ? () => setOpen(false) : setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="hover:text-destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-red-500">
            Delete
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoaderCircle className="animate-spin transition-transform duration-700" />
                <div>deleting...</div>
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

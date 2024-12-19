import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { useMediaQuery } from "../../hooks/use-media-query";
import { Separator } from "../ui/separator";
import { cn } from "../../lib/utils";
import { X } from "lucide-react";

type TResponsiveDialogProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  isOpen?: boolean;
  onClose?: () => void;
  separator?: boolean;
  className?: string;
  headerClassName?: string;
};

const ResponsiveDialog = ({
  children,
  title,
  description,
  isOpen = true,
  onClose,
  separator,
  className,
  headerClassName,
}: TResponsiveDialogProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className={cn(
            "px-0 sm:max-w-[38.75rem] bg-patient-background",
            className
          )}
        >
          <DialogHeader className={cn("px-5 pb-3", headerClassName)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {separator && <Separator />}
          <div className="px-5">{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent
        className={cn("px-0 pb-5 bg-patient-background", className)}
      >
        <DrawerHeader className="px-5 text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {separator && <Separator />}
        <div className="px-5">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveDialog;

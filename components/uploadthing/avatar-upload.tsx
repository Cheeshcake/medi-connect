"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader, Pencil } from "lucide-react";
import { useUploadThing } from "@/utils/uploadthing";
import { cn } from "@/lib/utils";

interface AvatarUploadProps {
  initialImageUrl: string | null;
  onAvatarChange: (url: string | null) => void;
  name: string;
  isEditing: boolean;
}

export function AvatarUpload({
  initialImageUrl,
  onAvatarChange,
  name,
  isEditing,
}: AvatarUploadProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialImageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [localImagePreview, setLocalImagePreview] = useState<string | null>(
    null
  );

  const { startUpload } = useUploadThing("imageUploader");

  const handleFileChange = async (file: File) => {
    const localPreview = URL.createObjectURL(file);
    setLocalImagePreview(localPreview);
    setIsUploading(true);
    const res = await startUpload([file]);
    if (res && res[0].url) {
      setAvatarUrl(res[0].url);
      onAvatarChange(res[0].url);
    }
    setIsUploading(false);
    URL.revokeObjectURL(localPreview);
  };

  return (
    <div
      className={cn(
        "relative w-20 h-20",
        isEditing && "hover:opacity-70 transition-opacity"
      )}
    >
      <Avatar className="w-full h-full relative ">
        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
            <Loader className="animate-spin w-8 h-8 text-white" />
          </div>
        )}
        <AvatarImage
          src={
            localImagePreview ||
            avatarUrl ||
            "/placeholder.svg?height=80&width=80"
          }
          alt={name}
        />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {isEditing && (
        <>
          <div className="absolute bottom-1 right-1 bg-primary rounded-full p-1 ">
            <Pencil className="text-white w-4 h-4" />
          </div>
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) =>
              e.target.files?.[0] && handleFileChange(e.target.files[0])
            }
            accept="image/*"
          />
        </>
      )}
    </div>
  );
}

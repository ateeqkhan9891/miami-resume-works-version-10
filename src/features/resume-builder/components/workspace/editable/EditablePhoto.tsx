"use client";

import React, { useRef } from "react";
import { UploadCloud, EyeOff, Eye, User } from "lucide-react";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface EditablePhotoProps {
  imageUrl?: string;
  fullName?: string;
  isEditable?: boolean;
  className?: string;
}

export default function EditablePhoto({
  imageUrl,
  fullName = "User",
  isEditable = true,
  className = "h-24 w-24",
}: EditablePhotoProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const showPhoto = useResumeStore((state) => state.resumeData.profile.showPhoto ?? true);
  const photoShape = useResumeStore((state) => state.design.photoShape ?? "circle");
  const updateProfile = useResumeStore((state) => state.updateProfile);

  // If set to 'none' / hidden from Design panel, don't render on preview/canvas unless editing
  if (photoShape === "none" && !isEditable) {
    return null;
  }

  const shapeClass = {
    circle: "rounded-full",
    rounded: "rounded-2xl",
    none: "rounded-full opacity-40",
  }[photoShape] || "rounded-full";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile("profileImageUrl", reader.result as string);
        updateProfile("showPhoto", true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTogglePhoto = () => {
    updateProfile("showPhoto", !showPhoto);
  };

  const isVisible = showPhoto && photoShape !== "none";

  return (
    <div className={`group relative shrink-0 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Avatar Container */}
      <div
        className={`relative h-full w-full overflow-hidden border-2 border-white/80 bg-white/10 shadow-md backdrop-blur-xs transition-all duration-200 ${shapeClass} ${
          !isVisible ? "opacity-35 grayscale ring-1 ring-white/20" : ""
        }`}
      >
        {imageUrl && isVisible ? (
          <img
            src={imageUrl}
            alt={fullName}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/70">
            {fullName ? (
              <span className="text-2xl font-bold tracking-tight text-white">
                {fullName.charAt(0).toUpperCase()}
              </span>
            ) : (
              <User className="h-8 w-8 text-white/60" />
            )}
          </div>
        )}
      </div>

      {/* Hover Actions Pill Bar */}
      {isEditable && (
        <div
          className={`absolute inset-0 flex items-center justify-center gap-2 bg-black/50 backdrop-blur-[2px] opacity-0 transition-opacity duration-150 group-hover:opacity-100 ${
            photoShape === "rounded" ? "rounded-2xl" : "rounded-full"
          }`}
        >
          {/* Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Upload photo"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md transition-transform hover:scale-110 active:scale-95"
          >
            <UploadCloud className="h-3.5 w-3.5 stroke-[2.5]" />
          </button>

          {/* Visibility Toggle Button */}
          <button
            type="button"
            onClick={handleTogglePhoto}
            title={isVisible ? "Hide photo" : "Show photo"}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-white shadow-md transition-transform hover:scale-110 active:scale-95"
          >
            {isVisible ? (
              <EyeOff className="h-3.5 w-3.5 stroke-[2.5]" />
            ) : (
              <Eye className="h-3.5 w-3.5 stroke-[2.5]" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
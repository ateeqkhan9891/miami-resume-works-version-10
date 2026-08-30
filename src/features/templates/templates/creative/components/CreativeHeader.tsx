"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface CreativeHeaderProps {
  profile: ResumePreviewData["profile"];
  isEditable?: boolean;
}

export default function CreativeHeader({
  profile,
  isEditable = true,
}: CreativeHeaderProps) {
  const updateProfile = useResumeStore((state) => state.updateProfile);

  return (
    <header className="px-10 pt-6">
      <div className="grid grid-cols-12 items-center gap-8">
        <div className="col-span-7">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-24 shrink-0">
              <div className="absolute inset-0 rounded-full bg-amber-400" />

              <div className="absolute left-2 top-2 h-24 w-24 overflow-hidden rounded-full border-4 border-white">
                {profile.profileImageUrl ? (
                  <img
                    src={profile.profileImageUrl}
                    alt={profile.fullName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-3xl font-bold text-zinc-700">
                    {profile.fullName?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
                {isEditable ? (
                  <EditableText
                    value={profile.fullName}
                    onChange={(val) => updateProfile("fullName", val)}
                    placeholder="Your Name"
                  />
                ) : (
                  profile.fullName
                )}
              </h1>

              <div className="mt-1 text-sm font-medium text-zinc-600">
                {isEditable ? (
                  <EditableText
                    value={profile.headline}
                    onChange={(val) => updateProfile("headline", val)}
                    placeholder="Creative Headline / Title"
                  />
                ) : (
                  profile.headline
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="space-y-2">
            <div className="flex items-center justify-end gap-2 text-right text-[9px] text-zinc-600">
              {isEditable ? (
                <EditableText
                  value={profile.location}
                  onChange={(val) => updateProfile("location", val)}
                  placeholder="Location"
                />
              ) : (
                <span>{profile.location}</span>
              )}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <MapPin size={12} />
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 text-right text-[9px] text-zinc-600">
              {isEditable ? (
                <EditableText
                  value={profile.phone}
                  onChange={(val) => updateProfile("phone", val)}
                  placeholder="Phone"
                />
              ) : (
                <span>{profile.phone}</span>
              )}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Phone size={12} />
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 text-right text-[9px] text-zinc-600">
              {isEditable ? (
                <EditableText
                  value={profile.email}
                  onChange={(val) => updateProfile("email", val)}
                  placeholder="Email"
                />
              ) : (
                <span>{profile.email}</span>
              )}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Mail size={12} />
              </span>
            </div>

            {(profile.website || isEditable) && (
              <div className="flex items-center justify-end gap-2 text-right text-[9px] text-zinc-600">
                {isEditable ? (
                  <EditableText
                    value={profile.website || ""}
                    onChange={(val) => updateProfile("website", val)}
                    placeholder="Website or Portfolio URL"
                  />
                ) : (
                  <span>{profile.website}</span>
                )}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Globe size={12} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 h-1 w-full rounded-full bg-amber-400" />
    </header>
  );
}
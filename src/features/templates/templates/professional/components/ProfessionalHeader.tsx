"use client";

import {
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ProfessionalHeaderProps {
  profile: ResumePreviewData["profile"];
  isEditable?: boolean;
}

export default function ProfessionalHeader({
  profile,
  isEditable = true,
}: ProfessionalHeaderProps) {
  const updateProfile = useResumeStore((state) => state.updateProfile);

  return (
    <header className="px-10 pt-9">
      <div className="flex items-end justify-between gap-10">
        <div className="min-w-0 flex-1">
          <h1 className="text-[28px] font-bold leading-none tracking-[-0.03em] text-slate-950">
            {isEditable ? (
              <EditableText
                value={profile.fullName}
                onChange={(val) => updateProfile("fullName", val)}
                placeholder="Full Name"
              />
            ) : (
              profile.fullName
            )}
          </h1>

          <div className="mt-2 text-[13px] font-medium tracking-wide text-slate-500">
            {isEditable ? (
              <EditableText
                value={profile.headline}
                onChange={(val) => updateProfile("headline", val)}
                placeholder="Job Title / Specialization"
              />
            ) : (
              profile.headline
            )}
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-x-5 gap-y-2 text-right">
          <div className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[8.5px] text-slate-500">
            {isEditable ? (
              <EditableText
                value={profile.email}
                onChange={(val) => updateProfile("email", val)}
                placeholder="Email Address"
              />
            ) : (
              <span>{profile.email}</span>
            )}
            <span className="text-slate-400">
              <Mail size={11} />
            </span>
          </div>

          <div className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[8.5px] text-slate-500">
            {isEditable ? (
              <EditableText
                value={profile.phone}
                onChange={(val) => updateProfile("phone", val)}
                placeholder="Phone Number"
              />
            ) : (
              <span>{profile.phone}</span>
            )}
            <span className="text-slate-400">
              <Phone size={11} />
            </span>
          </div>

          <div className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[8.5px] text-slate-500">
            {isEditable ? (
              <EditableText
                value={profile.location}
                onChange={(val) => updateProfile("location", val)}
                placeholder="Location"
              />
            ) : (
              <span>{profile.location}</span>
            )}
            <span className="text-slate-400">
              <MapPin size={11} />
            </span>
          </div>

          {(profile.website || isEditable) && (
            <div className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[8.5px] text-slate-500">
              {isEditable ? (
                <EditableText
                  value={profile.website || ""}
                  onChange={(val) => updateProfile("website", val)}
                  placeholder="Website / Portfolio"
                />
              ) : (
                <span>{profile.website}</span>
              )}
              <span className="text-slate-400">
                <Globe size={11} />
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 h-px bg-slate-900" />
    </header>
  );
}
"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import type { ResumePreviewData } from "@/types/resume";
import { EditableText } from "@/features/resume-builder/components/workspace/editable/EditableText";
import EditablePhoto from "@/features/resume-builder/components/workspace/editable/EditablePhoto";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

interface ModernHeaderProps {
  profile: ResumePreviewData["profile"];
  isEditable?: boolean;
}

export default function ModernHeader({
  profile,
  isEditable = true,
}: ModernHeaderProps) {
  const updateProfile = useResumeStore((state) => state.updateProfile);
  const accentColor = useResumeStore((state) => state.design.accentColor);
  const headerAlign = useResumeStore((state) => state.design.headerAlign ?? "split");
  const photoShape = useResumeStore((state) => state.design.photoShape ?? "circle");

  const shouldRenderPhoto = photoShape !== "none" || isEditable;

  return (
    <header
      className="px-10 py-7 text-white transition-colors duration-200"
      style={{ backgroundColor: accentColor }}
    >
      {/* 1. SPLIT LAYOUT (Default: Left profile info, Right contact details) */}
      {headerAlign === "split" && (
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 min-w-0 flex-1">
            {shouldRenderPhoto && (
              <EditablePhoto
                imageUrl={profile.profileImageUrl}
                fullName={profile.fullName}
                isEditable={isEditable}
                className="h-20 w-20"
              />
            )}

            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold tracking-tight text-white leading-tight">
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

              <div className="mt-1 text-xs font-medium text-white/80">
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
          </div>

          <div className="flex shrink-0 flex-col items-end gap-1.5 text-[9px] text-white/90">
            <ContactRow
              icon={<Mail className="h-3 w-3 text-white/80" />}
              value={profile.email}
              field="email"
              placeholder="Email Address"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            <ContactRow
              icon={<Phone className="h-3 w-3 text-white/80" />}
              value={profile.phone}
              field="phone"
              placeholder="Phone Number"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            <ContactRow
              icon={<MapPin className="h-3 w-3 text-white/80" />}
              value={profile.location}
              field="location"
              placeholder="Location"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            {(profile.website || isEditable) && (
              <ContactRow
                icon={<Globe className="h-3 w-3 text-white/80" />}
                value={profile.website || ""}
                field="website"
                placeholder="Portfolio / Website"
                isEditable={isEditable}
                updateProfile={updateProfile}
              />
            )}
          </div>
        </div>
      )}

      {/* 2. CENTERED LAYOUT (Avatar at top center, Name, Horizontal Contact pills) */}
      {headerAlign === "center" && (
        <div className="flex flex-col items-center text-center">
          {shouldRenderPhoto && (
            <EditablePhoto
              imageUrl={profile.profileImageUrl}
              fullName={profile.fullName}
              isEditable={isEditable}
              className="h-20 w-20 mb-3"
            />
          )}

          <h1 className="text-2xl font-bold tracking-tight text-white leading-tight">
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

          <div className="mt-1 text-xs font-medium text-white/80">
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

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[9px] text-white/90">
            <ContactRow
              icon={<Mail className="h-3 w-3 text-white/80" />}
              value={profile.email}
              field="email"
              placeholder="Email"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            <span className="text-white/40">•</span>
            <ContactRow
              icon={<Phone className="h-3 w-3 text-white/80" />}
              value={profile.phone}
              field="phone"
              placeholder="Phone"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            <span className="text-white/40">•</span>
            <ContactRow
              icon={<MapPin className="h-3 w-3 text-white/80" />}
              value={profile.location}
              field="location"
              placeholder="Location"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            {(profile.website || isEditable) && (
              <>
                <span className="text-white/40">•</span>
                <ContactRow
                  icon={<Globe className="h-3 w-3 text-white/80" />}
                  value={profile.website || ""}
                  field="website"
                  placeholder="Website"
                  isEditable={isEditable}
                  updateProfile={updateProfile}
                />
              </>
            )}
          </div>
        </div>
      )}

      {/* 3. LEFT ALIGNED LAYOUT (Stacked leftwards, Contact row underneath) */}
      {headerAlign === "left" && (
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-center gap-5">
            {shouldRenderPhoto && (
              <EditablePhoto
                imageUrl={profile.profileImageUrl}
                fullName={profile.fullName}
                isEditable={isEditable}
                className="h-18 w-18"
              />
            )}

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white leading-tight">
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

              <div className="mt-0.5 text-xs font-medium text-white/80">
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
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t border-white/15 pt-2.5 text-[9px] text-white/90">
            <ContactRow
              icon={<Mail className="h-3 w-3 text-white/80" />}
              value={profile.email}
              field="email"
              placeholder="Email"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            <ContactRow
              icon={<Phone className="h-3 w-3 text-white/80" />}
              value={profile.phone}
              field="phone"
              placeholder="Phone"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            <ContactRow
              icon={<MapPin className="h-3 w-3 text-white/80" />}
              value={profile.location}
              field="location"
              placeholder="Location"
              isEditable={isEditable}
              updateProfile={updateProfile}
            />
            {(profile.website || isEditable) && (
              <ContactRow
                icon={<Globe className="h-3 w-3 text-white/80" />}
                value={profile.website || ""}
                field="website"
                placeholder="Website"
                isEditable={isEditable}
                updateProfile={updateProfile}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

interface ContactRowProps {
  icon: React.ReactNode;
  value: string;
  field: keyof ResumePreviewData["profile"];
  placeholder: string;
  isEditable: boolean;
  updateProfile: (field: any, val: any) => void;
}

function ContactRow({
  icon,
  value,
  field,
  placeholder,
  isEditable,
  updateProfile,
}: ContactRowProps) {
  return (
    <div className="flex items-center gap-1.5">
      {icon}
      {isEditable ? (
        <EditableText
          value={value}
          onChange={(val) => updateProfile(field, val)}
          placeholder={placeholder}
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
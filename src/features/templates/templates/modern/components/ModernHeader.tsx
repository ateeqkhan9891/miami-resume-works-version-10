import type { ResumePreviewData } from "@/types/resume";
import {
  AtSign,
  Globe,
  MapPin,
  Phone,
} from "lucide-react";

interface ModernHeaderProps {
  profile: ResumePreviewData["profile"] & {
    avatarUrl?: string;
  };
}

export default function ModernHeader({
  profile,
}: ModernHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-8 bg-cyan-50 px-10 py-5 ring-1 ring-cyan-100">
      {/* Profile Information */}
      <div className="min-w-0 flex-1">
        <h1 className="text-[29px] font-extrabold uppercase leading-none tracking-tight text-slate-950">
          {profile.fullName}
        </h1>

        <p className="mt-2 text-[13px] font-semibold leading-none text-cyan-600">
          {profile.headline}
        </p>

        {/* Contact Information */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[9.5px] text-slate-600">
          {profile.phone && (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Phone
                size={11}
                strokeWidth={2}
                className="shrink-0 text-cyan-600"
              />

              <span>{profile.phone}</span>
            </div>
          )}

          {profile.email && (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <AtSign
                size={11}
                strokeWidth={2}
                className="shrink-0 text-cyan-600"
              />

              <span>{profile.email}</span>
            </div>
          )}

          {profile.location && (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin
                size={11}
                strokeWidth={2}
                className="shrink-0 text-cyan-600"
              />

              <span>{profile.location}</span>
            </div>
          )}

          {profile.website && (
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Globe
                size={11}
                strokeWidth={2}
                className="shrink-0 text-cyan-600"
              />

              <span>{profile.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Profile Image */}
      {profile.profileImageUrl ? (
        <img
          src={profile.profileImageUrl}
          alt={`${profile.fullName} profile`}
          className="h-28 w-28 shrink-0 rounded-full object-cover shadow-sm ring-2 ring-cyan-200"
        />
      ) : (
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 ring-2 ring-cyan-200">
          <span className="text-3xl font-bold uppercase">
            {profile.fullName?.charAt(0) || "U"}
          </span>
        </div>
      )}
    </header>
  );
}
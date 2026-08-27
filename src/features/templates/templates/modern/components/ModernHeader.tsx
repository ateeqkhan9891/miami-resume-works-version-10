import {
  AtSign,
  Globe,
  MapPin,
  Phone,
} from "lucide-react";

import type { ResumePreviewData } from "@/types/resume";

interface ModernHeaderProps {
  profile: ResumePreviewData["profile"];
}

export default function ModernHeader({
  profile,
}: ModernHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-cyan-50 px-10 py-7">
      {/* Decorative Accent */}
      <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-cyan-100/70" />

      <div className="relative flex items-center justify-between gap-8">
        {/* Identity */}
        <div className="min-w-0 flex-1">
          <div className="mb-2 h-1 w-10 rounded-full bg-cyan-500" />

          <h1 className="text-[30px] font-extrabold uppercase leading-none tracking-[-0.02em] text-slate-950">
            {profile.fullName}
          </h1>

          {profile.headline && (
            <p className="mt-2 text-[13px] font-semibold tracking-wide text-cyan-600">
              {profile.headline}
            </p>
          )}

          {/* Contact Information */}
          <div className="mt-4 flex max-w-[560px] flex-wrap items-center gap-x-4 gap-y-2 text-[9px] text-slate-600">
            {profile.phone && (
              <ContactItem
                icon={<Phone size={10} strokeWidth={2} />}
                value={profile.phone}
              />
            )}

            {profile.email && (
              <ContactItem
                icon={<AtSign size={10} strokeWidth={2} />}
                value={profile.email}
              />
            )}

            {profile.location && (
              <ContactItem
                icon={<MapPin size={10} strokeWidth={2} />}
                value={profile.location}
              />
            )}

            {profile.website && (
              <ContactItem
                icon={<Globe size={10} strokeWidth={2} />}
                value={profile.website}
              />
            )}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-cyan-300/40 blur-md" />

          {profile.profileImageUrl ? (
            <img
              src={profile.profileImageUrl}
              alt={`${profile.fullName} profile`}
              className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
          ) : (
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 ring-4 ring-white shadow-lg">
              <span className="text-3xl font-bold uppercase">
                {profile.fullName?.charAt(0) || "U"}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  value: string;
}

function ContactItem({
  icon,
  value,
}: ContactItemProps) {
  return (
    <div className="flex items-center gap-1.5 whitespace-nowrap">
      <span className="text-cyan-600">
        {icon}
      </span>

      <span>{value}</span>
    </div>
  );
}
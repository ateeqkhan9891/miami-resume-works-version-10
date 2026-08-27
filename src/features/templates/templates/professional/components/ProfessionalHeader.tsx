import {
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import type { ResumePreviewData } from "@/types/resume";

interface ProfessionalHeaderProps {
  profile: ResumePreviewData["profile"];
}

export default function ProfessionalHeader({
  profile,
}: ProfessionalHeaderProps) {
  return (
    <header className="px-10 pt-9">
      <div className="flex items-end justify-between gap-10">
        <div className="min-w-0">
          <h1 className="text-[28px] font-bold leading-none tracking-[-0.03em] text-slate-950">
            {profile.fullName}
          </h1>

          <p className="mt-2 text-[13px] font-medium tracking-wide text-slate-500">
            {profile.headline}
          </p>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-x-5 gap-y-2 text-right">
          <ContactItem
            icon={<Mail size={11} />}
            value={profile.email}
          />

          <ContactItem
            icon={<Phone size={11} />}
            value={profile.phone}
          />

          <ContactItem
            icon={<MapPin size={11} />}
            value={profile.location}
          />

          {profile.website && (
            <ContactItem
              icon={<Globe size={11} />}
              value={profile.website}
            />
          )}
        </div>
      </div>

      <div className="mt-6 h-px bg-slate-900" />
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
    <div className="flex items-center justify-end gap-1.5 whitespace-nowrap text-[8.5px] text-slate-500">
      <span>{value}</span>
      <span className="text-slate-400">
        {icon}
      </span>
    </div>
  );
}
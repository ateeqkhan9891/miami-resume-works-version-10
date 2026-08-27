import {
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import type { ResumePreviewData } from "@/types/resume";

interface CreativeHeaderProps {
  profile: ResumePreviewData["profile"];
}

export default function CreativeHeader({
  profile,
}: CreativeHeaderProps) {
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
                    {profile.fullName.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
                {profile.fullName}
              </h1>

              <p className="mt-1 text-sm font-medium text-zinc-600">
                {profile.headline}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="space-y-2">
            <ContactItem
              icon={<MapPin size={12} />}
              value={profile.location}
            />

            <ContactItem
              icon={<Phone size={12} />}
              value={profile.phone}
            />

            <ContactItem
              icon={<Mail size={12} />}
              value={profile.email}
            />

            {profile.website && (
              <ContactItem
                icon={<Globe size={12} />}
                value={profile.website}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 h-1 w-full rounded-full bg-amber-400" />
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
    <div className="flex items-center justify-end gap-2 text-right text-[9px] text-zinc-600">
      <span>{value}</span>

      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        {icon}
      </span>
    </div>
  );
}
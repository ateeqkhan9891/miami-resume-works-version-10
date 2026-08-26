import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const USERS = [
  { initials: "SC", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
  { initials: "AJ", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
  { initials: "MR", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
  { initials: "TK", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
];

export default function HeroSocialProof() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      {/* Stacked Avatar Group */}
      <div className="flex -space-x-2">
        {USERS.map((user, i) => (
          <Avatar
            key={i}
            className="size-7 border-2 border-background"
          >
            <AvatarImage src={user.src} alt="User" />
            <AvatarFallback className="text-[10px] font-medium text-muted-foreground">
              {user.initials}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Rating & Subtle Text */}
      <div className="flex flex-col text-xs">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3 fill-current" />
            ))}
          </div>
          <span className="font-medium text-foreground">4.9/5</span>
        </div>
        <p className="text-muted-foreground">
          Loved by over <span className="text-foreground">20,000+</span> job seekers
        </p>
      </div>
    </div>
  );
}
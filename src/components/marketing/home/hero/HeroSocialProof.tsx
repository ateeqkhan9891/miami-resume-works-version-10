
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const USERS = [
  {
    initials: "SC",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  },
  {
    initials: "AJ",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
  {
    initials: "MR",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  },
  {
    initials: "TK",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  },
];

export default function HeroSocialProof() {
  return (
    <div className="flex items-center gap-4 border-t border-border/50 pt-5">
      {/* Avatar Stack */}
      <div className="flex shrink-0 -space-x-2.5">
        {USERS.map((user, index) => (
          <Avatar
            key={user.initials}
            className="size-8 border-2 border-background shadow-sm"
          >
            <AvatarImage
              src={user.src}
              alt={`Job seeker ${index + 1}`}
            />

            <AvatarFallback className="bg-muted text-[10px] font-semibold text-muted-foreground">
              {user.initials}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Rating */}
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-3.5 fill-current"
              />
            ))}
          </div>

          <span className="text-xs font-semibold text-foreground sm:text-sm">
            4.9/5
          </span>
        </div>

        <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
          Loved by over{" "}
          <span className="font-medium text-foreground">
            20,000+ job seekers
          </span>
        </p>
      </div>
    </div>
  );
}


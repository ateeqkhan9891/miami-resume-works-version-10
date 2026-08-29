"use client";

import Link from "next/link";
import {
  User,
  CreditCard,
  Settings,
  HelpCircle,
  Mail,
  Globe,
  LogOut,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserDropdownMenuProps {
  user?: {
    name?: string;
    email?: string;
  } | null;
  onLogout?: () => void;
}

export default function UserDropdownMenu({
  user,
  onLogout,
}: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex items-center gap-1 rounded-full p-0.5 outline-none transition-opacity hover:opacity-90 focus-visible:ring-1 focus-visible:ring-ring">
        <div className="flex size-8 items-center justify-center rounded-full border border-border bg-muted text-foreground shadow-xs">
          <User className="size-4 text-muted-foreground" />
        </div>
        <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-52 rounded-xl border border-border bg-card p-1 shadow-xl"
      >
        {user?.email && (
          <div className="px-3 py-2 border-b border-border/60">
            <p className="text-xs font-semibold text-foreground truncate">{user.name || "User"}</p>
            <p className="text-[10px] text-muted-foreground truncate">{user.email}</p>
          </div>
        )}

        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <Link
              href="/pricing"
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
            >
              <CreditCard className="size-3.5 text-muted-foreground" />
              <span>Plans</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="p-0">
            <Link
              href="/account"
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
            >
              <Settings className="size-3.5 text-muted-foreground" />
              <span>Account</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1 bg-border" />

        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <Link
              href="/help"
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
            >
              <HelpCircle className="size-3.5 text-muted-foreground" />
              <span>Help Center</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="p-0">
            <Link
              href="/contact"
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
            >
              <Mail className="size-3.5 text-muted-foreground" />
              <span>Contact Us</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1 bg-border" />

        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="size-3.5 text-muted-foreground" />
                <span>Language</span>
              </div>
              <span className="text-[10px] font-semibold text-muted-foreground">EN</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1 bg-border" />

        <DropdownMenuGroup>
          <DropdownMenuItem className="p-0">
            <button
              type="button"
              onClick={onLogout}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-destructive transition hover:bg-destructive/10"
            >
              <LogOut className="size-3.5" />
              <span>Log Out</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
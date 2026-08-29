"use client";

import { Download, Eye, Share2, FileText, Printer } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CanvasActions() {
  return (
    <TooltipProvider>
      <aside
        aria-label="Canvas Actions"
        className="flex flex-col items-center gap-1.5 rounded-2xl border border-neutral-200/80 bg-white/95 p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md transition-shadow hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)]"
      >
        {/* Preview Mode */}
        <Tooltip>
          <TooltipTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-8 w-8 rounded-xl text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
            )}
          >
            <Eye className="h-4 w-4" />
            <span className="sr-only">Full Preview</span>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={8}>
            <p className="text-xs font-medium">Full Preview</p>
          </TooltipContent>
        </Tooltip>

        {/* Share Link */}
        <Tooltip>
          <TooltipTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-8 w-8 rounded-xl text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
            )}
          >
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share Resume</span>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={8}>
            <p className="text-xs font-medium">Share Link</p>
          </TooltipContent>
        </Tooltip>

        <div className="my-0.5 h-px w-5 bg-neutral-200" />

        {/* Download Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            title="Export / Download"
            className={cn(
              buttonVariants({ variant: "default", size: "icon" }),
              "h-8 w-8 rounded-xl bg-neutral-900 text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md active:scale-95"
            )}
          >
            <Download className="h-4 w-4" />
            <span className="sr-only">Export & Download</span>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="left"
            align="start"
            sideOffset={10}
            className="w-48"
          >
            <DropdownMenuLabel className="text-xs font-normal text-neutral-500">
              Export format
            </DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer gap-2 py-2 text-sm">
              <FileText className="h-4 w-4 text-rose-500" />
              <div className="flex flex-col">
                <span className="font-medium leading-none">PDF Document</span>
                <span className="text-[10px] text-neutral-500">
                  Recommended for ATS
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-2 py-2 text-sm">
              <Printer className="h-4 w-4 text-neutral-500" />
              <span className="font-medium">Print Directly</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>
    </TooltipProvider>
  );
}
"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CanvasZoomControlsProps {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  minScale?: number;
  maxScale?: number;
}

export default function CanvasZoomControls({
  scale,
  onZoomIn,
  onZoomOut,
  onReset,
  minScale = 0.4,
  maxScale = 1.6,
}: CanvasZoomControlsProps) {
  const percentage = Math.round(scale * 100);

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white/95 px-2 py-1 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md">
        {/* Zoom Out */}
        <Tooltip>
          <TooltipTrigger
            disabled={scale <= minScale}
            onClick={onZoomOut}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-7 w-7 rounded-full text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 active:scale-95 disabled:opacity-40"
            )}
          >
            <Minus className="h-3.5 w-3.5" />
            <span className="sr-only">Zoom out</span>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8}>
            <p className="text-xs">Zoom out</p>
          </TooltipContent>
        </Tooltip>

        {/* Percentage / Reset Button */}
        <Tooltip>
          <TooltipTrigger
            onClick={onReset}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "h-7 min-w-[54px] rounded-full px-2 text-xs font-medium tabular-nums text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
            )}
          >
            {percentage}%
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8}>
            <p className="text-xs">Reset to fit</p>
          </TooltipContent>
        </Tooltip>

        {/* Zoom In */}
        <Tooltip>
          <TooltipTrigger
            disabled={scale >= maxScale}
            onClick={onZoomIn}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-7 w-7 rounded-full text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 active:scale-95 disabled:opacity-40"
            )}
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="sr-only">Zoom in</span>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8}>
            <p className="text-xs">Zoom in</p>
          </TooltipContent>
        </Tooltip>

        <div className="mx-0.5 h-3.5 w-px bg-neutral-200" />

        {/* Quick Fit Action */}
        <Tooltip>
          <TooltipTrigger
            onClick={onReset}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-7 w-7 rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
            )}
          >
            <RotateCcw className="h-3 w-3" />
            <span className="sr-only">Fit to Screen</span>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8}>
            <p className="text-xs">Fit to screen</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
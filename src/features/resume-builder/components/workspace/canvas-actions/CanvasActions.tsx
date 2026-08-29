"use client";

import { useState } from "react";
import {
  Download,
  Eye,
  Share2,
  FileText,
  Printer,
  Check,
  FileCode2,
  Loader2,
} from "lucide-react";
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CanvasActionsProps {
  resumeTitle?: string;
  onFullPreviewToggle: () => void;
  resumeData?: Record<string, unknown>;
}

export default function CanvasActions({
  resumeTitle = "Resume",
  onFullPreviewToggle,
  resumeData,
}: CanvasActionsProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: resumeTitle,
          text: `Check out my resume: ${resumeTitle}`,
          url: shareUrl,
        });
        return;
      } catch {}
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      console.error("Clipboard copy failed");
    }
  };

  const handleExportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(resumeData || {}, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `${resumeTitle.toLowerCase().replace(/\s+/g, "_")}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleDownloadPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      window.print();
    }, 600);
  };

  return (
    <TooltipProvider>
      <aside
        aria-label="Canvas Actions"
        className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card/95 p-1.5 shadow-lg backdrop-blur-md transition-shadow hover:shadow-xl"
      >
        {/* Full Preview */}
        <Tooltip>
          <TooltipTrigger
            type="button"
            onClick={onFullPreviewToggle}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-8 w-8 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
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
            type="button"
            onClick={handleShare}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-8 w-8 rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
            )}
          >
            {isCopied ? (
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
            <span className="sr-only">Share Resume</span>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={8}>
            <p className="text-xs font-medium">
              {isCopied ? "Link Copied!" : "Share Link"}
            </p>
          </TooltipContent>
        </Tooltip>

        <div className="my-0.5 h-px w-5 bg-border" />

        {/* Export Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            type="button"
            title="Export / Download"
            disabled={isExporting}
            className={cn(
              buttonVariants({ variant: "default", size: "icon" }),
              "h-8 w-8 rounded-lg bg-primary text-primary-foreground shadow-xs transition-all hover:opacity-95 active:scale-95 disabled:opacity-50"
            )}
          >
            {isExporting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            <span className="sr-only">Export & Download</span>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="left"
            align="start"
            sideOffset={10}
            className="w-52 rounded-xl border border-border bg-card p-1 shadow-xl"
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground">
                Export format
              </DropdownMenuLabel>

              <DropdownMenuItem
                onClick={handleDownloadPDF}
                className="cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-foreground transition hover:bg-muted"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-400">
                  <FileText className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="leading-tight">PDF Document</span>
                  <span className="text-[10px] text-muted-foreground">
                    ATS standard layout
                  </span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={handlePrint}
                className="cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-foreground transition hover:bg-muted"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground">
                  <Printer className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="leading-tight">Print Directly</span>
                  <span className="text-[10px] text-muted-foreground">
                    Paper or System PDF
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="my-1 bg-border" />

            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={handleExportJSON}
                className="cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-foreground transition hover:bg-muted"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <FileCode2 className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="leading-tight">JSON Schema</span>
                  <span className="text-[10px] text-muted-foreground">
                    Raw data backup
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>
    </TooltipProvider>
  );
}
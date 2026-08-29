"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CanvasActions from "../canvas-actions/CanvasActions";
import CanvasZoomControls from "../canvas-actions/CanvasZoomControls";
import FullscreenPreviewModal from "../dialogs/FullscreenPreviewModal";
import ResumePage from "./ResumePage";
import type { Template } from "@/types/template";

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;
const MIN_SCALE = 0.4;
const MAX_SCALE = 1.6;
const ZOOM_STEP = 0.1;
const HIDE_DELAY_MS = 1800;

interface ResumeCanvasProps {
  currentTemplate: Template;
  resumeTitle?: string;
}

export default function ResumeCanvas({
  currentTemplate,
  resumeTitle = "Software Engineer Resume",
}: ResumeCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [scale, setScale] = useState(0.85);
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const triggerZoomVisibility = useCallback(() => {
    setIsZoomVisible(true);

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsZoomVisible(false);
    }, HIDE_DELAY_MS);
  }, []);

  const getFitScale = useCallback(() => {
    if (!canvasRef.current) return 0.85;
    const { clientWidth } = canvasRef.current;
    const availableWidth = clientWidth - 200;
    const widthScale = availableWidth / A4_WIDTH;
    return Math.min(Math.max(Number(widthScale.toFixed(2)), 0.65), 1.05);
  }, []);

  const handleReset = useCallback(() => {
    setScale(getFitScale());
    triggerZoomVisibility();
  }, [getFitScale, triggerZoomVisibility]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(Number((prev + ZOOM_STEP).toFixed(2)), MAX_SCALE));
    triggerZoomVisibility();
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(Number((prev - ZOOM_STEP).toFixed(2)), MIN_SCALE));
    triggerZoomVisibility();
  };

  useEffect(() => {
    setScale(getFitScale());

    const observer = new ResizeObserver(() => {
      setScale(getFitScale());
    });

    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, [getFitScale]);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const zoomDelta = e.deltaY > 0 ? -0.05 : 0.05;

        setScale((prev) => {
          const next = prev + zoomDelta;
          return Math.min(Math.max(Number(next.toFixed(2)), MIN_SCALE), MAX_SCALE);
        });

        triggerZoomVisibility();
      }
    };

    canvasElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvasElement.removeEventListener("wheel", handleWheel);
  }, [triggerZoomVisibility]);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const shouldShowControls = isZoomVisible || isHovered;

  return (
    <main
      ref={canvasRef}
      className="relative min-h-0 flex-1 overflow-hidden bg-muted/30 select-none"
      style={{
        backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="h-full overflow-auto">
        <div className="flex min-h-full min-w-fit items-center justify-center p-14">
          <div
            className="relative shrink-0 transition-[width,height] duration-75 ease-out"
            style={{
              width: A4_WIDTH * scale,
              height: A4_HEIGHT * scale,
            }}
          >
            <div
              id="resume-print-target"
              className="absolute left-0 top-0 origin-top-left overflow-hidden rounded-[2px] bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04),0_12px_24px_rgba(0,0,0,0.06),0_24px_48px_rgba(0,0,0,0.06)] transition-transform duration-75 ease-out"
              style={{
                width: A4_WIDTH,
                height: A4_HEIGHT,
                transform: `scale(${scale})`,
              }}
            >
              <ResumePage currentTemplate={currentTemplate} />
            </div>

            <div className="absolute left-full top-0 z-20 pl-4">
              <CanvasActions
                resumeTitle={resumeTitle}
                onFullPreviewToggle={() => setIsPreviewOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute bottom-5 left-1/2 z-30 -translate-x-1/2 transition-all duration-300 ease-out ${
          shouldShowControls
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <CanvasZoomControls
          scale={scale}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
          minScale={MIN_SCALE}
          maxScale={MAX_SCALE}
        />
      </div>

      <FullscreenPreviewModal
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        currentTemplate={currentTemplate}
        resumeTitle={resumeTitle}
      />
    </main>
  );
}
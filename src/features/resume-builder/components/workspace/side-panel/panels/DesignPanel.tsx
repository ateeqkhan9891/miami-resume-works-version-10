"use client";

import {
  Check,
  Palette,
  Type,
  MoveVertical,
  User,
  Sliders,
  AlignLeft,
  AlignCenter,
  Columns,
  Circle,
  Square,
  EyeOff,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useResumeStore } from "@/features/resume-builder/store/useResumeStore";

const PRESET_PALETTES = [
  { name: "Forest", primary: "#214e3b" },
  { name: "Slate", primary: "#0f172a" },
  { name: "Indigo", primary: "#4f46e5" },
  { name: "Sky", primary: "#0284c7" },
  { name: "Emerald", primary: "#059669" },
  { name: "Amber", primary: "#b88a5a" },
  { name: "Rose", primary: "#b42318" },
  { name: "Violet", primary: "#7c3aed" },
];

const FONT_FAMILIES = [
  { id: "inter", name: "Inter", category: "Modern Sans", fontClass: "font-sans" },
  { id: "roboto", name: "Roboto", category: "Clean Sans", fontClass: "font-sans" },
  { id: "merriweather", name: "Merriweather", category: "Editorial Serif", fontClass: "font-serif" },
  { id: "garamond", name: "EB Garamond", category: "Classic Serif", fontClass: "font-serif" },
  { id: "geist-mono", name: "Geist Mono", category: "Technical Mono", fontClass: "font-mono" },
];

export default function DesignPanel() {
  const design = useResumeStore((state) => state.design);
  const updateDesign = useResumeStore((state) => state.updateDesign);

  return (
    <div className="space-y-4 pb-8">
      <Accordion
        type="multiple"
        collapsible
        defaultValue={["palette", "typography", "spacing", "header", "sections"]}
        className="space-y-2.5"
      >
        {/* 1. Accent & Palette */}
        <AccordionItem
          value="palette"
          className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
        >
          <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
            <div className="flex items-center gap-2">
              <Palette className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Theme & Palette</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3.5 pt-1 pb-3">
            <div className="grid grid-cols-4 gap-2">
              {PRESET_PALETTES.map((c) => (
                <button
                  key={c.primary}
                  type="button"
                  onClick={() => updateDesign("accentColor", c.primary)}
                  className="group flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-2 transition-all hover:border-foreground/30 hover:shadow-xs"
                >
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-full shadow-xs transition-transform group-hover:scale-110"
                    style={{ backgroundColor: c.primary }}
                  >
                    {design.accentColor === c.primary && (
                      <Check className="h-3 w-3 stroke-[3] text-white" />
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Hex Picker */}
            <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-2">
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={design.accentColor}
                  onChange={(e) => updateDesign("accentColor", e.target.value)}
                  className="h-6 w-6 cursor-pointer rounded-md border-0 bg-transparent p-0"
                />
                <span className="text-xs font-medium text-foreground">
                  Custom Hex
                </span>
              </div>
              <input
                type="text"
                value={design.accentColor}
                onChange={(e) => updateDesign("accentColor", e.target.value)}
                className="h-7 w-22 rounded-md border border-input bg-muted/50 px-2 text-center font-mono text-xs font-medium uppercase text-foreground outline-none focus:border-primary"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 2. Typography & Fonts */}
        <AccordionItem
          value="typography"
          className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
        >
          <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
            <div className="flex items-center gap-2">
              <Type className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Typography & Scaling</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3.5 pt-1 pb-3">
            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Primary Font
              </Label>
              <div className="space-y-1.5">
                {FONT_FAMILIES.map((font) => (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => updateDesign("fontFamily", font.id)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition-all ${
                      design.fontFamily === font.id
                        ? "border-primary bg-accent/40 shadow-xs"
                        : "border-border bg-card/80 hover:border-foreground/20"
                    }`}
                  >
                    <div>
                      <p className={`text-xs font-semibold text-foreground ${font.fontClass}`}>
                        {font.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{font.category}</p>
                    </div>
                    {design.fontFamily === font.id && (
                      <Check className="h-3.5 w-3.5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Body Font Size
              </Label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "small", label: "Small 9pt" },
                  { id: "medium", label: "Medium 10pt" },
                  { id: "large", label: "Large 11pt" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => updateDesign("fontSize", s.id as any)}
                    className={`rounded-lg border py-1.5 text-[10px] font-medium transition ${
                      design.fontSize === s.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3. Margins & Spacing */}
        <AccordionItem
          value="spacing"
          className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
        >
          <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
            <div className="flex items-center gap-2">
              <MoveVertical className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Document Margins & Density</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3 pt-1 pb-3">
            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Page Margins
              </Label>
              <div className="grid grid-cols-3 gap-1.5">
                {["compact", "normal", "spacious"].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => updateDesign("pageMargin", m as any)}
                    className={`rounded-lg border py-1.5 text-xs font-medium capitalize transition ${
                      design.pageMargin === m
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Line Spacing
              </Label>
              <div className="grid grid-cols-3 gap-1.5">
                {["dense", "normal", "relaxed"].map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => updateDesign("lineSpacing", l as any)}
                    className={`rounded-lg border py-1.5 text-xs font-medium capitalize transition ${
                      design.lineSpacing === l
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 4. Header & Profile Alignment */}
        <AccordionItem
          value="header"
          className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
        >
          <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Header & Photo Alignment</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3 pt-1 pb-3">
            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Header Layout
              </Label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "left", label: "Left", icon: AlignLeft },
                  { id: "center", label: "Centered", icon: AlignCenter },
                  { id: "split", label: "Split", icon: Columns },
                ].map((h) => {
                  const Icon = h.icon;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => updateDesign("headerAlign", h.id as any)}
                      className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-[11px] font-medium transition ${
                        design.headerAlign === h.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{h.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Photo Format
              </Label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "circle", label: "Circle", icon: Circle },
                  { id: "rounded", label: "Rounded", icon: Square },
                  { id: "none", label: "Hidden", icon: EyeOff },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => updateDesign("photoShape", p.id as any)}
                      className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-[11px] font-medium transition ${
                        design.photoShape === p.id
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5. Dividers & List Bullets */}
        <AccordionItem
          value="sections"
          className="rounded-2xl border border-border bg-card/60 px-3.5 shadow-xs"
        >
          <AccordionTrigger className="py-3 text-xs font-semibold text-foreground hover:no-underline">
            <div className="flex items-center gap-2">
              <Sliders className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Dividers & Bullets</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-3 pt-1 pb-3">
            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Heading Divider Style
              </Label>
              <div className="grid grid-cols-4 gap-1.5">
                {["solid", "dashed", "minimal", "none"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => updateDesign("dividerStyle", d as any)}
                    className={`rounded-lg border py-1.5 text-[11px] font-medium capitalize transition ${
                      design.dividerStyle === d
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Bullet Icon Style
              </Label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "dot", label: "• Dot" },
                  { id: "dash", label: "— Dash" },
                  { id: "diamond", label: "◆ Diamond" },
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => updateDesign("bulletStyle", b.id as any)}
                    className={`rounded-lg border py-1.5 text-[11px] font-medium transition ${
                      design.bulletStyle === b.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
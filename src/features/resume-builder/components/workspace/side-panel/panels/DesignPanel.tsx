"use client";

import { useState } from "react";
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

const PRESET_PALETTES = [
  { name: "Forest", primary: "#214e3b", bg: "#f7f5ef" },
  { name: "Slate", primary: "#0f172a", bg: "#f8fafc" },
  { name: "Indigo", primary: "#4f46e5", bg: "#eef2ff" },
  { name: "Sky", primary: "#0284c7", bg: "#f0f9ff" },
  { name: "Emerald", primary: "#059669", bg: "#ecfdf5" },
  { name: "Amber", primary: "#b88a5a", bg: "#fbf8f3" },
  { name: "Rose", primary: "#b42318", bg: "#fff1f2" },
  { name: "Violet", primary: "#7c3aed", bg: "#f5f3ff" },
];

const FONT_FAMILIES = [
  { id: "inter", name: "Inter", category: "Modern Sans", fontClass: "font-sans" },
  { id: "roboto", name: "Roboto", category: "Clean Sans", fontClass: "font-sans" },
  { id: "merriweather", name: "Merriweather", category: "Editorial Serif", fontClass: "font-serif" },
  { id: "garamond", name: "EB Garamond", category: "Classic Serif", fontClass: "font-serif" },
  { id: "geist-mono", name: "Geist Mono", category: "Technical Mono", fontClass: "font-mono" },
];

export default function DesignPanel() {
  // Theme & Colors
  const [accentColor, setAccentColor] = useState("#214e3b");
  const [customHex, setCustomHex] = useState("#214e3b");

  // Typography
  const [selectedFont, setSelectedFont] = useState("inter");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");

  // Spacing & Layout
  const [pageMargin, setPageMargin] = useState<"compact" | "normal" | "spacious">("normal");
  const [lineSpacing, setLineSpacing] = useState<"dense" | "normal" | "relaxed">("normal");

  // Header & Photo
  const [headerAlign, setHeaderAlign] = useState<"left" | "center" | "split">("split");
  const [photoShape, setPhotoShape] = useState<"circle" | "rounded" | "none">("circle");

  // Section Styling
  const [dividerStyle, setDividerStyle] = useState<"solid" | "dashed" | "minimal" | "none">("solid");
  const [bulletStyle, setBulletStyle] = useState<"dot" | "dash" | "diamond">("dot");

  const handleColorChange = (hex: string) => {
    setAccentColor(hex);
    setCustomHex(hex);
  };

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
                  onClick={() => handleColorChange(c.primary)}
                  className="group flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-2 transition-all hover:border-foreground/30 hover:shadow-xs"
                >
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-full shadow-xs transition-transform group-hover:scale-110"
                    style={{ backgroundColor: c.primary }}
                  >
                    {accentColor === c.primary && (
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
                  value={customHex}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="h-6 w-6 cursor-pointer rounded-md border-0 bg-transparent p-0"
                />
                <span className="text-xs font-medium text-foreground">
                  Custom Hex
                </span>
              </div>
              <input
                type="text"
                value={customHex}
                onChange={(e) => handleColorChange(e.target.value)}
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
            {/* Font Family Selection */}
            <div className="space-y-1.5">
              <Label className="text-[11px] font-medium text-muted-foreground">
                Primary Font
              </Label>
              <div className="space-y-1.5">
                {FONT_FAMILIES.map((font) => (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => setSelectedFont(font.id)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition-all ${
                      selectedFont === font.id
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
                    {selectedFont === font.id && (
                      <Check className="h-3.5 w-3.5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size Preset */}
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
                    onClick={() => setFontSize(s.id as "small" | "medium" | "large")}
                    className={`rounded-lg border py-1.5 text-[10px] font-medium transition ${
                      fontSize === s.id
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
                    onClick={() => setPageMargin(m as "compact" | "normal" | "spacious")}
                    className={`rounded-lg border py-1.5 text-xs font-medium capitalize transition ${
                      pageMargin === m
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
                    onClick={() => setLineSpacing(l as "dense" | "normal" | "relaxed")}
                    className={`rounded-lg border py-1.5 text-xs font-medium capitalize transition ${
                      lineSpacing === l
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
                      onClick={() => setHeaderAlign(h.id as "left" | "center" | "split")}
                      className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-[11px] font-medium transition ${
                        headerAlign === h.id
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
                      onClick={() => setPhotoShape(p.id as "circle" | "rounded" | "none")}
                      className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-[11px] font-medium transition ${
                        photoShape === p.id
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
                    onClick={() => setDividerStyle(d as "solid" | "dashed" | "minimal" | "none")}
                    className={`rounded-lg border py-1.5 text-[11px] font-medium capitalize transition ${
                      dividerStyle === d
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
                    onClick={() => setBulletStyle(b.id as "dot" | "dash" | "diamond")}
                    className={`rounded-lg border py-1.5 text-[11px] font-medium transition ${
                      bulletStyle === b.id
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
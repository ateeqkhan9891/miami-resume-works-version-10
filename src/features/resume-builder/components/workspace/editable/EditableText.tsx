
"use client";

import React, { useRef, useEffect } from "react";

interface EditableTextProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
}

export function EditableText({
  value,
  onChange,
  className = "",
  placeholder = "Click to edit...",
  multiline = false,
}: EditableTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value || "";
    }
  }, [value]);

  const handleBlur = () => {
    if (ref.current) {
      const newText = ref.current.innerText.trim();
      if (newText !== value) {
        onChange(newText);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      ref.current?.blur();
    }
  };

  return (
    <span
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      data-placeholder={placeholder}
      className={`inline-block min-w-[20px] rounded px-0.5 py-0.5 outline-none transition-colors 
        hover:bg-primary/5 hover:ring-1 hover:ring-primary/20 
        focus:bg-primary/10 focus:ring-1 focus:ring-primary/40
        empty:before:content-[attr(data-placeholder)] empty:before:text-slate-400 empty:before:italic ${className}`}
    />
  );
}
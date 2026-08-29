import type { ReactNode } from "react";

interface WorkspaceLayoutProps {
  children: ReactNode;
}

export default function WorkspaceLayout({
  children,
}: WorkspaceLayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-neutral-100">
      {children}
    </div>
  );
}
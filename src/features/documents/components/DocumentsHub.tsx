"use client";

import { useState } from "react";
import { Search, LayoutGrid, List, Plus, FileText, Mail } from "lucide-react";
import DocumentsTableView from "./DocumentsTableView";
import DocumentsGridView from "./DocumentsGridView";
import CreateDocumentModal from "./CreateDocumentModal";
import { INITIAL_DOCUMENTS } from "../data/mock-documents";
import type { DocumentItem, DocumentType } from "../types";

type TabFilter = "all" | "resumes" | "cover_letters";

export default function DocumentsHub({ userName = "User" }: { userName?: string }) {
  const [documents, setDocuments] = useState<DocumentItem[]>(INITIAL_DOCUMENTS);
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const totalCount = documents.length;
  const resumeCount = documents.filter((d) => d.type === "Resume").length;
  const coverLetterCount = documents.filter((d) => d.type === "Cover Letter").length;

  const handleToggleSelectAll = () => {
    const areAllSelected = documents.every((d) => d.selected);
    setDocuments((prev) => prev.map((d) => ({ ...d, selected: !areAllSelected })));
  };

  const handleToggleSelect = (id: string) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, selected: !d.selected } : d))
    );
  };

  const handlePin = (id: string) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, isPinned: !d.isPinned } : d))
    );
  };

  const handleDuplicate = (doc: DocumentItem) => {
    const duplicated: DocumentItem = {
      ...doc,
      id: `${Date.now()}`,
      name: `${doc.name} (Copy)`,
      createdAt: "Aug 29, 2026",
      modifiedAt: "Just now",
      selected: false,
    };
    setDocuments((prev) => [duplicated, ...prev]);
  };

  const handleDelete = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  const handleCreateDocument = (name: string, type: DocumentType) => {
    const newDoc: DocumentItem = {
      id: `${Date.now()}`,
      name,
      type,
      createdAt: "Aug 29, 2026",
      modifiedAt: "Just now",
    };
    setDocuments((prev) => [newDoc, ...prev]);
  };

  const filteredDocuments = documents
    .filter((doc) => {
      if (activeTab === "resumes") return doc.type === "Resume";
      if (activeTab === "cover_letters") return doc.type === "Cover Letter";
      return true;
    })
    .filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.jobTarget?.company.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));

  const allSelected = documents.length > 0 && documents.every((d) => d.selected);

  return (
    <div className="space-y-6">
      {/* Top Banner Greeting */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Welcome back, {userName}! You have {totalCount} documents
          </h1>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            Manage, duplicate, and tailor your ATS-compliant resumes and cover letters.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex h-9.5 items-center gap-1.5 rounded-xl bg-primary px-4.5 text-xs font-bold text-primary-foreground shadow-xs transition hover:opacity-90 active:scale-95"
        >
          <Plus className="size-4 stroke-[2.5]" />
          <span>Create New</span>
        </button>
      </div>

      {/* Tabs & Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-3 sm:flex-row sm:items-center">
        {/* Left Tabs */}
        <div className="flex items-center gap-7 text-[13px]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`relative pb-3 transition-colors ${
              activeTab === "all"
                ? "font-bold text-foreground"
                : "font-medium text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>All documents</span>
            {activeTab === "all" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("resumes")}
            className={`relative flex items-center gap-1.5 pb-3 transition-colors ${
              activeTab === "resumes"
                ? "font-bold text-foreground"
                : "font-medium text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="size-4" />
            <span>Resumes ({resumeCount})</span>
            {activeTab === "resumes" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cover_letters")}
            className={`relative flex items-center gap-1.5 pb-3 transition-colors ${
              activeTab === "cover_letters"
                ? "font-bold text-foreground"
                : "font-medium text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mail className="size-4" />
            <span>Cover letters ({coverLetterCount})</span>
            {activeTab === "cover_letters" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
            )}
          </button>
        </div>

        {/* Right Search & View Switches */}
        <div className="flex items-center gap-3">
          <div className="relative w-60">
            <Search className="pointer-events-none absolute right-3.5 top-2.5 size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8.5 w-full rounded-full border border-border bg-surface pl-3.5 pr-9 text-xs font-medium text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 border-l border-border pl-3 text-xs font-medium text-foreground">
            <span className="mr-1 text-[11px] text-muted-foreground">View:</span>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex size-8 items-center justify-center rounded-lg border transition ${
                viewMode === "grid"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              <LayoutGrid className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`flex size-8 items-center justify-center rounded-lg border transition ${
                viewMode === "table"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              <List className="size-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Table or Grid */}
      {viewMode === "table" ? (
        <DocumentsTableView
          documents={filteredDocuments}
          allSelected={allSelected}
          onToggleSelectAll={handleToggleSelectAll}
          onToggleSelect={handleToggleSelect}
          onPin={handlePin}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />
      ) : (
        <DocumentsGridView
          documents={filteredDocuments}
          onPin={handlePin}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
        />
      )}

      {/* Create Modal */}
      <CreateDocumentModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onCreateDocument={handleCreateDocument}
      />
    </div>
  );
}
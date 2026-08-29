import type { DocumentItem } from "../types";

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: "1",
    name: "New Resume (5)",
    type: "Resume",
    createdAt: "Aug 29, 2026",
    modifiedAt: "1 hour ago",
    isPinned: false,
  },
  {
    id: "2",
    name: "New Resume (4)",
    type: "Resume",
    createdAt: "Aug 29, 2026",
    modifiedAt: "1 hour ago",
    isPinned: false,
  },
  {
    id: "3",
    name: "New Resume (3)",
    type: "Resume",
    createdAt: "Aug 29, 2026",
    modifiedAt: "2 hours ago",
    isPinned: false,
  },
  {
    id: "4",
    name: "AI & Backend Engineer - Volga Partners",
    type: "Resume",
    jobTarget: {
      company: "Volga Partners",
      matchScore: 62,
    },
    createdAt: "Aug 29, 2026",
    modifiedAt: "4 hours ago",
    isPinned: false,
  },
  {
    id: "5",
    name: "New Resume (2)",
    type: "Resume",
    createdAt: "Aug 25, 2026",
    modifiedAt: "4 days ago",
    isPinned: false,
  },
];
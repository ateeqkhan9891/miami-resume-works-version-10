
import Link from "next/link";
import { FileText, Download, MoreVertical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { RecentDocument } from "../types";

const RECENT_DOCS: RecentDocument[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer Resume",
    jobTarget: "Google — Lead UI",
    type: "Resume",
    lastEdited: "Few seconds ago",
    href: "/resume/123",
  },
];

export default function RecentDocumentsTable() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground">Recent Documents</h3>
        <Link
          href="/documents"
          className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:underline"
        >
          <span>All Documents</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border bg-muted/20 text-[11px] font-semibold uppercase text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Document Name</th>
              <th className="px-5 py-3">Job Target</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Last Edit</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {RECENT_DOCS.map((doc) => (
              <tr key={doc.id} className="hover:bg-muted/10">
                <td className="flex items-center gap-2.5 px-5 py-3.5 font-medium text-foreground">
                  <FileText className="size-4 text-emerald-600 shrink-0" />
                  <Link href={doc.href} className="hover:underline">
                    {doc.title}
                  </Link>
                </td>
                <td className="px-5 py-3.5 text-muted-foreground">{doc.jobTarget}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{doc.type}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{doc.lastEdited}</td>
                <td className="px-5 py-3.5 text-right">
                  <div className="inline-flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="size-7">
                      <Download className="size-3.5 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-7">
                      <MoreVertical className="size-3.5 text-muted-foreground" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
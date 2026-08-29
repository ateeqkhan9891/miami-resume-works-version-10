
import { Button } from "@/components/ui/button";

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
    </svg>
  );
}

export default function BrowserExtensionCard() {
  return (
    <div className="rounded-2xl border border-border bg-sky-50/50 p-5">
      <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-xs">
        <ChromeIcon className="size-5 text-sky-600" />
      </div>

      <h4 className="mt-3 text-sm font-bold text-foreground">
        Organize your job hunt
      </h4>
      <p className="mt-1 text-xs text-muted-foreground">
        Instantly save jobs from LinkedIn and Indeed into MiamiResume with our free extension.
      </p>

      <Button
        size="sm"
        variant="outline"
        className="mt-4 h-8 w-full rounded-xl border-border bg-white text-xs font-semibold shadow-xs hover:bg-stone-50"
      >
        Get Chrome Extension
      </Button>
    </div>
  );
}
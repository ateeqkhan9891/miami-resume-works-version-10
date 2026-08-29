export type SaveStatusType = "idle" | "saving" | "saved" | "unsaved" | "error" ;

interface SaveStatusProps {
  status: SaveStatusType;
}

export default function SaveStatus({
  status,
}: SaveStatusProps) {
  switch (status) {
    case "saving":
      return (
        <span className="text-sm text-muted-foreground">
          Saving...
        </span>
      );

    case "saved":
      return (
        <span className="text-sm text-muted-foreground">
          Saved
        </span>
      );

    case "unsaved":
      return (
        <span className="text-sm text-amber-600">
          Unsaved changes
        </span>
      );

    case "error":
      return (
        <span className="text-sm text-destructive">
          Couldn't save
        </span>
      );

    default:
      return null;
  }
}
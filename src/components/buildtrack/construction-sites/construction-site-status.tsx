import type { ConstructionSiteStatus } from "@/features/construction-sites/construction-site.enums";

import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";


type ConstructionSiteStatusProps = {
  status: ConstructionSiteStatus;
  className?: string;
};

const statusConfig: Record<
    ConstructionSiteStatus,
  {
    label: string;
    className: string;
    iconClassName: string;
  }
> = {
  active: {
    label: "Aktiv",
    className: "border-green-200 bg-green-50 text-green-700",
    iconClassName: "fill-green-500 text-green-500",
  },
  paused: {
    label: "Pausiert",
    className: "border-amber-200 bg-amber-50 text-amber-700",
    iconClassName: "fill-amber-500 text-amber-500",
  },
  completed: {
    label: "Abgeschlossen",
    className: "border-slate-200 bg-slate-100 text-slate-700",
    iconClassName: "fill-slate-500 text-slate-500",
  },
  archived: {
    label: "Archiviert",
    className: "border-slate-200 bg-white text-slate-500",
    iconClassName: "fill-slate-400 text-slate-400",
  },
};

export function ConstructionSiteStatus({
  status,
  className,
}: ConstructionSiteStatusProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
        config.className,
        className
      )}
    >
      <Circle
        aria-hidden="true"
        className={cn("h-2 w-2", config.iconClassName)}
      />

      <span>{config.label}</span>
    </span>
  );
}
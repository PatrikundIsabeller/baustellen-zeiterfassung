import { ReactNode } from "react";

type DashboardHeaderProps = {
  user: string;
  subtitle: string;
  actions?: ReactNode;
};

export function DashboardHeader({
  user,
  subtitle,
  actions,
}: DashboardHeaderProps) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            BuildTrack Office
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Guten Morgen, {user} 👋
          </h1>

          <p className="mt-3 max-w-3xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {actions && (
          <div className="flex flex-wrap gap-3">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
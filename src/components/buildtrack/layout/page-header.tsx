import { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="max-w-3xl text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div className="flex flex-wrap gap-3">
          {actions}
        </div>
      )}
    </div>
  );
}
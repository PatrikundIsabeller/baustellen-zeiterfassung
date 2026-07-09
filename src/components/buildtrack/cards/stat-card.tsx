import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  description?: string;
  trend?: string;
  icon?: ReactNode;
  className?: string;
};

export function StatCard({
  title,
  value,
  description,
  trend,
  icon,
  className,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "rounded-3xl border-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="text-sm font-medium text-muted-foreground">
              {title}
            </div>

            <div className="text-4xl font-bold tracking-tight">
              {value}
            </div>

            {(trend || description) && (
              <div className="flex items-center gap-2">
                {trend && (
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                    {trend}
                  </span>
                )}

                {description && (
                  <span className="text-sm text-muted-foreground">
                    {description}
                  </span>
                )}
              </div>
            )}
          </div>

          {icon && (
            <div className="rounded-2xl bg-slate-100 p-3">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
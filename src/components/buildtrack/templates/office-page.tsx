import { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { PageContainer } from "@/components/buildtrack/layout/page-container";
import { PageHeader } from "@/components/buildtrack/layout/page-header";

type OfficePageProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function OfficePage({
  title,
  description,
  eyebrow = "BuildTrack Office",
  actions,
  children,
}: OfficePageProps) {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          actions={actions}
        />

        {children}
      </PageContainer>
    </AppShell>
  );
}
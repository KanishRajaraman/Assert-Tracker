import type { ReactNode } from "react";

export function Panel({
  title,
  children,
  action,
  className = "",
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-header">
        <span>{title}</span>
        {action}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}

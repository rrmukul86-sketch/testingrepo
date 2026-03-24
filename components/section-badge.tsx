type SectionBadgeProps = {
  children: React.ReactNode;
};

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="theme-transition inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] theme-surface-muted">
      {children}
    </span>
  );
}

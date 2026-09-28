export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`section-label ${light ? "section-label--light" : ""}`}
    >
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

interface ArrowIconProps {
  className?: string;
}

export function ArrowIcon({
  className = "",
}: ArrowIconProps) {
  return (
    <span
      aria-hidden
      className={`arrow-icon inline-block ${className}`}
    >
      ↗
    </span>
  );
}

export function ChevronIcon({
  left = false,
}: {
  left?: boolean;
}) {
  return (
    <span aria-hidden className="chevron">
      {left ? "←" : "→"}
    </span>
  );
}

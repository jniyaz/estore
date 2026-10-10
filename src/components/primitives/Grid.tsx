import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
  gap?: "compact" | "normal" | "spacious";
  className?: string;
}

export function Grid({
  children,
  cols = 1,
  gap = "normal",
  className = "",
}: GridProps) {
  const colsClass = `grid-cols-${cols}`;
  const gapMap = {
    compact: "gap-2",
    normal: "gap-4",
    spacious: "gap-6",
  };

  return (
    <div className={`grid ${colsClass} ${gapMap[gap]} ${className}`}>
      {children}
    </div>
  );
}

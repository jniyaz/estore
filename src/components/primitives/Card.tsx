import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  bordered?: boolean;
  elevated?: boolean;
  clickable?: boolean;
  className?: string;
}

export function Card({
  children,
  bordered = true,
  elevated = false,
  clickable = false,
  className = "",
}: CardProps) {
  const baseClasses = "bg-surface-elevated rounded-md p-4 transition-base";
  const borderClass = bordered ? "border border-surface-border" : "";
  const elevatedClass = elevated
    ? "shadow-md hover:shadow-lg"
    : "shadow-sm";
  const clickableClass = clickable ? "cursor-pointer hover:shadow-lg" : "";

  return (
    <div
      className={`${baseClasses} ${borderClass} ${elevatedClass} ${clickableClass} ${className}`}
    >
      {children}
    </div>
  );
}

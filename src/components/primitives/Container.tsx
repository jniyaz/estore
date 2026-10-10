import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  variant?: "full" | "content";
  className?: string;
}

export function Container({
  children,
  variant = "full",
  className = "",
}: ContainerProps) {
  const baseClass = variant === "content" ? "container-content" : "container";

  return <div className={`${baseClass} ${className}`}>{children}</div>;
}

import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "subtle";
  className?: string;
}

export function Link({
  href,
  children,
  variant = "default",
  className = "",
}: LinkProps) {
  const variantClass = variant === "subtle" ? "link-subtle" : "";

  return (
    <NextLink href={href} className={`${variantClass} ${className}`}>
      {children}
    </NextLink>
  );
}

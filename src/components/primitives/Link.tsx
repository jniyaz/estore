import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  variant?: "default" | "subtle" | "accent";
  className?: string;
  children: ReactNode;
}

const variantClasses = {
  default: "text-neutral-900 hover:underline",
  subtle: "text-neutral-600 hover:text-neutral-900",
  accent: "text-accent font-semibold hover:underline hover:text-accent-600",
};

export function Link({
  href,
  variant = "default",
  className = "",
  children,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`
        ${variantClasses[variant]}
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </NextLink>
  );
}

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "subtle" | "base";
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  variant = "subtle",
  className = "",
}: DividerProps) {
  const borderClass = variant === "base" ? "border-base" : "border-subtle";

  if (orientation === "vertical") {
    return (
      <div
        className={`w-px h-full ${borderClass} border-r ${className}`}
        role="separator"
      />
    );
  }

  return (
    <hr className={`divider ${borderClass} ${className}`} role="separator" />
  );
}

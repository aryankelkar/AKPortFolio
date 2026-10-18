import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "muted" | "status" | "lime";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-code tracking-wider uppercase transition-colors";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 rounded-full",
    md: "text-xs px-3 py-1 rounded-full",
  };

  const variantStyles = {
    default:
      "bg-[#10182D] text-[#959BB5] border border-[rgba(58,62,108,0.4)] hover:border-[rgba(131,135,195,0.45)]",
    accent:
      "bg-[rgba(131,135,195,0.18)] text-[#E7E7F0] border border-[rgba(131,135,195,0.4)]",
    outline:
      "bg-transparent text-[#959BB5] border border-[rgba(58,62,108,0.35)] hover:text-[#E7E7F0]",
    muted:
      "bg-[#0A1123] text-[#8A8CAC] border border-[rgba(58,62,108,0.25)]",
    status:
      "bg-[#162040] text-[#8387C3] border border-[rgba(131,135,195,0.35)]",
    lime:
      "bg-[rgba(131,135,195,0.15)] text-[#E7E7F0] border border-[rgba(131,135,195,0.35)] font-semibold",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

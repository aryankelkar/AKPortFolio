import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "muted" | "status";
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
      "bg-[#101830] text-[#959BB5] border border-[rgba(131,135,195,0.18)] hover:border-[rgba(131,135,195,0.35)]",
    accent:
      "bg-[rgba(131,135,195,0.15)] text-[#E7E7F0] border border-[rgba(131,135,195,0.4)]",
    outline:
      "bg-transparent text-[#959BB5] border border-[rgba(149,155,181,0.25)] hover:text-[#E7E7F0]",
    muted:
      "bg-[#0A1123] text-[#8A8CAC] border border-[rgba(138,140,172,0.15)]",
    status:
      "bg-[rgba(58,62,108,0.35)] text-[#8387C3] border border-[rgba(131,135,195,0.3)]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

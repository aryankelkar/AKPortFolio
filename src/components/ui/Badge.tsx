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
      "bg-[#171924] text-[#959BB5] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(131,135,195,0.4)]",
    accent:
      "bg-[rgba(131,135,195,0.14)] text-[#F0EEF4] border border-[rgba(131,135,195,0.35)]",
    outline:
      "bg-transparent text-[#959BB5] border border-[rgba(255,255,255,0.12)] hover:text-[#F0EEF4]",
    muted:
      "bg-[#111218] text-[#8A8CAC] border border-[rgba(255,255,255,0.06)]",
    status:
      "bg-[#1E2030] text-[#8387C3] border border-[rgba(131,135,195,0.3)]",
    lime:
      "bg-[rgba(131,135,195,0.14)] text-[#F0EEF4] border border-[rgba(131,135,195,0.35)] font-semibold",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

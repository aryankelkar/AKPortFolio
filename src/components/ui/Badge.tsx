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
      "bg-[#10182D] text-[#B0AEB8] border border-[rgba(160,170,210,0.14)] hover:border-[rgba(163,154,255,0.4)]",
    accent:
      "bg-[rgba(163,154,255,0.14)] text-[#F0EEF4] border border-[rgba(163,154,255,0.35)]",
    outline:
      "bg-transparent text-[#B0AEB8] border border-[rgba(160,170,210,0.16)] hover:text-[#F0EEF4]",
    muted:
      "bg-[#0B1020] text-[#85879B] border border-[rgba(160,170,210,0.12)]",
    status:
      "bg-[#162040] text-[#A39AFF] border border-[rgba(163,154,255,0.3)]",
    lime:
      "bg-[rgba(163,154,255,0.14)] text-[#F0EEF4] border border-[rgba(163,154,255,0.35)] font-semibold",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

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
      "bg-[#141418] text-[#B5B0A6] border border-[rgba(168,163,154,0.18)] hover:border-[rgba(154,148,232,0.35)]",
    accent:
      "bg-[rgba(154,148,232,0.15)] text-[#F7F5F0] border border-[rgba(154,148,232,0.4)]",
    outline:
      "bg-transparent text-[#B5B0A6] border border-[rgba(168,163,154,0.25)] hover:text-[#F7F5F0]",
    muted:
      "bg-[#0B0B0D] text-[#A8A39A] border border-[rgba(168,163,154,0.15)]",
    status:
      "bg-[#181820] text-[#9A94E8] border border-[rgba(154,148,232,0.3)]",
    lime:
      "bg-[rgba(198,243,106,0.12)] text-[#C6F36A] border border-[rgba(198,243,106,0.3)] font-semibold",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

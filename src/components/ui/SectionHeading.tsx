import React from "react";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  tag,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"} ${className}`}
    >
      <div
        className={`flex items-center gap-3 mb-3 ${isCenter ? "justify-center" : ""}`}
      >
        {number && (
          <span className="font-code text-xs font-semibold text-[#9A94E8] tracking-widest uppercase">
            {number}
          </span>
        )}
        {number && tag && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#6559A8]" />
        )}
        {tag && (
          <span className="font-code text-xs uppercase tracking-widest text-[#A8A39A]">
            {tag}
          </span>
        )}
      </div>

      <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F5F0] tracking-tight leading-[1.12]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[#B5B0A6] text-base sm:text-lg leading-relaxed font-sans font-light">
          {description}
        </p>
      )}
    </div>
  );
}

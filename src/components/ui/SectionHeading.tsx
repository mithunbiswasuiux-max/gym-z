import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 mb-10",
        {
          "items-start text-left": alignment === "left",
          "items-center text-center": alignment === "center",
          "items-end text-right": alignment === "right",
        },
        className
      )}
    >
      {subtitle && (
        <span className="text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase text-sm font-sans bg-[var(--color-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-6xl font-extrabold font-heading text-white uppercase leading-tight mt-2">
        {title}
      </h2>
    </div>
  );
};

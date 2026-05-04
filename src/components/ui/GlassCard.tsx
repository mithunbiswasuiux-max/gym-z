import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300",
        {
          "hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,163,0.15)]": hoverEffect,
        },
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

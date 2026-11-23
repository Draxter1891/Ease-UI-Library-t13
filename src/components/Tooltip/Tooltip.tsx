import React from "react";
import { cn } from "../../libs/utils";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  variant?: "dark" | "light";
  className?: string;
};

const positionClasses = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
  bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
};

const Tooltip = ({
  content,
  children,
  position = "top",
  variant = "dark",
  className,
}: TooltipProps) => {
  return (
    <span className="group relative inline-flex">
      <span tabIndex={0} className="inline-flex cursor-help focus:outline-none">
        {children}
      </span>
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-10 w-max max-w-56 rounded-md px-3 py-2 text-sm opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100",
          positionClasses[position],
          variant === "light"
            ? "border border-gray-200 bg-white text-gray-900"
            : "bg-gray-900 text-white",
          className
        )}
      >
        {content}
      </span>
    </span>
  );
};

export { Tooltip };
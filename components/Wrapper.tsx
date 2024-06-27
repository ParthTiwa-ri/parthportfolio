import { cn } from "@/utils/cn";
import React from "react";

/**
 * Wrapper component that wraps its children in a div container.
 *
 * @param children - The content to be wrapped.
 * @param classnames - Optional CSS class names to be applied to the wrapper div.
 * @returns The wrapped content.
 */
export default function Wrapper({
  children,
  classnames,
}: {
  children: React.ReactNode;
  classnames?: string;
}) {
  return (
    <div
      className={cn(
        "md:min-h-[110vh] min-h-[130vh] flex items-center",
        classnames
      )}
    >
      {children}
    </div>
  );
}

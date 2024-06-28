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
  return <div className={cn("xl:py-28 py-16 ", classnames)}>{children}</div>;
}

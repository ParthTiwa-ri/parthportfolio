import { cn } from "@/utils/cn";
import React from "react";

export default function Wrapper({
  children,
  classnames,
}: {
  children: React.ReactNode;
  classnames?: string;
}) {
  return (
    <div
      className={cn("md:min-h-[110vh] min-h-[130vh] flex items-center", {
        classnames,
      })}
    >
      {children}
    </div>
  );
}

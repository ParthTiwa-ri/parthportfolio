import React from "react";

export default function TechSkillsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-16 h-16 shadow-xl justify-center flex items-center rounded-full bg-[#343237]">
      {children}
    </div>
  );
}

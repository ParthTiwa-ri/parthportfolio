import React from "react";

export default function TechSkillsContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-16 h-16 relative shadow-xl justify-center flex items-center rounded-full group bg-[#343237]">
      {children}
      <div className="absolute  px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-onbg/75 dark:bg-[#37343E]/90 dark:text-slate-100">
        {title}
        <svg
          className="absolute left-0 w-full h-2 dark:text-[#37343E]/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
}

{
  /* <div className="absolute  px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
Aman Tiwari
<svg
  className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
  x="0px"
  y="0px"
  viewBox="0 0 255 255"
  xmlSpace="preserve"
>
  <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
</svg>
</div> */
}

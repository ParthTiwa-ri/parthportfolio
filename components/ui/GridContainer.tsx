"use client";
import React from "react";
// import GridItemLast from "../GridItemLast";
import dynamic from "next/dynamic";
const GridItemLast = dynamic(() => import("../GridItemLast"), {
  ssr: false,
});

export default function GridContainer() {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <GridItemLast />
    </div>
  );
}

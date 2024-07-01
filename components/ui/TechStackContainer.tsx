"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";
import { Icon } from "@iconify/react";

export default function TechStackContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className="tile-icon"
      >
        <Icon
          icon={children as string}
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
        />
      </m.div>
    </LazyMotion>
  );
}

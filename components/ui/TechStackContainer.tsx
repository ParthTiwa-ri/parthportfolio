"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import React from "react";

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
        {children}
      </m.div>
    </LazyMotion>
  );
}

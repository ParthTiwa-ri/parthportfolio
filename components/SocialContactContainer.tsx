"use client";
import Link from "next/link";
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function SocialContactCOntainer({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.li initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
        <Link target="_blank" href={link}>
          {children}
        </Link>
      </m.li>
    </LazyMotion>
  );
}

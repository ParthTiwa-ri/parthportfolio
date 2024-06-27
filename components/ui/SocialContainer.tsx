"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function SocialContainer({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <motion.div
        whileHover={{ y: -5 }}
        className="w-16 h-16 rounded-lg dark:bg-[#252429] shadow-xl border flex justify-center items-center border-[rgba(255,255,255,1)"
      >
        {children}
      </motion.div>
    </Link>
  );
}

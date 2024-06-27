"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function SocialContactContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.li initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }}>
      <Link href="https://www.linkedin.com/in/parthtiwariii/">{children}</Link>
    </motion.li>
  );
}

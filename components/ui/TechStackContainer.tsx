"use client";
import { motion } from "framer-motion";
import React from "react";

export default function TechStackContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1 }}
      className="tile-icon"
    >
      {children}
    </motion.div>
  );
}

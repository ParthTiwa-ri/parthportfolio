"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { IoOpenOutline } from "react-icons/io5";

type ProjectCardsProps = {
  id: number;
  title: string;
  skills: string[];
  img: string;
  link: string;
  githubLink: string;
};

export default function ProjectCards({
  id,
  title,
  skills,
  img,
  link,
  githubLink,
}: ProjectCardsProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      key={id}
      className="rounded-md group/project  shadow-xl border border-white/[0.1] overflow-hidden"
    >
      <div className="xl:w-[300px] w-[300px]  h-[200px] ">
        <Link href={link}>
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </Link>
      </div>
      <div className="h-[74px] py-3 px-4 w-full bg-onBg">
        <div className="flex justify-between">
          <Link
            href={link}
            className="opacity-90 group-hover/project:text-[#37B5FF] transition  "
          >
            {title}
          </Link>
          <div className="flex gap-2 justify-center items-center">
            <Link href={githubLink}>
              <TbBrandGithub className="text-[20px] hover:text-[#37B5FF] transition" />
            </Link>

            <Link href={link}>
              <IoOpenOutline className="text-[20px]  hover:text-[#37B5FF] transition" />
            </Link>
          </div>
        </div>
        <div className="flex gap-2 text-[#bfc1dd] text-sm opacity-60 mt-2">
          {skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

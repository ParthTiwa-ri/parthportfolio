import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
export const experiencesData = [
  {
    title: "Education Experience",
    location: "Delhi University, India",
    description: [
      "Completed 12th with 94.5% science",
      "Graduated From Keshav Mahvidyalay with 8.75 CGPA",
      "Currently Pursuing MCA(SE) From USICT",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Front-End Developer",
    location: "Trifox, Delhi",
    description: [
      "I worked as a front-end developer for 2 months.",
      "I worked on React, TypeScript, and Tailwind CSS.",
      "I also upskilled to the full stack.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "House of couton, Lucknow",
    description: [
      "My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
      "Completed multiple client projects",
      "Worked on AI HIRE STUDIO with team",
      "I'm open to full-time opportunities.",
    ],
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
];

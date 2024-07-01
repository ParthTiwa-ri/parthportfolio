import React from "react";
import { Icon } from "@iconify/react";

interface TechStackItem {
  id: number;
  title: string;
  link: string;
  icon: string;
}

export const TechStackDetail: TechStackItem[] = [
  {
    id: 1,
    title: "NextJs",
    link: "",
    icon: "devicon:nextjs",
  },
  {
    id: 2,
    title: "React",
    link: "",
    icon: "vscode-icons:file-type-reactjs",
  },
  {
    id: 3,
    title: "Javascript",
    link: "",
    icon: "vscode-icons:file-type-js-official",
  },
  {
    id: 4,
    title: "Typescript",
    link: "",
    icon: "skill-icons:typescript",
  },
  {
    id: 5,
    title: "TailwindCSS",
    link: "",
    icon: "vscode-icons:file-type-tailwind",
  },
  {
    id: 6,
    title: "NodeJs",
    link: "",
    icon: "vscode-icons:file-type-node",
  },
  {
    id: 7,
    title: "ExpressJs",
    link: "",
    icon: "simple-icons:express",
  },
  {
    id: 8,
    title: "MongoDB",
    link: "",
    icon: "vscode-icons:file-type-mongo",
  },
  {
    id: 9,
    title: "PostgreSQL",
    link: "",
    icon: "logos:postgresql",
  },
  {
    id: 10,
    title: "Prisma",
    link: "",
    icon: "vscode-icons:file-type-prisma",
  },
  {
    id: 11,
    title: "Redux",
    link: "",
    icon: "devicon:redux",
  },
  {
    id: 12,
    title: "C++",
    link: "",
    icon: "vscode-icons:file-type-cpp3",
  },
];

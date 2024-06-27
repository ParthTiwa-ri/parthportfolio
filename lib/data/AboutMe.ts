import { socialsDetail } from "./Socials";
import { TechStackDetail } from "./TechStack";

export const aboutMe = [
  {
    id: 1,
    img: "/images/hero.jpeg",

    className: "xl:col-span-1 md:col-span-1 xl:row-span-6 row-start-2 ",

    socialIcons: socialsDetail,
  },
  {
    id: 2,
    title: "About Me",
    description:
      "I&apos; m Parth, a full-stack developer with a passion for frontend and problem-solving. Based in India, I specialize in NextJs, React, Node.js, and product design.",
    img: "/images/avtar.png",
    className: "xl:col-span-2 md:col-span-1 xl:row-span-3 row-start-1 ",
  },
  {
    id: 3,
    title: "Modern and Beautiful UI",
    description: "Create stunning, professional-quality websites",
    className: "xl:col-span-1 md:col-span-1 xl:row-span-6",

    img: "/svg/codesnippet.svg",
  },
  {
    id: 4,
    title: "My Tech Stack",
    className: "xl:col-span-2 md:col-span-1 xl:row-span-3",
    img: "",
    TechStackIcons: TechStackDetail,
  },

  {
    id: 5,
    className: "xl:col-span-2   md:col-span-1 xl:row-span-3",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "Copy my Email Address",
    img: "",
    className: "xl:col-span-2 md:col-span-1  xl:row-span-3",
  },
];

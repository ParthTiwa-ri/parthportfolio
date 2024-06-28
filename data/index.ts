import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "xl:col-span-1 md:col-span-1 xl:row-span-6 row-start-2 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My Go-To Tools and Technologies",
    description: "",
    className: "xl:col-span-2 md:col-span-1 xl:row-span-3 row-start-1 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "xl:col-span-1 md:col-span-1 xl:row-span-6",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "My Tech Stack",
    description: "",
    className: "xl:col-span-2 md:col-span-1 xl:row-span-3",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "xl:col-span-2   md:col-span-1 xl:row-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "xl:col-span-2 md:col-span-1  xl:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// export const gridItems = [
//   {
//     id: 1,
//     title: "I prioritize client collaboration, fostering open communication ",
//     description: "",
//     className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
//     imgClassName: "w-full h-full",
//     titleClassName: "justify-end",
//     img: "/b1.svg",
//     spareImg: "",
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 3,
//     title: "My tech stack",
//     description: "I constantly try to improve",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 4,
//     title: "Tech enthusiast with a passion for development.",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "/grid.svg",
//     spareImg: "/b4.svg",
//   },

//   {
//     id: 5,
//     title: "Currently building a JS Animation library",
//     description: "The Inside Scoop",
//     className: "md:col-span-3 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//   },
//   {
//     id: 6,
//     title: "Do you want to start a project together?",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "3D Solar System ",
    githubLink: "https://github.com",

    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    skills: ["ReactJs ", "NextJ"],

    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom ",
    githubLink: "https://github.com",

    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    skills: ["ReactJs ", "NextJ"],

    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS",
    githubLink: "https://github.com",

    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    skills: ["ReactJs ", "NextJ"],

    link: "https://ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone ",
    githubLink: "https://github.com",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    skills: ["ReactJs ", "NextJ"],

    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

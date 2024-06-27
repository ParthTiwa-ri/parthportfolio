import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export const projectsWorked = [
  {
    id: 1,
    title: "AI Hire Studio ",

    des: "It is a platform that hire personal using AI and recruting them using automated video testing process.",
    img: "/images/aihire.png",
    iconLists: [
      React.createElement(Icon, {
        icon: "vscode-icons:file-type-mongo",
        width: 40,
        height: 40,
      }),
      React.createElement(Icon, {
        icon: "simple-icons:express",
        width: 40,
        height: 40,
        style: { color: "white" },
      }),
      React.createElement(Icon, {
        icon: "logos:react",
        width: 40,
        height: 40,
        // style: { color: "white" },
      }),
      React.createElement(Icon, {
        icon: "logos:nodejs-icon",
        width: 40,
        height: 40,
        // style: { color: "white" },
      }),
    ],

    link: "https://aihirestudio.com/",
  },
  {
    id: 2,
    title: "BookUrbania ",

    des: "BookUrbania is a platform that provide tour packages solutions .",
    img: "/images/urbania.png",
    iconLists: [
      React.createElement(Icon, {
        icon: "ri:nextjs-fill",
        width: 50,
        height: 50,
        style: { color: "white" },
      }),
      React.createElement(Icon, {
        icon: "logos:typescript-icon-round",
        width: 40,
        height: 40,
      }),

      React.createElement(Icon, {
        icon: "vscode-icons:file-type-tailwind",
        height: 40,
        style: { color: "white" },
      }),
      React.createElement(Icon, {
        icon: "vscode-icons:file-type-prisma",
        width: 40,
        height: 40,
        // style: { color: "white" },
      }),
    ],

    link: "https://www.bookurbania.online/",
  },
];

// React.createElement(Icon, {
//   icon: "ri:nextjs-fill",
//   width: 50,
//   height: 50,
//   style: { color: "white" },
// }),

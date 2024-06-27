import React from "react";
import { Icon } from "@iconify/react";

export const contactMe = {
  heading: "Contact Me",
  description: [
    "I am always open to new opportunities and collaborations. Feel free to reach out to me for any queries, feedback or just to say hi!",
    "You can contact me through the form or connect via LinkedIn, Twitter, or GitHub. Let's collaborate and build something amazing together!",
  ],
  emailTitle: "Email me directly",
  email: "parthtiwari421@gmail.com",
  socials: [
    {
      id: 1,
      icon: React.createElement(Icon, {
        icon: "akar-icons:github-fill",
        style: { color: "white" },
        width: "28",
        height: "28",
      }),
      link: "https://github.com/ParthTiwa-ri",
    },
    {
      id: 2,
      icon: React.createElement(Icon, {
        icon: "akar-icons:linkedin-v1-fill",
        style: { color: "white" },
        width: "28",
        height: "28",
      }),
      link: "https://www.linkedin.com/in/parthtiwariii/",
    },
    {
      id: 3,
      icon: React.createElement(Icon, {
        icon: "ri:twitter-x-fill",
        style: { color: "white" },
        width: "28",
        height: "28",
      }),
      link: "https://x.com/ParthTi75000081",
    },
  ],
};

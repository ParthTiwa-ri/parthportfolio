import React from "react";

import { motion } from "framer-motion";

import { TbBrandGithub } from "react-icons/tb";
import { IoOpenOutline } from "react-icons/io5";
import Link from "next/link";
import Wrapper from "../Wrapper";
import { projects } from "@/lib/data/MyProjects";
import ProjectCards from "../ProjectCards";

export default function MyProjects() {
  return (
    <Wrapper>
      <div className="w-full">
        <section className="xl:-mb-52 relative z-50 max-w-[970px] mx-auto ">
          <p className="h1 pb-16">My Projects</p>
          <div className="grid xl:grid-cols-auto-300 grid-cols-auto-250  gap-y-6 gap-x-6 place-items-center ">
            {projects.map(({ id, title, skills, img, link, githubLink }) => (
              <ProjectCards
                key={id}
                id={id}
                title={title}
                skills={skills}
                img={img}
                link={link}
                githubLink={githubLink}
              />
            ))}
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lib/Lottie/techlottiefinal.json";

import Image from "next/image";

import TechSkillsContainer from "../ui/TechSkillsContainer";
import { TechSkillsDetail } from "@/lib/data/TechSkills";
import { skills } from "@/lib/data/Skills";
import Wrapper from "../Wrapper";

export default function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <div className="w-full ">
        <div className="w-full flex items-center   justify-center flex-col gap-y-8">
          <p className="h1"> {skills.heading}</p>
          {/* <p className=" text-lg font-light opacity-75">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p> */}
        </div>
        <div className="flex w-full mt-20 xl:flex-row flex-col  ">
          <div className="basis-1/2 flex flex-col items-center">
            <p className="text-3xl text-gray-300">{skills.title}</p>
            <div className="flex justify-center flex-wrap gap-2 mt-8 xl:mt-12 max-w-[450px]">
              {skills.SkillsIcons.map((icon) => (
                <TechSkillsContainer key={icon.id}>
                  {icon.icon}
                </TechSkillsContainer>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-y-3 xl:gap-y-4 items-center max-w-[550px]">
              {skills.description.map((desc) => (
                <p className="opacity-75 text-center" key={desc}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div className="basis-1/2 mt-8 md:mt-0">
            <Lottie options={defaultOptions} width={400} height={400} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

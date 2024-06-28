import React from "react";
import animationData from "../../lib/Lottie/techlottiefinal.json";
import TechSkillsContainer from "../ui/TechSkillsContainer";
import { skills } from "@/lib/data/Skills";
import Wrapper from "../Wrapper";

import dynamic from "next/dynamic";
const ShowLottie = dynamic(() => import("../ui/ShowLottie"), {
  ssr: false,
});

export default function Skills() {
  return (
    <Wrapper classnames="xl:mt-0 mt-28">
      <div className="w-full ">
        <div className="w-full flex items-center justify-center flex-col gap-y-8">
          <p className="h1"> {skills.heading}</p>
        </div>
        <div className="flex w-full mt-20 xl:flex-row flex-col  ">
          <div className="basis-1/2 flex flex-col items-center">
            <p className="text-3xl text-gray-300">{skills.title}</p>
            <div className="flex justify-center flex-wrap gap-2 mt-8 xl:mt-12 max-w-[450px]">
              {skills.SkillsIcons.map(({ id, icon, title }) => (
                <TechSkillsContainer key={id} title={title}>
                  {icon}
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
          <div className="basis-1/2 mt-8 md:mt-6 xl:mt-0">
            <ShowLottie path={animationData} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

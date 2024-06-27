"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData1 from "../lib/Lottie/modern.json";

export default function GridItemThird() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <div className="top-12 -left-8 absolute">
        <Lottie options={defaultOptions1} width={340} height={340} />
      </div>

      <div className="absolute xl:bottom-4 bottom-[350px] md:bottom-16 md:-left-40 xl:left-0  p-10 left-0 w-full h-56 flex flex-col items-center gap-3  justify-center text-center">
        <h2 className="text-[#030515] max-w-44 text-[23px] font-normal xl:font-normal  md:text-left xl:text-center text-center   ">
          Modern and Beautiful UI
        </h2>
        <p className="text-[#030515] font-extralight text-[16px] max-w-44 md:text-left xl:text-center text-center   ">
          Create stunning, professional-quality websites
        </p>
      </div>
    </div>
  );
}

import React from "react";
import MagicBand from "./MagicBand";
import Image from "next/image";
import { SparklesCore } from "./ui/Sparkle";

export default function LampGlow() {
  return (
    <>
      <div className=" flex flex-col items-center   xl:-mb-40 md:-mb-24 -mb-11  w-full  ">
        <div className="relative  ">
          <MagicBand />
          {/* //next Image width and height */}
          <img
            src="/images/light-glow.png"
            alt="lamp-glow"
            className=" scale-[1.9] xl:scale-100 md:scale-[1.65] md:mt-10 relative xl:-mt-6 mt-4 "
            width={980}
            height={980}
          ></img>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={0.9}
            speed={0.1}
            particleDensity={800}
            className="absolute  top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-3/4 xl:w-1/2  h-full"
            particleColor="#FFFFFF"
          />
          <div className=" absolute opacity-[99.9%] left-1/2 -translate-x-1/2   bg-[#111113] blur-2xl md:blur-3xl  top-24 md:top-44  h-48 md:h-[250px] pointer-events-none   w-[800px] "></div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { SparklesCore } from "../ui/Sparkle";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#000319] via-[#2C0368]  to-[#000319] min-h-screen relative -z-10   w-full">
      <div className="xl:max-w-[1200px] md:max-w-xl mx-auto max-w-[350px] pt-36">
        {/* <div className="absolute inset-0">
          <SparklesCore
            speed={0.01}
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.3}
            maxSize={0.6}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div> */}
      </div>
    </div>
  );
}

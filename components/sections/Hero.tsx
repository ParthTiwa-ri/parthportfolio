import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { SparklesCore } from "../ui/Sparkle";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#000319] via-[#2C0368]  to-[#000319] min-h-screen relative -z-10 blurred-bottom-border  w-full">
      <div className="xl:max-w-[1200px] md:max-w-xl mx-auto max-w-[350px] pt-36   ">
        <div className=" absolute inset-0">
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
        </div>

        {/* content */}
        <div className="flex justify-center relative my-20 z-10 ">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </h2> */}
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </h2>
            {/* <div className=" dark:text-white text-black  leading-snug tracking-wide">
              <p className="text-center font-bold my-4 text-[40px] md:text-5xl lg:text-6xl">
                Transforming Concepts into Seamless User Experiences
              </p>
            </div> */}
            <TextGenerateEffect
              // words="Transforming Concepts into Seamless User Experiences"
              words="  Hi! I'm Parth Tiwari, a Next.js Developer based in India."
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Parth Tiwari, a Next.js Developer based in India.
            </p>{" "}
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

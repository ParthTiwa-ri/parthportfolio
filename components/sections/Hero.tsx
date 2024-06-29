import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
const SparklesCore = dynamic(() => import("../ui/Sparkle"), {
  ssr: false,
});
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { slideUp } from "@/lib/animation";
import dynamic from "next/dynamic";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#000319] via-[#2C0368]  to-[#000319] min-h-screen relative z-20   w-full">
      <div className="galaxy-background " />

      <div className="xl:max-w-[1200px] md:max-w-xl mx-auto max-w-[350px] pt-28 md:pt-36 ">
        {/* pt-36 */}
        <div className="absolute inset-0">
          <SparklesCore
            speed={0.01}
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.5}
            maxSize={0.9}
            particleDensity={30}
            className="w-full  h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* content */}

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </h2>
            <div>
              <TextGenerateEffect
                words="Hi! I'm Parth Tiwari, Full Stack Developer based in India."
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />
            </div>
            <p className="text-center opacity-75 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I build things for the web using Next.js, Prisma, and Node.js.
            </p>
            <a
              href="https://drive.google.com/file/d/1KBoqDvIEprN9WlP1pJcd_DHXBCoLSiVS/view?usp=sharing"
              target="_blank"
              className="z-30  cursor-pointer"
            >
              <MagicButton
                title="Download Resume"
                icon={<MdOutlineFileDownload size={18} />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

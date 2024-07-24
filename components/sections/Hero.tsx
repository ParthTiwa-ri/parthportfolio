import { resumeLink } from "@/lib/data/Resume";
import MagicButton from "../ui/MagicButton";
const SparklesCore = dynamic(() => import("../ui/Sparkle"), {
  ssr: false,
});

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
            minSize={0.4}
            maxSize={1}
            particleDensity={25}
            className="w-full  h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* content */}

        <div className="flex animate-slide-up justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Interactive Web Wizardry with Next.js
            </h2>
            <div>
              <div
                className={
                  "font-bold text-center text-[40px] md:text-5xl lg:text-6xl "
                }
              >
                <div className="my-4">
                  <div className=" dark:text-white text-black  leading-snug tracking-wide">
                    Hi! I &apos;m{" "}
                    <span className="text-[#33B9FF]">Parth Tiwari</span>, Full
                    Stack Developer based in India.
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center opacity-75 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I build things for the web using Next.js, Prisma, and Node.js.
            </p>
            <a
              href={resumeLink}
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

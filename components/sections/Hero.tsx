import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { SparklesCore } from "../ui/Sparkle";

export default function Hero() {
  return (
    <div className="pb-20 pt-36 min-h-screen  relative z-30 ">
      <div className=" absolute left-0  top-0 w-full h-[450px]">
        <SparklesCore
          speed={0.01}
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.3}
          maxSize={0.9}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <p className="text-center text-[40px] md:text-5xl lg:text-6xl">
            Transforming Concepts into Seamless User Experiences
          </p>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Parth Tiwari, a Next.js Developer based in India.
          </p>
          <a href="#about"></a>
        </div>
      </div>
    </div>
  );
}

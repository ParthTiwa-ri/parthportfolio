"use client";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { SparklesCore } from "../ui/Sparkle";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animation";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#000319] via-[#2C0368]  to-[#000319] min-h-screen relative -z-10   w-full">
      <div className="xl:max-w-[1200px] md:max-w-xl mx-auto max-w-[350px] pt-36">
        <div className="absolute inset-0">
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
        <motion.div
          className="flex justify-center relative my-20 z-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <motion.h2
              className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
              variants={slideUp({ delay: 0.1 })}
            >
              Dynamic Web Magic with Next.js
            </motion.h2>
            <motion.div variants={slideUp({ delay: 0 })}>
              <TextGenerateEffect
                words="Hi! I'm Parth Tiwari, Full Stack Developer based in India."
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />
            </motion.div>
            <motion.p
              className="text-center opacity-75 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
              variants={slideUp({ delay: 0.5, opacityGiven: 0.7 })}
            >
              I build things for the web using Next.js, Prisma, and Node.js.
            </motion.p>
            {/* <motion.a href="#about" variants={slideUp({ delay: 0.7 })}>
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </motion.a> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

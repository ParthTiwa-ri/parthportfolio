import animationData from "../lib/Lottie/confetti.json";

import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import ShowLottie from "./ui/ShowLottie";

export default function GridItemLast() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "parthtiwari421@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mr-1 md:mr-4 p-8 relative">
      <div
        className={`absolute -bottom-5 pointer-events-none -right-10 md:right-10 ${
          copied ? "block" : "block"
        }`}
      >
        {/* <img src="/confetti.gif" alt="confetti" /> */}
        <Lottie options={defaultOptions} height={200} width={400} />
        {/* <ShowLottie
          path={animationData}
          auto={copied}
          className="w-[400px] h-[200px]"
        /> */}
      </div>
      <div className="flex gap-8 md:gap-0  items items-center justify-center flex-col ">
        <p className="font-semibold pointer-events-none md:text-3xl text-xl  md:max-w-96 text-center">
          Do you want to start a project together?
        </p>

        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]  z-0"
        />
      </div>
    </div>
  );
}

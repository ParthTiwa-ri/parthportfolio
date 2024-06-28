import animationData from "../lib/Lottie/celebrate.json";

import React, { useState, useEffect, useRef } from "react";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

import { Player } from "@lottiefiles/react-lottie-player";

export default function GridItemLast() {
  const [copied, setCopied] = useState(false);
  const playerRef = useRef<Player>(null);

  const handleCopy = () => {
    const text = "parthtiwari421@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied && playerRef.current) {
      playerRef.current.play();
    }
  }, [copied]);

  return (
    <div className="mr-1 md:mr-4 p-8 relative">
      <div
        className={`absolute -bottom-28 pointer-events-none -right-10 md:right-10 ${
          copied ? "block" : "block"
        }`}
      >
        <Player
          ref={playerRef}
          autoplay={false}
          className="w-[400px] h-[400px]"
          src={animationData}
        ></Player>
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

"use client";
import { cn } from "@/utils/cn";
import { Player } from "@lottiefiles/react-lottie-player";

type Props = {
  path: any;
  className?: string;
  auto?: boolean;
};

const ShowLottie = ({ path, className = "", auto = true }: Props) => {
  return (
    // <div className={` ${className}`}>
    <Player
      autoplay={auto}
      className={cn("w-[400px] h-[400px] ", className)}
      loop
      src={path}
    ></Player>
    // </div>
  );
};

export default ShowLottie;

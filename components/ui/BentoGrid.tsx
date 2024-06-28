import { cn } from "@/utils/cn";
import Image from "next/image";

import { BackgroundGradientAnimation } from "./GradientBg";

import { SocialsDetailType, TechStackDetailType } from "@/lib/types";
import SocialContainer from "./SocialContainer";
import TechStackContainer from "./TechStackContainer";
import GridItemThird from "../GridItemThird";
import dynamic from "next/dynamic";
const GridContainer = dynamic(() => import("./GridContainer"), {
  ssr: false,
});

type BentoItemProps = {
  id: number;
  className?: string;

  title?: string;
  description?: string;
  img: string;
  TechStackIcons?: TechStackDetailType;
  SocialIcons?: SocialsDetailType;
};
type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid xl:grid-rows-12 xl:h-[1200px]  grid-cols-1 xl:grid-cols-4 gap-4 md:gap-7  ",

        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  TechStackIcons,
  SocialIcons,
  id,
}: BentoItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 md:p-10 rounded-3xl   md:min-h-0 xl:min-h-0  relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#1D1C20] border border-[rgba(255,255,255,0.09)] justify-between flex flex-col space-y-4",
        {
          "border-none xl:p-0  overflow-hidden bg-custom-gradient": id === 3,
          "xl:p-0  flex justify-center items-center ": id === 6,
          "xl:p-0 md:p-0 p-0 dark:bg-transparent  border-none ":
            id === 5 || id === 1,
          "min-h-[570px] md:min-h-0 ": id == 1,
          "hidden xl:block": id == 3,

          // "xl:p-0 dark:bg-transparent border-none": id === 1,
        },
        className
      )}
    >
      {id === 1 && (
        <div className="xl:flex-col flex-col flex w-full h-full gap-4 xl:gap-7 ">
          <div className="basis-1/2 rounded-3xl md:hidden xl:block relative dark:bg-[#1D1C20] border border-[rgba(255,255,255,0.09)] overflow-hidden">
            <Image
              src={img}
              alt="HeroImage"
              width={280}
              height={280}
              className=" absolute hidden md:block  rounded-3xl inset-0 md:object-cover md:object-center object-top"
            />
            {/* <Image
              src="/images/parthsm.jpeg"
              alt="icon"
              width={380}
              height={380}
              className="md:hidden absolute  rounded-3xl inset-0 md:object-cover md:object-center object-top"
            /> */}
          </div>
          <div className="basis-1/2  rounded-3xl p-4  pt-6 xl:pt-4 xl:flex xl:items-center xl:justify-center  dark:bg-[#1D1C20] border border-[rgba(255,255,255,0.09)]">
            <div className="grid place-items-center grid-cols-3 gap-4">
              {SocialIcons?.map(({ id, icon, link }) => (
                <SocialContainer link={link} key={id}>
                  {icon}
                </SocialContainer>
              ))}
            </div>
          </div>
        </div>
      )}
      {id === 2 && (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <p className="xl:text-5xl text-4xl text-[#8366DA]">About Me</p>
            <Image
              src={img}
              alt="icon"
              width={120}
              height={120}
              className="-mt-8 -ml-4"
            />
          </div>
          <p className="leading-[26px] font-silka md:tracking-[0.5px]  text-[#F8F0F2] text-[15px] ">
            I&apos; m{" "}
            <span className="text-xl font-mongo text-[#34B8FF]  font-normal !text-[24px] md:!text-[30px]  ; ">
              Parth
            </span>
            , a full-stack developer with a passion for frontend and
            problem-solving. Based in India, I specialize in NextJs, React,
            Node.js, and product design.
          </p>
        </div>
      )}
      {id === 2 && (
        <div>
          <div className="w-full h-full overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
        </div>
      )}
      {id === 3 && <GridItemThird />}

      {id === 4 && <div className={cn("font-semibold text-xl")}>{title}</div>}

      {id === 4 && (
        <div className="grid  grid-cols-4   md:grid-cols-6 gap-3 mt-6">
          {TechStackIcons?.map((icon) => (
            <TechStackContainer key={icon.id}>{icon.icon}</TechStackContainer>
          ))}
        </div>
      )}
      {/* //spotify */}
      {id === 5 && (
        <div className="relative">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/384pA1WJO9B09gUcuIL2XP?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}

      {id === 6 && (
        // add background animation , remove the p tag
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
      )}
      {/* {id === 6 && <GridItemLast />} */}
      {id === 6 && <GridContainer />}
    </div>
  );
};

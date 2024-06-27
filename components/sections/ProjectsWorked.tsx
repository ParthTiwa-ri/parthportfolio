"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "../ui/Pin";
import Link from "next/link";
import { projectsWorked } from "@/lib/data/ProjectWorkedOn";
import Wrapper from "../Wrapper";
import Image from "next/image";

const ProjectWorkedOn = () => {
  return (
    <Wrapper>
      <div className="">
        <h1 className="heading">
          <span className="text-[#36B6FF]">Projects</span> I &apos;ve Worked on{" "}
        </h1>
        <div className="flex flex-wrap items-center  justify-center  p-4 gap-x-24 gap-y-8 mt-10">
          {projectsWorked.map((item) => (
            <div
              className=" md:h-[41rem] h-[26rem] md:min-h-[26rem]   flex items-center justify-center md:w-[500px] w-[60vw]"
              key={item.id}
            >
              <PinContainer title="Visit" href="https://google.com">
                <Link
                  target="_blank"
                  href={item.link}
                  className="relative flex items-center justify-center sm:w-[500px] w-[70vw] sm:h-[40vh]  overflow-hidden h-[20vh]  mb-10"
                >
                  {/* <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/images/bg.png" alt="bgimg" />
                  </div> */}
                  <Image
                    width={500}
                    height={200}
                    src={item.img}
                    alt="cover"
                    className="z-10 w-full h-full object-contain xl:rounded-lg"
                  />
                </Link>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] p-1 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <Link
                      target="_blank"
                      href={item.link}
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      Check Live Site
                    </Link>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectWorkedOn;

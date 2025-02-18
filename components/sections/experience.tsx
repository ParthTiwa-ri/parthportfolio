"use client";

import { experiencesData } from "@/lib/data/experience";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Wrapper from "../Wrapper";
import { RiArrowRightSFill } from "react-icons/ri";

export default function Experience() {
  return (
    <Wrapper classnames="">
      <section id="experience" className="pt-4">
        <p className="h1 pb-20">My Experience</p>
        <VerticalTimeline lineColor="" animate={false}>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",

                  animation: "fadeIn 0.5s",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "#343237",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal text-xs opacity-95 !mt-0">
                  {item.location}
                </p>
                <ul className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description.map((desc, index) => (
                    <li key={index} className="">
                      <RiArrowRightSFill className="text-2xl inline-block -ml-2 text-white-500" />
                      {desc}
                    </li>
                  ))}
                  {/* {item.description} */}
                </ul>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </Wrapper>
  );
}

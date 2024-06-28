"use client";

import React from "react";

import { LazyMotion, m, domAnimation } from "framer-motion";

import { sendEmail } from "@/actions/sendEmail";

import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function ContactForm() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        id="contact"
        className=" relative z-50  w-[min(100%,38rem)] mx-auto text-center"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        viewport={{
          once: true,
        }}
      >
        <form
          className=" flex flex-col"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-12 px-4 rounded-lg borderBlack dark:bg-[#404040]  dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Email"
          />
          <textarea
            className="h-28 my-3 rounded-lg borderBlack p-4 dark:bg-[#404040] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </m.section>
    </LazyMotion>
  );
}

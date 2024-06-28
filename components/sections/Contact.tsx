import React from "react";
import ContactForm from "../ui/contactForm";
import { contactMe } from "@/lib/data/ContactMe";
import SocialContactContainer from "../SocialContactContainer";
import Wrapper from "../Wrapper";

export default function Contact() {
  return (
    // <div className="xl:min-h-[100vh] min-h-[130vh] flex items-center">
    <Wrapper classnames="xl:mb-16">
      <section id="contact" className="relative z-10">
        <p className="h1 pb-20">{contactMe.heading}</p>
        <div className="flex xl:flex-row xl:gap-0 gap-20 flex-col w-full">
          <div className="basis-1/2 flex items-center flex-col justify-center">
            {contactMe.description.map((item, index) => (
              <p key={index} className="text-lg  opacity-75">
                {item}
              </p>
            ))}
            <div className="flex w-[80%] flex-col md:flex-row md:gap-0 gap-6 justify-self-start self-start mt-8">
              <div className="basis-1/2 flex items-center">
                <ul className="flex gap-4">
                  {contactMe.socials.map(({ id, icon, link }, index) => (
                    <SocialContactContainer key={id} link={link}>
                      {icon}
                    </SocialContactContainer>
                  ))}
                </ul>
              </div>
              <div className="basis-1/2">
                <p className="font-bold text-md text-white/80 uppercase">
                  Email me directly
                </p>
                <p className="opacity-80">parthtiwari421@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="basis-1/2 xl:mx-auto">
            <div className="xl:max-w-[388px] mx-auto">
              <p className="text-white text-xl font-silka">Say hi!</p>
              <p className="opacity-60 mb-4">I&apos;ll try to reply asap ⚡️</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

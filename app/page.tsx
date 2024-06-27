import dynamic from "next/dynamic";

import LampGlow from "@/components/LampGlow";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import RecentProjects from "@/components/sections/ProjectsWorked";
const ProjectWorkedOn = dynamic(
  () => import("@/components/sections/ProjectsWorked")
);
const Skills = dynamic(() => import("@/components/sections/Skills"));
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="relative  flex justify-center  flex-col overflow-hidden items-center ">
      <div className="galaxy-background" />
      <Hero />
      <div className="xl:max-w-[1200px] md:max-w-xl max-w-[350px] ">
        <LampGlow />
        <AboutMe />
        <Skills />
        <Experience />
        <ProjectWorkedOn />
        <MyProjects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
// bg-[#161618]

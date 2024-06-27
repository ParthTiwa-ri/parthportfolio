import LampGlow from "@/components/LampGlow";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import RecentProjects from "@/components/sections/ProjectsWorked";
import ProjectWorkedOn from "@/components/sections/ProjectsWorked";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="relative bg-[#161618] flex justify-center  flex-col overflow-hidden items-center md:px-10 px-5">
      <div className="galaxy-background" />

      <div className="xl:max-w-[1200px] md:max-w-xl max-w-[350px] ">
        <Hero />
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

import LampGlow from "@/components/LampGlow";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import MyProjects from "@/components/sections/MyProjects";
import Experience from "@/components/sections/experience";
import Gap from "@/components/Gap";
import ProjectWorkedOn from "@/components/sections/ProjectsWorked";
import Skills from "@/components/sections/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/lib/data/navitems";

export default function Home() {
  return (
    <main className="relative  flex justify-center  flex-col overflow-hidden items-center ">
      <div className="galaxy-background -z-10" />
      <Hero />
      <Gap />
      <FloatingNav navItems={navItems} />

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

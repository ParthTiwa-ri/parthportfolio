import { aboutMe } from "@/lib/data/AboutMe";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

const AboutMe = () => {
  return (
    <section id="about" className="z-30  xl:-mb-60 relative">
      <BentoGrid>
        {aboutMe.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img || ""}
            SocialIcons={item.socialIcons}
            TechStackIcons={item.TechStackIcons}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default AboutMe;

// className="bg-[#131325]"
// bg-gradient-to-b from-[#000319] to-[#2C0368]
// bg-gradient-to-b from-[#000319] via-[#2C0368] to-[#000319]
//

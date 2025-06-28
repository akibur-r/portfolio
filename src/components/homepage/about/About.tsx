import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import bio from "@/assets/docs/bio.json";

const About = () => {
  return (
    <section className="text-sm text-neutral-700 dark:text-neutral-300">
      <SectionHeading name="About Me" />
      <main>{bio.about_me_brief}</main>
    </section>
  );
};

export default About;

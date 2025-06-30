import bio from "@/assets/docs/bio.json";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";

const About = () => {
  return (
    <section className="text-sm text-neutral-700 dark:text-neutral-300">
      <SectionHeading name="About Me" />
      <main className="space-y-1.5">
        {bio.about_me_brief.map((para) => (
          <p>{para}</p>
        ))}
      </main>
    </section>
  );
};

export default About;

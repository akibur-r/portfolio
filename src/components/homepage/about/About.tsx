import bio from "@/assets/docs/bio.json";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import useLanguage from "@/hooks/useLanguage/useLanguage";

const About = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section className="text-sm text-neutral-700 dark:text-neutral-300">
      <SectionHeading name_en="About Me" name_bn="আমার সম্পর্কে" />
      <main className="space-y-1.5">
        {currentLanguage === "en"
          ? bio.about_me_brief_en.map((para) => <p>{para}</p>)
          : bio.about_me_brief_bn.map((para) => <p>{para}</p>)}
      </main>
    </section>
  );
};

export default About;

import { education } from "@/assets/docs/educationList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import EducationCard from "./educationCard/EducationCard";

const Education = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section>
      <SectionHeading name_en="Education" name_bn="পড়াশোনা" />
      <main className="space-y-2">
        {currentLanguage === "en"
          ? education.en.map((educationLevel) => (
              <EducationCard
                key={educationLevel.title}
                educationLevel={educationLevel}
              />
            ))
          : education.bn.map((educationLevel) => (
              <EducationCard
                key={educationLevel.title}
                educationLevel={educationLevel}
              />
            ))}
      </main>
    </section>
  );
};

export default Education;

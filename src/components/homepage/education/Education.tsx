import { education } from "@/assets/docs/educationList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import EducationCard from "./educationCard/EducationCard";

const Education = () => {
  return (
    <section>
      <SectionHeading name="Education" />
      <main className="space-y-2">
        {education.map((educationLevel) => (
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

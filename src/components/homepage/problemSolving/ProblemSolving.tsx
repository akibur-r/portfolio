// import CodeforcesLogo from "@/assets/images/codeforces_logo.png";
import { problemSolvingAchievements } from "@/assets/docs/problemSolvingAchievements";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useLanguage from "@/hooks/useLanguage/useLanguage";

const ProblemSolving = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section className="relative">
      <SectionHeading name_en="Problem Solving" name_bn="প্রবলেম সলভিং" />
      <main>
        <Accordion type="single" collapsible>
          {currentLanguage === "en"
            ? problemSolvingAchievements.en.map(
                ({ title, date, description, host }) => (
                  <AccordionItem value={title}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <div>
                        <p className="text-xs">{date}</p>
                        <p>Host: {host}</p>
                      </div>
                      <p>{description}</p>
                    </AccordionContent>
                  </AccordionItem>
                )
              )
            : problemSolvingAchievements.bn.map(
                ({ title, date, description, host }) => (
                  <AccordionItem value={title}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <div>
                        <p className="text-xs">{date}</p>
                        <p>আয়োজক: {host}</p>
                      </div>
                      <p>{description}</p>
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
        </Accordion>
      </main>
    </section>
  );
};

export default ProblemSolving;

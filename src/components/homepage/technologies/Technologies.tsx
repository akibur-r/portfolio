import { technologies } from "@/assets/docs/technologyList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechnologyBadge from "./technologyBadge/TechnologyBadge";

const Technologies = () => {
  return (
    <section className="text-neutral-800 dark:text-neutral-300">
      <SectionHeading name="Technologies" />
      <main>
        <Tabs defaultValue="languages">
          <TabsList className="">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">backend</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          <TabsContent
            value="languages"
            className="flex flex-wrap gap-4 items-center "
          >
            {technologies.languages.map((language) => (
              <TechnologyBadge technology={language} />
            ))}
          </TabsContent>

          <TabsContent
            value="frontend"
            className="flex flex-wrap gap-4 items-center "
          >
            {technologies.frontend.map((language) => (
              <TechnologyBadge technology={language} />
            ))}
          </TabsContent>
          <TabsContent
            value="backend"
            className="flex flex-wrap gap-4 items-center "
          >
            {technologies.backend.map((language) => (
              <TechnologyBadge technology={language} />
            ))}
          </TabsContent>
          <TabsContent
            value="all"
            className="flex flex-wrap gap-4 items-center "
          >
            {technologies.languages.map((language) => (
              <TechnologyBadge technology={language} />
            ))}
            {technologies.frontend.map((language) => (
              <TechnologyBadge technology={language} />
            ))}
            {technologies.backend.map((language) => (
              <TechnologyBadge technology={language} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </section>
  );
};

export default Technologies;

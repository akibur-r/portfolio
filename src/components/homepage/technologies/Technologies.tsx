import { technologies } from "@/assets/docs/technologyList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TechnologyCategoryType } from "@/types/technology/TechnologyType";
import { useEffect, useRef, useState } from "react";
import TechnologyBadge from "./technologyBadge/TechnologyBadge";

const Technologies = () => {
  const categories: TechnologyCategoryType[] = [
    "languages",
    "frontend",
    "backend",
    "tools",
  ];
  const [activeTab, setActiveTab] = useState("languages");
  const containerRef = useRef<HTMLElement>(null);

  const allTech = categories.flatMap((cat) =>
    technologies[cat].map((tech) => ({
      ...tech,
      category: cat,
    }))
  );

  const filteredTech =
    activeTab === "all"
      ? allTech
      : allTech.filter((tech) => tech.category === activeTab);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isPartiallyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isPartiallyInView) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollToPosition = scrollTop + rect.bottom;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <section ref={containerRef}>
      <SectionHeading name="Technologies" />
      <main>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </TabsTrigger>
            ))}
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          <TabsContent
            value={activeTab}
            className="grid grid-cols-4 md:grid-cols-5 gap-2 text-center"
          >
            {filteredTech.map((tech) => (
              <TechnologyBadge key={tech.name} technology={tech} />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </section>
  );
};

export default Technologies;

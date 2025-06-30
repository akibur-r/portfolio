import { technologies } from "@/assets/docs/technologyList";
import SectionHeading from "@/components/shared/sectionHeading/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import type { TechnologyCategoryType } from "@/types/technology/TechnologyType";
import { useEffect, useRef, useState } from "react";
import TechnologyBadge from "./technologyBadge/TechnologyBadge";

const Technologies = () => {
  const { currentLanguage } = useLanguage();
  const categories: TechnologyCategoryType[] = [
    "languages",
    "frontend",
    "backend",
    "tools",
  ];

  const categories_bn = [
    "প্রোগ্রামিং ভাষা",
    "ফ্রন্ট এন্ড",
    "ব্যাক এন্ড",
    "টুলস",
  ];

  const [activeTab, setActiveTab] = useState("languages");
  const [tabChanged, setTabChanged] = useState(false);
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

    const sectionBottom = element.offsetTop + element.offsetHeight;

    if (tabChanged) {
      if (window.scrollY + window.innerHeight < sectionBottom) {
        window.scrollTo({
          top: sectionBottom - window.innerHeight + 10,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab, tabChanged]);

  return (
    <section ref={containerRef}>
      <SectionHeading name_en="Technologies" name_bn="জানা প্রযুক্তি" />
      <main>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList onClick={() => setTabChanged(true)}>
            {categories.map((cat, idx) => (
              <TabsTrigger key={cat} value={cat}>
                {currentLanguage === "en"
                  ? cat.charAt(0).toUpperCase() + cat.slice(1)
                  : categories_bn[idx]}
              </TabsTrigger>
            ))}
            <TabsTrigger value="all">
              {currentLanguage === "en" ? "All" : "সব"}
            </TabsTrigger>
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

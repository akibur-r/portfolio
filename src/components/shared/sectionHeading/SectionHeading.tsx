import useLanguage from "@/hooks/useLanguage/useLanguage";
import React from "react";
type SectionHeadingProps = {
  name_en: string;
  name_bn?: string;
};
const SectionHeading: React.FC<SectionHeadingProps> = ({
  name_en,
  name_bn,
}) => {
  const { currentLanguage } = useLanguage();
  return (
    <header className="group w-fit mb-2 text-neutral-800 dark:text-neutral-200 text-xl font-medium flex gap-2 items-center justify-start -translate-x-3">
      <span className="invisible group-hover:visible translate-x-3 group-hover:translate-x-0.5 transition-all duration-200 text-sm font-basic select-none ">
        {"{"}
      </span>

      <span className="cursor-pointer select-text group-hover:text-accent">
        {currentLanguage === "en" ? name_en : name_bn ? name_bn : name_en}
      </span>

      <span className="invisible group-hover:visible -translate-x-3 group-hover:translate-x-0 transition-all duration-200 text-sm font-basic select-none ">
        {"}"}
      </span>
    </header>
  );
};

export default SectionHeading;

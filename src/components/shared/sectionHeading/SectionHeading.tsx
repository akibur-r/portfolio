import React from "react";
type SectionHeadingProps = {
  name: string;
};
const SectionHeading: React.FC<SectionHeadingProps> = ({ name }) => {
  return (
    <header className="group w-fit mb-2 text-neutral-800 dark:text-neutral-200 text-xl font-medium flex gap-2 items-center justify-start -translate-x-3">
      <span className="invisible group-hover:visible translate-x-3 group-hover:translate-x-0.5 transition-all duration-200 text-sm font-basic select-none text-accent">
        {"{"}
      </span>

      <span className="cursor-pointer select-text">{name}</span>

      <span className="invisible group-hover:visible -translate-x-3 group-hover:translate-x-0 transition-all duration-200 text-sm font-basic select-none text-accent">
        {"}"}
      </span>
    </header>
  );
};

export default SectionHeading;

import type { technologies } from "@/assets/docs/technologyList";
import type { JSX } from "react";

export type TechnologyType = {
  name: string;
  icon: JSX.Element;
};

export type TechnologyCategoryType = keyof typeof technologies;

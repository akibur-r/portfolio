import { icons } from "@/assets/docs/icons";

type IconKey = keyof typeof icons;

export const getIcon = (name: string) => {
  return icons[name as IconKey] || icons.default;
};

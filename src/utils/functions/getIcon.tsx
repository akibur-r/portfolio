import { icons } from "@/assets/docs/icons";

type IconKey = keyof typeof icons;

export const getIcon = (name: string) => {
  console.log(icons[name as IconKey] || icons.default);
  return icons[name as IconKey] || icons.default;
};

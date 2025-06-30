import type { TechnologyType } from "@/types/technology/TechnologyType";

type TechnologyBadgeProps = {
  technology: TechnologyType;
};
const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ technology }) => {
  return (
    <div
      className="flex flex-col justify-center gap-1 items-center p-2 text-sm bg-neutral-200/50 border border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-900 rounded"
      title={technology.name}
    >
      {technology.icon} <p className="break-all">{technology.name}</p>
    </div>
  );
};

export default TechnologyBadge;

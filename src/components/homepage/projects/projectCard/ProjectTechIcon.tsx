import SkillNames from "@/assets/docs/skillNames.json";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getIcon } from "@/utils/functions/getIcon";
import type React from "react";
import { useState } from "react";

type ProjectTechIconProps = {
  icon: string;
};

const ProjectTechIcon: React.FC<ProjectTechIconProps> = ({
  icon: iconName,
}) => {
  const iconData = getIcon(iconName);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const {
    icon,
    classes: { ghost: className },
  } = iconData;

  return (
    <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
      <TooltipTrigger asChild>
        <Badge
          variant={"outline"}
          className={`h-6 md:h-8 aspect-video rounded-xs ${className}`}
          onClick={() => setTooltipOpen(true)}
        >
          {icon}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        {SkillNames[iconName as keyof typeof SkillNames]}
      </TooltipContent>
    </Tooltip>
  );
};

export default ProjectTechIcon;

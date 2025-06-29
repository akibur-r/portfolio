import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const RickRoll = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={"accentGhost"}
          size={"topNavIcon"}
          onClick={() => {
            window.open(
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              "_blank"
            );
          }}
          className="p-1 text-neutral-700 dark:text-neutral-300"
        >
          <Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Very Serious Button</TooltipContent>
    </Tooltip>
  );
};

export default RickRoll;

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import { Info } from "lucide-react";

const RickRoll = () => {
  const { currentLanguage } = useLanguage();
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
      <TooltipContent>
        {currentLanguage === "en" ? "Very Serious Button" : "সিরিয়াস বাটন"}
      </TooltipContent>
    </Tooltip>
  );
};

export default RickRoll;

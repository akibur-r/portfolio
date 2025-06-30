import BangladeshFlag from "@/assets/vectors/bangladesh_flag.svg";
import UKFlag from "@/assets/vectors/uk_flag.svg";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useLanguage from "@/hooks/useLanguage/useLanguage";

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size={"topNavIcon"}
          variant={"accentGhost"}
          onClick={() => toggleLanguage()}
          className="overflow-hidden flex p-1 cursor-pointer transition rounded group"
        >
          <img
            className="h-full w-full object-cover rounded-full group-hover:opacity-80"
            src={currentLanguage === "en" ? UKFlag : BangladeshFlag}
            alt={currentLanguage}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        {currentLanguage === "en" ? "Switch Language" : "ভাষা বদলান"}
      </TooltipContent>
    </Tooltip>
  );
};

export default LanguageToggle;

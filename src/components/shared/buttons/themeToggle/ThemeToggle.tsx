import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { currentLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="accentGhost"
          size="topNavIcon"
          onClick={toggleTheme}
          className=" cursor-pointer rounded"
        >
          {theme === "dark" ? (
            <Moon className="transition-all " />
          ) : (
            <Sun className="transition-all " />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {currentLanguage === "en"
          ? theme === "light"
            ? "Dark Mode"
            : "Light Mode"
          : theme === "light"
          ? "ডার্ক মুড"
          : "লাইট মুড"}
      </TooltipContent>
    </Tooltip>
  );
}

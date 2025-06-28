import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
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
          className=" cursor-pointer rounded "
        >
          {theme === "dark" ? (
            <Sun className="transition-all " />
          ) : (
            <Moon className="transition-all " />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Switch Theme</TooltipContent>
    </Tooltip>
  );
}

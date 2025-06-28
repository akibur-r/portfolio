import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="accentGhost"
      size="icon"
      onClick={toggleTheme}
      className="group  cursor-pointer rounded-full"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all " />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all " />
      )}
    </Button>
  );
}

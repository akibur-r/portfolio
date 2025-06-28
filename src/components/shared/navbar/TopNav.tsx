import LanguageToggle from "../buttons/languageToggle/LanguageToggle";
import RickRoll from "../buttons/rickRoll/RickRoll";
import { ThemeToggle } from "../buttons/themeToggle/ThemeToggle";

const TopNav = () => {
  return (
    <div className="flex gap-1 py-1 items-center sm:justify-end">
      <RickRoll />
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
};

export default TopNav;

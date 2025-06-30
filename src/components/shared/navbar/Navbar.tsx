import logo from "@/assets/images/logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { LayoutGrid, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import LanguageToggle from "../buttons/languageToggle/LanguageToggle";
import RickRoll from "../buttons/rickRoll/RickRoll";
import { ThemeToggle } from "../buttons/themeToggle/ThemeToggle";

const Navbar = () => {
  const { currentLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="py-1 sticky top-0 z-50 bg-background hidden sm:block">
        <div className="flex items-center px-2 justify-between">
          {/* left */}
          <div className="w-fit flex gap-2">
            <img src={logo} alt="A." className="h-6 w-6" />
            <div className="hidden md:flex gap-2 text-sm text-neutral-700 dark:text-neutral-300 align-bottom">
              <NavLink to={"/"} className={"flex items-end hover:underline"}>
                {currentLanguage === "en" ? "About" : "আমার সম্পর্কে"}
              </NavLink>
              <NavLink
                to={"/blogs"}
                className={"flex items-end hover:underline"}
              >
                {currentLanguage === "en" ? "Blog" : "ব্লগ"}
              </NavLink>
            </div>
          </div>

          {/* right */}
          <div className="hidden md:flex items-center gap-2">
            <RickRoll />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        <Separator />
      </header>

      <header className="fixed lg:hidden bottom-16 right-16 z-50">
        <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DropdownMenuTrigger className="bg-background ring-2 ring-neutral-400 dark:ring-neutral-600 p-2 rounded">
            {mobileMenuOpen ? <X /> : <LayoutGrid />}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:border-accent/10 flex flex-col rounded min-w-0">
            <DropdownMenuItem className="p-0" asChild>
              <div className="flex gap-1 py-1">
                <RickRoll />
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </DropdownMenuItem>

            <Separator />

            <DropdownMenuItem className="p-0" asChild>
              <Link
                to={"/blogs"}
                className={`text-neutral-800 px-2 py-1 dark:text-neutral-200 hover:text-accent dark:hover:text-accent rounded-xs`}
              >
                {currentLanguage === "en" ? "Blog" : "ব্লগ"}
              </Link>
            </DropdownMenuItem>

            <Separator />

            <DropdownMenuItem className="p-0" asChild>
              <Link
                to={"/"}
                className={`text-neutral-800 px-2 py-1 dark:text-neutral-200 hover:text-accent dark:hover:text-accent rounded-xs`}
              >
                {currentLanguage === "en" ? "About Me" : "আমার সম্পর্কে"}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default Navbar;

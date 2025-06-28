import { ThemeToggle } from "@/components/shared/buttons/themeToggle/ThemeToggle";

import React from "react";
import LanguageToggle from "../buttons/languageToggle/LanguageToggle";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={`flex gap-2 ${className}`}>
      <ThemeToggle />
      <LanguageToggle/>
    </header>
  );
};

export default Navbar;

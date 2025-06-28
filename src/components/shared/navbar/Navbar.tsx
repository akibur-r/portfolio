import useLanguage from "@/hooks/useLanguage/useLanguage";
import React from "react";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { currentLanguage } = useLanguage();
  return (
    <header className={`${className}`}>
      <ThemeToggle />
      {currentLanguage}
    </header>
  );
};

export default Navbar;

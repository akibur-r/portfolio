import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import logo from "@/assets/images/logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Bubbles, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import LanguageToggle from "../buttons/languageToggle/LanguageToggle";
import RickRoll from "../buttons/rickRoll/RickRoll";
import { ThemeToggle } from "../buttons/themeToggle/ThemeToggle";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="py-1 sticky top-0 z-50 bg-background hidden md:block">
        <div className="flex items-center px-2 justify-between">
          {/* left */}
          <div className="w-fit flex gap-2">
            <img src={logo} alt="A." className="h-6 w-6" />
            <div className="hidden md:flex gap-2 text-sm text-neutral-700 dark:text-neutral-300 align-bottom">
              <NavLink to={"/"} className={"flex items-end hover:underline"}>
                Home
              </NavLink>
              <NavLink
                to={"/blogs"}
                className={"flex items-end hover:underline"}
              >
                Blog
              </NavLink>
            </div>
          </div>

          {/* right */}
          <div className="hidden md:flex items-center gap-2">
            <RickRoll />
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Drawer
              open={drawerOpen}
              onOpenChange={setDrawerOpen}
              direction="left"
            >
              <DrawerTrigger>
                <Menu className="text-neutral-700 dark:text-neutral-400" />
              </DrawerTrigger>
              <DrawerContent className="bg-background">
                <DrawerHeader className="text-right text-neutral-800 dark:text-neutral-300">
                  <div className="w-fit flex gap-1 justify-center items-end">
                    <img src={logo} alt="A." className="h-8 w-8 opacity-70" />
                    <span className="text-lg">akibur_r</span>
                  </div>
                  <div
                    className="grid mt-4"
                    onClick={() => {
                      setDrawerOpen(false);
                    }}
                  >
                    <NavLink
                      to={"/"}
                      className={"py-2 flex items-end hover:underline"}
                    >
                      Home
                    </NavLink>
                    <Separator />
                    <NavLink
                      to={"/blog"}
                      className={"py-2 flex items-end hover:underline"}
                    >
                      Blog
                    </NavLink>
                  </div>
                </DrawerHeader>
                <DrawerFooter>
                  <Separator />

                  <div className="flex flex-row justify-end gap-2 items-center">
                    <span onClick={() => setDrawerOpen(false)}>
                      <RickRoll />
                    </span>
                    <span onClick={() => setDrawerOpen(false)}>
                      <LanguageToggle />
                    </span>
                    <span onClick={() => setDrawerOpen(false)}>
                      <ThemeToggle />
                    </span>
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <Separator />
      </header>

      <header className="fixed md:hidden bottom-8 right-8 z-50">
        <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DropdownMenuTrigger className="bg-background ring-2 ring-neutral-600 p-1 rounded">
            {mobileMenuOpen ? <X /> : <Bubbles />}
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
                className={`text-neutral-800 px-2  dark:text-neutral-200 hover:text-accent dark:hover:text-accent rounded-xs`}
              >
                Blog
              </Link>
            </DropdownMenuItem>

            <Separator />

            <DropdownMenuItem className="p-0" asChild>
              <Link
                to={"/"}
                className={`text-neutral-800 px-2 py-1 dark:text-neutral-200 hover:text-accent dark:hover:text-accent rounded-xs`}
              >
                About
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default Navbar;

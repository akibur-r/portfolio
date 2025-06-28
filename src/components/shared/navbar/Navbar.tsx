import LanguageToggle from "@/components/shared/buttons/languageToggle/LanguageToggle";
import { ThemeToggle } from "@/components/shared/buttons/themeToggle/ThemeToggle";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

import AkibPortrait from "@/assets/images/akib_portrait.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleCopyEmail } from "@/utils/functions/handleCopyEmail";
import { handleCopyPhoneNumber } from "@/utils/functions/handleCopyPhoneNumber";
import {
  Copy,
  Github,
  Linkedin,
  Mail,
  MailPlus,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={`flex justify-between gap-8 ${className}`}>
      {/* texts */}
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Md. Akibur Rahman</h2>
        <div>
          <p className="max-w-md text-sm text-neutral-700 dark:text-neutral-400">
            Web Developer & Competitive Programmer
          </p>
          <p className="max-w-md items-center text-xs gap-1.5 inline-flex text-neutral-700 dark:text-neutral-400">
            <MapPin className="w-3.5" />
            <Link to={"/"}>Chattogram, Bangladesh</Link>
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Link
            to={"/"}
            target="_blank"
            className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            to={"/"}
            target="_blank"
            className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded cursor-pointer">
              <Mail className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:border-accent/10">
              <DropdownMenuItem
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-accent"
              >
                <Copy className="w-2 h-2" />
                <span className="hover:text-accent transition-all duration-100">
                  akibur.pciu@gmail.com
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link
                  to={"mailto:akibur.pciu@gmail.com"}
                  className="flex items-center gap-1 text-accent h-full w-full px-2 py-1.5"
                >
                  <MailPlus className="w-2 h-2" /> Send an Email
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded cursor-pointer">
              <Phone className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:border-accent/10">
              <DropdownMenuItem
                onClick={handleCopyPhoneNumber}
                className="flex items-center gap-1 text-accent"
              >
                <Copy className="w-2 h-2" />
                <span className="hover:text-accent transition-all duration-100">
                  +88019 3492 1876
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <Link
                  to={"tel:+8801934921875"}
                  className="flex items-center gap-2 text-accent h-full w-full px-2 py-1.5"
                >
                  <Phone className="w-2 h-2" /> Make a Call
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </section>

      {/* photo */}
      <section>
        <div className="w-fit h-fit border-3 border-primary/30 dark:border-primary/20 rounded-full p-0.5">
          <Avatar className="w-24 h-24 sm:w-40 sm:h-40 ">
            <AvatarImage src={AkibPortrait} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </header>
  );
};

export default Navbar;

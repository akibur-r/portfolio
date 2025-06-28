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
  Trophy,
} from "lucide-react";
import { IoMdLink } from "react-icons/io";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { Link } from "react-router";

type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={`flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-2 sm:gap-8 ${className}`}
    >
      {/* texts */}
      <main className="flex flex-col gap-2 text-center sm:text-left">
        <h2 className="text-2xl font-semibold">Md. Akibur Rahman</h2>
        <div>
          <p className="max-w-md text-sm text-neutral-700 dark:text-neutral-400">
            Web Developer & Competitive Programmer
          </p>
          <p className="max-w-md items-center text-xs gap-1.5 inline-flex text-neutral-700 dark:text-neutral-400">
            <MapPin className="w-3.5" />
            <Link
              target={"_blank"}
              to={"https://maps.app.goo.gl/62XNVUswsrZcYoVy5"}
              className="hover:underline"
            >
              Chattogram, Bangladesh
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center sm:items-start">
          {/* contact */}
          <div className="flex flex-row gap-2 items-center">
            {/* github */}
            <Link
              target={"_blank"}
              to={"https://github.com/akibur-r"}
              className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded"
            >
              <Github className="w-4 h-4" />
            </Link>

            {/* linkedin */}
            <Link
              target={"_blank"}
              to={"https://www.linkedin.com/in/akibur-r/"}
              className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded"
            >
              <Linkedin className="w-4 h-4" />
            </Link>

            {/* email */}
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
                  <span className="text-foreground hover:text-accent transition-all duration-100">
                    akibur.pciu@gmail.com
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    target={"_blank"}
                    to={"mailto:akibur.pciu@gmail.com"}
                    className="flex items-center gap-1 text-accent h-full w-full px-2 py-1.5"
                  >
                    <MailPlus className="w-2 h-2" /> Send an Email
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* phone */}
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
                  <span className="text-foreground hover:text-accent transition-all duration-100">
                    +88019 3492 1876
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    target={"_blank"}
                    to={"tel:+8801934921875"}
                    className="flex items-center gap-2 text-accent h-full w-full px-2 py-1.5"
                  >
                    <Phone className="w-2 h-2" /> Make a Call
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* phone */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-accent bg-accent/10 hover:bg-accent/20 p-2 rounded cursor-pointer">
                <Trophy className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dark:border-accent/10">
                {/* codechef */}
                <DropdownMenuItem className="p-0">
                  <Link
                    target={"_blank"}
                    to={"https://codeforces.com/profile/akibur_r"}
                    className="flex items-center gap-2 h-full w-full px-2 py-1.5 text-accent transition-all duration-100 hover:underline"
                  >
                    <SiCodeforces />
                    <span>Codeforces</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    target={"_blank"}
                    to={"https://www.codechef.com/users/akibur_r"}
                    className="flex items-center gap-2 h-full w-full px-2 py-1.5 text-accent transition-all duration-100 hover:underline"
                  >
                    <SiCodechef />
                    <span>CodeChef</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-row gap-2 items-center flex-wrap">
            {/* codechef */}
            <Link
              target={"_blank"}
              to={"/"}
              className="text-sm text-accent hover:text-neutral-700 dark:hover:text-neutral-400 hover:underline flex items-center gap-1"
            >
              <IoMdLink />
              Resume
            </Link>
          </div>
        </div>
      </main>

      {/* photo */}
      <section>
        <div className="w-fit h-fit border-3 border-primary/30 dark:border-primary/20 rounded-full p-0.5">
          <Avatar className="w-24 h-24 sm:w-40 sm:h-40 ">
            <AvatarImage src={AkibPortrait} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </section>
  );
};

export default Hero;

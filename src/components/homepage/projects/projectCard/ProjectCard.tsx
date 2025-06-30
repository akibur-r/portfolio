import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ProjectType } from "@/types/project/ProjectType";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import { BookOpen, Code, Play } from "lucide-react";
import { BiDevices, BiServer } from "react-icons/bi";
import { Link } from "react-router";
import ProjectScreenshotCard from "./ProjectScreenshotCard";
import ProjectTechIcon from "./ProjectTechIcon";

type ProjectCardProps = {
  project: ProjectType;
};
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();

  const cardActionButtonStyle =
    "flex items-center gap-1 border px-2 py-1 rounded w-full hover:bg-accent/10 hover:text-accent cursor-pointer";

  const {
    id,
    name,
    year,
    description,
    live_link,
    github_link,
    techStack,
    screenshots,
  } = project;
  const actions = (
    <>
      <div className="flex md:flex-col gap-1">
        {github_link.length > 1 ? (
          <DropdownMenu>
            <DropdownMenuTrigger className={cardActionButtonStyle}>
              <Code className="w-3 h-3" />{" "}
              {currentLanguage === "en" ? "code" : "কোড"}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:border-accent/10 rounded min-w-0 space-y-1">
              <DropdownMenuItem className="p-0" asChild>
                <Link
                  target={"_blank"}
                  to={github_link[0]}
                  className={`${cardActionButtonStyle} text-neutral-800  dark:text-neutral-200 hover:text-accent dark:hover:text-accent rounded-xs`}
                >
                  <BiDevices className="w-2 h-2" />
                  {currentLanguage === "en" ? "client" : "ফ্রন্টএন্ড"}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0" asChild>
                <Link
                  target={"_blank"}
                  to={github_link[1]}
                  className={`${cardActionButtonStyle} text-neutral-800 dark:text-neutral-200 hover:text-accent dark:hover:text-accent rounded-xs`}
                >
                  <BiServer className="w-2 h-2" />
                  {currentLanguage === "en" ? "server" : "ব্যাকএন্ড"}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            target="_blank"
            to={github_link[0]}
            className={cardActionButtonStyle}
          >
            <Code className="w-3 h-3" />
            {currentLanguage === "en" ? "code" : "কোড"}
          </Link>
        )}
        <Link target="_blank" to={live_link} className={cardActionButtonStyle}>
          <Play className="w-3 h-3" />
          {currentLanguage === "en" ? "live" : "লাইভ"}
        </Link>
        <Link to={`/project/${id}`} className={cardActionButtonStyle}>
          <BookOpen className="w-3 h-3" />
          {currentLanguage === "en" ? "study" : "বিস্তারিত"}
        </Link>
      </div>
    </>
  );

  return (
    <Card className="rounded-md">
      <CardHeader className="flex flex-col gap-x-12 sm:grid ">
        <CardTitle className="flex w-full items-center gap-2 justify-between md:justify-start">
          <span className="flex-1 md:flex-none text-base md:text-lg">
            {name}
          </span>
          <span className="space-x-2">
            <span className="inline opacity-50">—</span>
            <span className="text-foreground/70">{year}</span>
          </span>
        </CardTitle>

        <CardDescription className="text-neutral-800 dark:text-neutral-300">
          {description}
        </CardDescription>
        <CardAction className="hidden md:block">{actions}</CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <h3 className="space-x-1 text-neutral-700 dark:text-neutral-300">
            <span className="text-xs text-accent select-none">//</span>
            <span>
              {currentLanguage === "en" ? "Built with" : "ব্যবহৃত প্রযুক্তি"}
            </span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <ProjectTechIcon key={tech} icon={tech} />
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="space-x-1 text-neutral-700 dark:text-neutral-300">
            <span className="text-xs text-accent select-none">//</span>
            <span>
              {currentLanguage === "en" ? "Screenshots" : "স্ক্রিনশট"}
            </span>
            <span className="text-xs text-accent lg:hidden">
              {currentLanguage === "en"
                ? "(click on image to view)"
                : "(দেখার জন্য ছবিতে ক্লিক করুন)"}
            </span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {screenshots.length ? (
              screenshots.map((ss, idx) => (
                <ProjectScreenshotCard key={idx} ss={ss} />
              ))
            ) : (
              <span className="text-destructive/80">
                No screenshot available
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="md:hidden">
        <CardAction>{actions}</CardAction>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

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

import { BookOpen, Code, Play } from "lucide-react";
import { Link } from "react-router";
import ProjectScreenshotCard from "./ProjectScreenshotCard";
import ProjectTechIcon from "./ProjectTechIcon";

type ProjectCardProps = {
  project: ProjectType;
};
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardActionButtonStyle =
    "flex items-center gap-1 border px-2 py-1 rounded w-full hover:bg-accent/10 hover:text-accent";
  const actions = (
    <>
      <div className="flex md:flex-col gap-1">
        <Link
          target="_blank"
          to={project.github_link}
          className={cardActionButtonStyle}
        >
          <Code className="w-3 h-3" /> code
        </Link>
        <Link
          target="_blank"
          to={project.live_link}
          className={cardActionButtonStyle}
        >
          <Play className="w-3 h-3" /> live
        </Link>
        <Link to={`/project/${project.id}`} className={cardActionButtonStyle}>
          <BookOpen className="w-3 h-3" /> study
        </Link>
      </div>
    </>
  );

  return (
    <Card className="rounded-md">
      <CardHeader className="flex flex-col gap-x-12 sm:grid ">
        <CardTitle className="flex w-full items-center gap-2 justify-between md:justify-start">
          <span className="flex-1 md:flex-none text-base md:text-lg">
            {project.name}
          </span>
          <span className="space-x-2">
            <span className="inline opacity-50">—</span>
            <span className="text-foreground/70">{project.year}</span>
          </span>
        </CardTitle>

        <CardDescription className="text-neutral-800 dark:text-neutral-300">
          {project.description}
        </CardDescription>
        <CardAction className="hidden md:block">{actions}</CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <h3 className="space-x-1 text-neutral-700 dark:text-neutral-300">
            <span className="text-xs text-accent select-none">//</span>
            <span>Built with</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <ProjectTechIcon key={tech} icon={tech} />
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="space-x-1 text-neutral-700 dark:text-neutral-300">
            <span className="text-xs text-accent select-none">//</span>
            <span>Screenshots</span>
            <span className="text-xs text-accent md:hidden">
              (click on image to view)
            </span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.screenshots.length ? (
              project.screenshots.map((ss, idx) => (
                <ProjectScreenshotCard key={idx} ss={ss} />
              ))
            ) : (
              <span className="text-destructive/80">No screenshot available</span>
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

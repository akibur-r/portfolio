import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { ProjectType } from "@/types/project/ProjectType";

import { BookOpen, Code, Play } from "lucide-react";
import { Link } from "react-router";

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
        <CardTitle className="flex gap-2">
          {project.name}
          <span className="opacity-50">—</span>
          {project.year}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardAction className="hidden md:block">{actions}</CardAction>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {project.screenshots.map((ss) => (
            <HoverCard key={ss} openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <Avatar className="w-16 h-16 p-2 border rounded">
                  <AvatarImage src={ss} />
                  <AvatarFallback>SS</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent
                align="center"
                className="w-72 h-72 p-2 border rounded"
              >
                <img src={ss} alt="" />
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <h3 className="space-x-1">
          <span>Screenshots</span>
          <span className="text-xs text-accent">(click on image to view)</span>
        </h3>
      </CardContent>
      <CardFooter className="md:hidden">
        <CardAction>{actions}</CardAction>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

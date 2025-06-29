import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { useState } from "react";

type ProjectScreenshotProps = {
  ss: { dark: string; light: string };
};
const ProjectScreenshotCard: React.FC<ProjectScreenshotProps> = ({ ss }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const { dark, light } = ss;
  const { theme } = useTheme();

  return (
    <>
      <HoverCard
        open={cardOpen}
        onOpenChange={setCardOpen}
        openDelay={0}
        closeDelay={0}
      >
        <HoverCardTrigger asChild>
          <Avatar
            className="w-10 md:w-14 h-10 md:h-14 p-0.5 border rounded"
            onClick={() => setCardOpen(true)}
          >
            {theme === "dark" ? (
              <AvatarImage
                src={dark}
                className="hidden dark:block object-cover object-top"
              />
            ) : (
              <AvatarImage
                src={light}
                className="dark:hidden object-cover object-top"
              />
            )}

            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent
          align="center"
          className="p-0 w-fit h-fit overflow-hidden"
        >
          <ScrollArea className="w-80 md:w-96 h-72 md:h-96 p-2 border rounded overflow-auto">
            {theme === "dark" ? (
              <img
                src={dark}
                alt="Screenshot"
                className="hidden dark:block max-w-full max-h-none"
              />
            ) : (
              <img
                src={light}
                alt="dark:hidden Screenshot"
                className="max-w-full max-h-none"
              />
            )}
          </ScrollArea>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default ProjectScreenshotCard;

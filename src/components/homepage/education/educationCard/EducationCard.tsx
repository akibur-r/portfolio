import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useLanguage from "@/hooks/useLanguage/useLanguage";
import type { EducationType } from "@/types/education/EducationType";
import { isAfter } from "date-fns";

type EducationCardProps = {
  educationLevel: EducationType;
};
const EducationCard: React.FC<EducationCardProps> = ({ educationLevel }) => {
  const { currentLanguage } = useLanguage();
  const { title, institute, location, starting_year, passing_year } =
    educationLevel;
  return (
    <Card className="gap-y-0 p-2 px-2 bg-accent/5 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-accent/10 rounded-sm text-neutral-700 dark:text-neutral-300 transition-all duration-200 group">
      <CardHeader className="px-0">
        <CardTitle className="flex justify-between items-center gap-4">
          <span className="font-medium md:text-lg text-accent group-hover:text-foreground/75 transition-all duration-200">
            {title}
          </span>
          <span className="text-xs font-normal text-right">
            {starting_year.split("-").at(0) +
              " - " +
              passing_year.split("-").at(0) +
              (isAfter(passing_year, new Date())
                ? " " + `(${currentLanguage === "en" ? "exp." : "সম্ভাব্য"})`
                : "")}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-1">
          <div>
            <p className="text-md">{institute}</p>
            <p className="flex gap-1 items-center text-xs">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;

import { Card, CardContent } from "@/components/ui/card";
import { FolderSearch, LayoutGrid } from "lucide-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="max-w-sm w-full bg-transparent border-0 shadow-none text-neutral-600 dark:text-neutral-400">
        <CardContent className="flex flex-col justify-center items-center gap-2">
          <div className="text-[#d08b8b] dark:text-[#9b5757]">
            <FolderSearch className="w-10 h-10 " />
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-lg opacity-70">Page Not Found</h1>
            <p className="text-sm">
              The page you're looking for is not created.
            </p>
          </div>
          <div className="flex gap-3 justify-around items-center">
            <Link to={"/"} className="flex gap-1 items-center text-accent">
              <LayoutGrid className="w-4 h-4" />
              Homepage
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorPage;

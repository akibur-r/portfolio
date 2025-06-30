import { Card, CardContent } from "@/components/ui/card";
import { FolderCog, LayoutGrid } from "lucide-react";
import { Link } from "react-router";

const PageUnderMaintainance = () => {
  return (
    <Card className="max-w-sm w-full bg-transparent border-0 shadow-none text-neutral-600 dark:text-neutral-400">
      <CardContent className="flex flex-col justify-center items-center gap-2">
        <div className="text-[#d0c68b] dark:text-[#9b9357]">
          <FolderCog className="w-10 h-10 " />
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-lg opacity-70">
            Page Under Maintainance
          </h1>
          <p className="text-sm">Awesome things are cooking...</p>
        </div>
        <div className="flex gap-3 justify-around items-center">
          <Link to={"/"} className="flex gap-1 items-center text-accent">
            <LayoutGrid className="w-4 h-4" />
            Homepage
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageUnderMaintainance;

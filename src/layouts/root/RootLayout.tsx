import { ThemeToggle } from "@/components/shared/themeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";

const RootLayout = () => {
  return (
    <div className="font-fancy">
      <ThemeToggle />
      hello <span className="font-primary">there</span>
      <div className="p-4 bg-primary">lksjkfd</div>
      <Button variant={'secondary'} />
    </div>
  );
};

export default RootLayout;

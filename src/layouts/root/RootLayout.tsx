import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = () => {
  return (
    <>
      <div className="container font-primary relative mx-auto scroll-my-12 overflow-auto px-4 pt-6 md:p-x-16 md:pt-16">
        <Navbar className={"mx-auto w-full max-w-[45rem] space-y-8"} />
      </div>
      <Toaster
        position="bottom-center"
        swipeDirections={["bottom", "left", "right", "top"]}
        toastOptions={{
          classNames: {
            toast: "!w-fit !h-fit !py-2 items-center !border-accent/30",
            success: "!bg-[#B6CABB] dark:!bg-[#4A6B50] !border-[#4A6B50]/50",
            error: "!bg-[#d6aeae] dark:!bg-[#7d634f] !border-[#7d634f]/50",
            warning: "!bg-[#d9cda9] dark:!bg-[#7d6c4f] !border-[#7d6c4f]/50",
          },
        }}
      />
    </>
  );
};

export default RootLayout;

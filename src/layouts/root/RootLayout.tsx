import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="container font-primary relative mx-auto scroll-my-12 text-neutral-800 dark:text-neutral-300 w-full max-w-[45rem]">
        <Navbar />

        <main className="pt-6 px-4 md:pt-14 pb-3 space-y-8">
          <Outlet />
        </main>

        <Footer />
      </div>
      <Toaster
        position="bottom-center"
        swipeDirections={["bottom", "left", "right", "top"]}
        toastOptions={{
          classNames: {
            toast: "!w-fit !h-fit !py-2 items-center !border-accent/30",
            success: "!bg-[#B6CABB] dark:!bg-[#4A6B50] !border-[#4A6B50]/50",
            error: "!bg-[#d6aeae] dark:!bg-[#6b4a4a] !border-[#6b4a4a]/50",
            warning: "!bg-[#d9cda9] dark:!bg-[#7d6c4f] !border-[#7d6c4f]/50",
          },
        }}
      />
    </>
  );
};

export default RootLayout;

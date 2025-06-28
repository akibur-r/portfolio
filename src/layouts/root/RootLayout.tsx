import Navbar from "@/components/shared/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="container font-fancy relative mx-auto scroll-my-12 overflow-auto px-4 pt-6 md:p-x-16 md:pt-16">
      <Navbar className={"mx-auto w-full max-w-[45rem] space-y-8"} />
    </div>
  );
};

export default RootLayout;

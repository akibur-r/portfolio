import About from "@/components/homepage/about/About";
import Hero from "@/components/homepage/hero/Hero";
import Projects from "@/components/homepage/projects/Projects";

const HomePage = () => {
  return (
    <div className="mx-auto w-full max-w-[45rem] space-y-8 mb-2">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;

import About from "@/components/homepage/about/About";
import Hero from "@/components/homepage/hero/Hero";
import Projects from "@/components/homepage/projects/Projects";
import Technologies from "@/components/homepage/technologies/Technologies";

const HomePage = () => {
  return (
    <div className="mx-auto w-full max-w-[45rem] space-y-8 mb-2">
      <Hero />
      <About />
      <Projects />
      <Technologies />
    </div>
  );
};

export default HomePage;

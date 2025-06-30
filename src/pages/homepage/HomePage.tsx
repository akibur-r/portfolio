import About from "@/components/homepage/about/About";
import Education from "@/components/homepage/education/Education";
import Hero from "@/components/homepage/hero/Hero";
import ProblemSolving from "@/components/homepage/problemSolving/ProblemSolving";
import Projects from "@/components/homepage/projects/Projects";
import Technologies from "@/components/homepage/technologies/Technologies";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Education />
      <ProblemSolving />
    </>
  );
};

export default HomePage;

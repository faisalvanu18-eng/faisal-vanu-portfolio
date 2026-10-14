import { MotionConfig } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import BottomTabBar from "@/components/BottomTabBar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />

      <main className="pb-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <BottomTabBar />
    </MotionConfig>
  );
}

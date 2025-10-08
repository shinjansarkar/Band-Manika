import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PerformanceTimeline from "@/components/PerformanceTimeline";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PerformanceTimeline />
      <Team />
      <Gallery />
      <Videos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

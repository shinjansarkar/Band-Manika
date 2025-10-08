import { Music, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Folk Pattern Overlay */}
      <div className="absolute inset-0 folk-pattern opacity-30" />

      {/* Floating Musical Notes */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Music className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <Music className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Music className="w-10 h-10 text-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-4 sm:mb-6 inline-block">
          <Music className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-glow-pulse" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 text-glow">
          Singer Manika
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-display text-gold mb-3 sm:mb-4 italic">
          Echoes of Bengal
        </p>

        <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto font-body font-light px-4">
          Folk Songs That Touch the Soul
        </p>

        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
          <Button 
            size="lg"
            className="bg-primary hover:bg-accent text-background font-body font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-glow group"
          >
            <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            Listen Now
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-body font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

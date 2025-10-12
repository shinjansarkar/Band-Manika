import { Music, Play, Star, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] sm:min-h-[110vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Music className="absolute top-10 left-6 sm:left-12 w-6 h-6 sm:w-10 sm:h-10 text-primary opacity-20 animate-float" />
        <Sparkles className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 text-gold opacity-25 animate-pulse" />
        <Heart className="absolute bottom-1/4 left-1/3 w-4 h-4 sm:w-5 sm:h-5 text-accent opacity-20 animate-pulse" />
        <Star className="absolute top-1/2 right-1/3 w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-30 animate-twinkle" />
      </div>

      {/* Main Content (centered & shifted down) */}
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in flex flex-col items-center justify-center gap-3 sm:gap-5 mt-24 sm:mt-32 md:mt-40 lg:mt-48 pt-12 sm:pt-16 md:pt-20">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-vintage font-black text-glow tracking-wider">
          MANIKA
        </h1>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bengali text-primary animate-glow-pulse">
          ও বন্ধুরা
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl font-display text-gold italic">
          Echoes of Bengal
        </p>

        <p className="text-sm sm:text-base lg:text-lg text-foreground/80 font-light max-w-xl mx-auto leading-relaxed">
          Folk Songs That Touch the Soul
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mt-6">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-background font-medium px-6 sm:px-8 py-3 text-sm sm:text-base border-glow group w-full sm:w-auto transition-transform duration-300"
            onClick={() =>
              document
                .getElementById("performances")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            Performances
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-medium px-6 sm:px-8 py-3 text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("team")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

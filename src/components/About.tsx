import aboutImg from "@/assets/about.jpg";

const About = () => {
  return (
  <section id="about" className="py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 folk-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-foreground/90 leading-relaxed font-body">
              <span className="text-2xl font-display text-primary">Singer Manika</span> is a Bengali folk band 
              dedicated to reviving the timeless tunes of Bengal's heartland. Our music echoes the 
              soul of rural Bengal, where every note tells a story of love, loss, and the beauty of simplicity.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-body">
              Blending traditional instruments like the <span className="text-primary font-medium">dotara</span>, 
              <span className="text-primary font-medium"> ektara</span>, and <span className="text-primary font-medium">violin</span> with 
              soulful vocals, we bring the rhythm of rural Bengal to the modern stage. Our performances are 
              a celebration of heritage, passion, and the enduring spirit of folk music.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <div className="flex-1 p-4 sm:p-6 bg-card border border-primary/30 rounded-lg hover-lift">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2">50+</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Performances</p>
              </div>
              <div className="flex-1 p-4 sm:p-6 bg-card border border-primary/30 rounded-lg hover-lift">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2">10+</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Years Together</p>
              </div>
              <div className="flex-1 p-4 sm:p-6 bg-card border border-primary/30 rounded-lg hover-lift">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2">1000+</h3>
                <p className="text-xs sm:text-sm text-foreground/70">Hearts Touched</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative overflow-hidden rounded-lg border-4 border-primary/40 hover-lift">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img src={aboutImg} alt="About Manika" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 border-glow pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

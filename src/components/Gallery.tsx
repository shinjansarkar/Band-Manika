import { Image as ImageIcon } from "lucide-react";

const galleryItems = [
  { id: 1, span: "col-span-2 row-span-2" },
  { id: 2, span: "col-span-1 row-span-1" },
  { id: 3, span: "col-span-1 row-span-1" },
  { id: 4, span: "col-span-1 row-span-2" },
  { id: 5, span: "col-span-2 row-span-1" },
  { id: 6, span: "col-span-1 row-span-1" },
];

const Gallery = () => {
  return (
  <section id="gallery" className="py-12 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 folk-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-body px-4">Moments captured on stage and beyond</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`${item.span} group relative overflow-hidden rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 cursor-pointer hover-lift animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-primary font-display text-lg">Performance {item.id}</p>
                  <p className="text-foreground/60 text-sm font-body mt-1">Click to view</p>
                </div>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 font-body italic">
            More photos and videos coming soon. Follow us on social media for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

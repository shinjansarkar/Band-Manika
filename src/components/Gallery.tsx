import { Image as ImageIcon } from "lucide-react";
import photo1 from "@/assets/1.jpg";
import photo2 from "@/assets/2.png";
import photo3 from "@/assets/3.png";
import photo4 from "@/assets/4.png";
import photo5 from "@/assets/5.png";
import photo6 from "@/assets/about.jpg";

const galleryItems = [
  { id: 1, span: "col-span-2 row-span-2", image: photo1, title: "Live Performance" },
  { id: 2, span: "col-span-1 row-span-1", image: photo2, title: "Band Performance" },
  { id: 3, span: "col-span-1 row-span-1", image: photo3, title: "On Stage" },
  { id: 4, span: "col-span-1 row-span-2", image: photo4, title: "Concert Moment" },
  { id: 5, span: "col-span-2 row-span-1", image: photo5, title: "Musical Evening" },
  { id: 6, span: "col-span-1 row-span-1", image: photo6, title: "Behind the Scenes" },
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

        {/* Flexible Photo Boxes - Each box adapts to photo size */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group inline-block rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 cursor-pointer hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Box - Takes exact photo dimensions */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="block max-w-full max-h-[200px] md:max-h-[250px] lg:max-h-[300px] h-auto w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-64 h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
              )}

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

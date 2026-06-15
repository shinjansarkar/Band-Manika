import { ExternalLink, Play } from "lucide-react";

const liveVideos = [
  {
    id: "lv1",
    title: "Facebook Live Performance",
    subtitle: "Watch the full performance on Facebook",
    url: "https://www.facebook.com/share/v/17wtAzp1fM/",
  },
  {
    id: "lv2",
    title: "Nachiketa — Live Session",
    subtitle: "Acoustic set",
    url: "https://www.youtube.com/watch?v=Vc63WURO7Rg",
    thumbnail: "https://img.youtube.com/vi/Vc63WURO7Rg/maxresdefault.jpg",
  },
  {
    id: "lv3",
    title: "Band A5 Live",
    subtitle: "Festival performance",
    url: "https://www.youtube.com/watch?v=BVAXqTzob8E",
    thumbnail: "https://img.youtube.com/vi/BVAXqTzob8E/maxresdefault.jpg",
  },
];

const LivePerformances = () => {
  return (
    <section id="live-performances" className="py-12 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <p className="text-lg sm:text-xl font-display text-gold italic mb-2">Live</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            LIVE PERFORMANCES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveVideos.map((v, idx) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 bg-card/40 hover-lift"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10">
                {v.thumbnail ? (
                  <img src={v.thumbnail} alt={v.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-black/60 via-primary/20 to-black/50 text-center px-4">
                    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm">
                      Facebook Live
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm max-w-[16rem]">
                      Open the shared performance link in a new tab
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-red-600 rounded-full p-3 shadow-lg">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-display font-semibold text-foreground mb-1 line-clamp-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/60">{v.subtitle}</p>
                  </div>
                  <div className="text-primary/80">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-foreground/60 font-body italic text-sm">
            Click any video to open in a new tab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LivePerformances;

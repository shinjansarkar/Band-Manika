import { useState, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "1",
    title: "Ami Sudhu Roinu Baki || Manika Basu Dey",
    subtitle: "Rabindrasangeet by Manika Basu Dey",
    youtubeId: "MVam60vSDfo",
    thumbnail: "https://img.youtube.com/vi/MVam60vSDfo/maxresdefault.jpg"
  },
  {
    id: "2",
    title: "আমার দাদা এবং সঙ্গীতের দ্ৰোনাচাৰ্য Nachiketa Chakraborty-র জন্মদিনে আমার এই শ্রদ্ধার্ঘ্য",
    subtitle: "",
    youtubeId: "Vc63WURO7Rg",
    thumbnail: "https://img.youtube.com/vi/Vc63WURO7Rg/maxresdefault.jpg"
  },
  {
    id: "3",
    title: "GMDM — Bad Piggies Metal Cover",
    subtitle: "",
    youtubeId: "wXGMDuNM4ok",
    thumbnail: "https://img.youtube.com/vi/wXGMDuNM4ok/maxresdefault.jpg"
  },
  {
    id: "4",
    title: "Shiray Shiray Sobuj Merun | Band A5 feat. Nachiketa ",
    subtitle: "Theme song of Mohun Bagan",
    youtubeId: "BVAXqTzob8E",
    thumbnail: "https://img.youtube.com/vi/BVAXqTzob8E/maxresdefault.jpg",
  },
];            

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
  <section id="videos" className="py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 folk-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <p className="text-lg sm:text-xl font-display text-gold italic mb-2">Featured</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-3">
            VIDEOS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-[1fr,400px] xl:grid-cols-[1fr,450px] gap-6 lg:gap-8">
          {/* Main Video Player */}
          <div className="animate-fade-in">
            <div className="relative aspect-video bg-card border-2 border-primary/40 rounded-lg overflow-hidden group hover-lift">
              {isMobile ? (
                // Mobile: Clickable thumbnail that opens YouTube
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 block"
                >
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </a>
              ) : (
                // Desktop: Embedded iframe
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?enablejsapi=1&origin=${window.location.origin}&playsinline=1&modestbranding=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )}
              <div className="absolute inset-0 border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="mt-4 sm:mt-6 px-2">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 font-body">{selectedVideo.subtitle}</p>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card/50 border border-primary/30 rounded-lg p-3 sm:p-4 max-h-[600px] overflow-y-auto custom-scrollbar">
              <h3 className="text-lg sm:text-xl font-display font-semibold text-primary mb-4 px-2">
                More Videos
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`group cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${
                      selectedVideo.id === video.id
                        ? "bg-primary/20 border-2 border-primary"
                        : "bg-secondary/50 border border-primary/20 hover:border-primary/50"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-3 sm:gap-4 p-2 sm:p-3">
                      {/* Thumbnail */}
                      <div className="relative w-28 sm:w-32 aspect-video flex-shrink-0 rounded overflow-hidden bg-gradient-to-br from-primary/30 to-accent/20">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-110 transition-all" />
                        </div>
                        {selectedVideo.id === video.id && (
                          <div className="absolute inset-0 bg-primary/20" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-body font-medium text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground/60 font-body">{video.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-foreground/60 font-body italic text-sm sm:text-base">
            Subscribe to our YouTube channel for more folk music performances
          </p>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--secondary));
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};

export default Videos;

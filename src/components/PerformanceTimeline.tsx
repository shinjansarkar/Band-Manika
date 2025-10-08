import { Calendar, MapPin, Music } from "lucide-react";

const performances = [
  {
    year: "2024",
    title: "Bengal Folk Festival",
    venue: "Rabindra Sadan, Kolkata",
    description: "Headlined the annual folk festival with a special tribute to Lalon Fakir",
    highlight: true,
  },
  {
    year: "2023",
    title: "Durga Puja Cultural Night",
    venue: "Salt Lake Stadium, Kolkata",
    description: "Performed for 5000+ audience celebrating Bengali culture",
    highlight: false,
  },
  {
    year: "2023",
    title: "University Cultural Fest",
    venue: "Jadavpur University, Kolkata",
    description: "Interactive session with students on preserving folk traditions",
    highlight: false,
  },
  {
    year: "2022",
    title: "International Folk Music Conference",
    venue: "Biswa Bangla Convention Centre",
    description: "Represented Bengali folk music on an international platform",
    highlight: true,
  },
  {
    year: "2022",
    title: "Baul Sangeet Sammelan",
    venue: "Shantiniketan, Birbhum",
    description: "Collaboration with renowned Baul artists from rural Bengal",
    highlight: false,
  },
  {
    year: "2021",
    title: "Virtual Concert Series",
    venue: "Online Streaming",
    description: "Reached global audience during pandemic with weekly performances",
    highlight: false,
  },
];

const PerformanceTimeline = () => {
  return (
  <section id="performances" className="py-12 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 folk-pattern opacity-5" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Our Journey
          </h2>
          <p className="text-lg text-foreground/70 font-body">Major performances and milestones</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (gradient + glow) - centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 block">
            <div className="h-full w-full rounded-full bg-gradient-to-b from-primary to-accent opacity-95" />
            {/* soft glow */}
            <div className="absolute inset-0 w-full h-full rounded-full blur-xl opacity-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,165,0,0.18), rgba(255,140,0,0.06))' }} />
          </div>

          <div className="space-y-12">
            {performances.map((event, index) => (
              <div
                key={index}
                className="relative animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background ring-2 ring-primary/30 shadow-[0_8px_24px_rgba(255,140,0,0.18)] z-10 block">
                  {event.highlight && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                  <div
                    className={`mx-auto bg-card border ${
                      event.highlight ? "border-primary border-2" : "border-primary/30"
                    } rounded-lg p-4 md:p-6 hover-lift group w-full max-w-2xl`}
                  >
                  <div className="flex items-center gap-3 mb-3">
                      <Music className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-2xl font-display font-bold text-primary">{event.year}</span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-foreground/60 mb-3 justify-center">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-body">{event.venue}</span>
                  </div>

                  <p className="text-foreground/80 font-body text-sm">{event.description}</p>

                  {event.highlight && (
                    <div className="mt-3 inline-block">
                      <span className="text-xs font-body bg-primary/20 text-primary px-3 py-1 rounded-full">
                        ⭐ Major Event
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTimeline;

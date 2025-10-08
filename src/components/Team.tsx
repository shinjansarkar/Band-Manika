import { Music, Mic, Drum } from "lucide-react";

const teamMembers = [
  {
    name: "Manika Chatterjee",
    role: "Lead Vocalist",
    icon: Mic,
    description: "Soulful voice that brings folk tales to life",
  },
  {
    name: "Arijit Das",
    role: "Dotara Player",
    icon: Music,
    description: "Master of traditional Bengali string instrument",
  },
  {
    name: "Sudipta Majumdar",
    role: "Harmonium & Ektara",
    icon: Music,
    description: "Versatile musician with deep folk roots",
  },
  {
    name: "Ranjit Karmakar",
    role: "Percussion",
    icon: Drum,
    description: "Rhythmic foundation of our ensemble",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 folk-pattern opacity-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-4">
            Meet the Band
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-body px-4">The voices and souls behind Singer Manika</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-primary/30 rounded-lg p-6 hover-lift transition-all duration-300 group-hover:border-primary">
                {/* Avatar Circle */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/50 flex items-center justify-center group-hover:border-primary transition-all duration-300">
                    <member.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-body font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/70 font-body">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

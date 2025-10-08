import { Music2, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary/80 border-t-2 border-primary/30 relative overflow-hidden">
      {/* Folk Pattern Border */}
      <div className="absolute top-0 left-0 right-0 h-2 folk-pattern opacity-50" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-display font-bold text-primary">Singer Manika</span>
            </div>
            <p className="text-foreground/70 font-body text-sm leading-relaxed">
              Preserving and celebrating Bengali folk music traditions. Bringing the soul of rural Bengal 
              to audiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              {["home", "about", "performances", "team", "gallery", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-foreground/70 hover:text-primary transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/70 font-body text-sm">
              <li>Kolkata, West Bengal</li>
              <li>India</li>
              <li className="pt-2">contact@singermanika.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 font-body text-sm text-center md:text-left">
              © 2025 Singer Manika. All rights reserved.
            </p>
            <p className="text-foreground/60 font-body text-sm flex items-center gap-2">
              Designed with <Heart className="w-4 h-4 text-primary fill-primary" /> by{" "}
              <span className="text-primary font-medium">Shinjan Sarkar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b-2 border-primary/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="Manika logo" className="w-12 h-20 sm:w-20 sm:h-14 object-contain" />
          <span className="block sm:inline text-xl sm:text-2xl font-display font-bold text-primary">Manika</span>
          <span className="block sm:inline text-base sm:text-xl font-display font-bold text-primary">ও বন্ধুরা</span>
        </div>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-body text-sm">
          {["home", "about", "performances", "team", "gallery", "videos", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 capitalize relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button 
          className="lg:hidden text-primary z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "72px" }}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 font-body text-lg">
          {["home", "about", "performances", "team", "gallery", "videos", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

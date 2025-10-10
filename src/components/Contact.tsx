import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {

  return (
  <section id="contact" className="py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 folk-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-body px-4">We'd love to hear from you</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Location */}
          <div className="bg-card border border-primary/30 rounded-lg p-4 sm:p-6 hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm sm:text-base text-foreground/70 font-body break-words">Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-card border border-primary/30 rounded-lg p-4 sm:p-6 hover-lift animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm sm:text-base text-foreground/70 font-body break-all">contact@singermanika.com</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-card border border-primary/30 rounded-lg p-4 sm:p-6 hover-lift animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-sm sm:text-base text-foreground/70 font-body">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-card border border-primary/30 rounded-lg p-4 sm:p-6 hover-lift animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
          ICT Undergraduate
        </p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-gradient">Heshani Nethmini</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
          A passionate ICT undergraduate at the University of Colombo, building
          digital solutions that make a difference.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
            <img
              src={profilePhoto}
              alt="Heshani Nethmini"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-xs text-center leading-tight">
            B.ICT<br />(Hons)
          </div>
        </div>
      </motion.div>
    </div>
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "University of Colombo", sub: "Bachelor of ICT (Hons)" },
  { icon: MapPin, label: "Sri Lanka", sub: "Based in Colombo" },
  { icon: Mail, label: "heshaninethmini3@gmail.com", sub: "Get in touch" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Passionate About <span className="text-gradient">Technology</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          I'm Heshani Nethmini Thennakon, an ICT undergraduate at the University of Colombo pursuing
          a Bachelor of ICT (Hons). I'm driven by a passion for building practical, impactful
          digital solutions. With experience in web development and database management, I love
          turning ideas into functional applications.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <item.icon className="text-primary mb-3" size={28} />
            <p className="font-medium text-foreground">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

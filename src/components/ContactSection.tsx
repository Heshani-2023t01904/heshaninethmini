import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:heshaninethmini3@gmail.com",
    color: "hover:border-accent",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/heshani-nethmini-a97240356",
    color: "hover:border-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Heshani-2023t01904",
    color: "hover:border-primary",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Let's Work <span className="text-gradient">Together</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 mb-10">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-card transition-colors ${s.color}`}
            >
              <s.icon size={24} className="text-foreground" />
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </a>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <Download size={18} />
          Download CV
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectImg from "@/assets/project-staysmart.jpg";

const techStack = ["PHP", "MySQL", "HTML", "CSS", "JavaScript"];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Projects</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Featured <span className="text-gradient">Work</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl overflow-hidden"
      >
        <div className="overflow-hidden">
          <img
            src={projectImg}
            alt="StaySmart — Hostel Management System"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <ExternalLink size={18} className="text-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-wide">
              Featured Project
            </span>
          </div>
          <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">StaySmart</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A complete hostel management system that handles room allocation, resident registration,
            fee tracking and reporting. Built to replace manual hostel processes with a digital
            solution.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;

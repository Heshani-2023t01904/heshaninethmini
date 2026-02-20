import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Experience</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
              <Calendar size={14} />
              <span>February 2023</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={18} className="text-primary" />
              <h3 className="text-lg font-heading font-bold text-foreground">
                Intern — Credit Department
              </h3>
            </div>
            <p className="text-primary font-medium text-sm mb-3">
              Hatton National Bank (HNB)
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Completed an internship in the Credit Department, gaining experience in credit
              processes, banking documentation, and professional banking operations.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;

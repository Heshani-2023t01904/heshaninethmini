import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "PHP", level: 75 },
  { name: "JavaScript", level: 78 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Skills</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Tools & <span className="text-gradient">Technologies</span>
        </h2>
      </motion.div>
      <div className="max-w-2xl mx-auto grid gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-foreground">{s.name}</span>
              <span className="text-sm text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-3 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

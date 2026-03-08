import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "React Native", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Figma", category: "Design" },
  { name: "Vercel", category: "Hosting" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Technologies</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We use industry-leading technologies to build scalable, performant applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
              className="gradient-border p-5 text-center group cursor-pointer"
            >
              <div className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

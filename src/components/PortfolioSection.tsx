import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack Dashboard",
    category: "Web App",
    description: "Real-time financial analytics dashboard with AI-powered insights.",
    gradient: "from-[hsl(172,80%,50%)] to-[hsl(200,80%,45%)]",
  },
  {
    title: "HealthPulse",
    category: "Mobile App",
    description: "Cross-platform health & wellness tracking application.",
    gradient: "from-[hsl(260,70%,60%)] to-[hsl(300,60%,55%)]",
  },
  {
    title: "EcoMarket",
    category: "E-Commerce",
    description: "Sustainable marketplace with seamless checkout experience.",
    gradient: "from-[hsl(150,70%,45%)] to-[hsl(172,80%,50%)]",
  },
  {
    title: "LearnFlow",
    category: "SaaS Platform",
    description: "AI-powered learning management system for modern teams.",
    gradient: "from-[hsl(45,90%,55%)] to-[hsl(30,85%,55%)]",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Work</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className={`h-72 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Project <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

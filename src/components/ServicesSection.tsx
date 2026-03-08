import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Zap, Server, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, blazing-fast websites built with Next.js, React, and TypeScript for exceptional user experiences.",
    color: "hsl(172 80% 50%)",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications using React Native and Flutter with seamless performance.",
    color: "hsl(260 70% 60%)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning interfaces designed with user-first principles, creating experiences that engage and convert.",
    color: "hsl(150 70% 45%)",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization and speed tuning to ensure your app loads instantly and runs smoothly at scale.",
    color: "hsl(45 90% 55%)",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Robust server-side architecture with Node.js, serverless functions, and cloud-native infrastructure.",
    color: "hsl(172 80% 50%)",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description: "24/7 monitoring, updates, and dedicated support to keep your digital products running at their best.",
    color: "hsl(260 70% 60%)",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Services We <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="gradient-border p-8 group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: `${service.color}15` }}
              >
                <service.icon size={24} style={{ color: service.color }} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

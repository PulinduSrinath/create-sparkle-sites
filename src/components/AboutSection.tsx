import { motion } from "framer-motion";
import { Users, Target, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">About DevCraft</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Driving Digital <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At DevCraft, we don't just build websites; we craft digital experiences that matter. 
              Our team of expert designers and developers works at the intersection of creativity 
              and technology to help brands reach their full potential in the digital age.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "Client-Centric Approach",
                  desc: "We build lasting partnerships by putting your business goals first."
                },
                {
                  icon: Target,
                  title: "Results-Driven Development",
                  desc: "Every line of code we write is focused on delivering measurable impact."
                },
                {
                  icon: Shield,
                  title: "Quality Excellence",
                  desc: "We maintain the highest standards of performance, security, and design."
                }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-1">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-12 text-center">
                <div>
                  <div className="font-display text-6xl font-bold gradient-text mb-4">10+</div>
                  <div className="text-xl font-semibold text-foreground italic">"Exceptional code, stunning design, and a partner you can trust."</div>
                  <div className="text-muted-foreground mt-4">— Years of Collective Expertise</div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

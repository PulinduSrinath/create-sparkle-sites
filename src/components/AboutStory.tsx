import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f] mb-6">
              Get to know <span className="text-primary">About Us</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                DevCraft is a leading software development company dedicated to transforming ideas 
                into reality through innovative technology solutions. Our team of expert 
                developers and designers work tirelessly to deliver high-quality, scalable, 
                and user-centric applications tailored to meet our clients' unique needs.
              </p>
              <p>
                With a focus on excellence and a passion for technology, we take pride in our 
                ability to tackle complex challenges and provide effective solutions that drive 
                business growth. At DevCraft, your success is our mission.
              </p>
              <p>
                We believe in the power of digital transformation and are committed to staying 
                at the forefront of industry trends. By choosing DevCraft, you are partnering 
                with a team that values integrity, transparency, and collaboration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Custom Team Illustration Placeholder */}
            <div className="bg-primary/5 rounded-3xl p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:20px:20px]" />
              <img 
                src="https://cdni.iconscout.com/illustration/premium/thumb/team-working-on-project-illustration-download-in-svg-png-gif-file-formats--business-management-office-concept-pack-people-illustrations-6269601.png?f=webp" 
                alt="DevCraft Team"
                className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

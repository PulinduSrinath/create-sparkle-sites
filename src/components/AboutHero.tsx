import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-[#0a192f]">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white font-display uppercase tracking-tight">
          About Us
        </h1>
      </motion.div>
    </section>
  );
};

export default AboutHero;

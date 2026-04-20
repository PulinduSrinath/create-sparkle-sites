import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const FeaturedService = () => {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-white border border-gray-100 shadow-xl overflow-hidden grid lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-auto overflow-hidden relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000" 
              alt="POS System"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          </motion.div>

          {/* Content Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Featured System
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a192f] mb-6 leading-tight">
                Take your business to the next level with our <span className="text-primary">POS system</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Empower your retail or hospitality business with our cutting-edge 
                Point of Sale solution. From inventory management to real-time 
                analytics, we've got you covered.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold bg-white border-2 border-gray-100 text-gray-800 hover:bg-gray-50 hover:border-primary/20 transition-all shadow-sm"
              >
                <PlayCircle className="text-red-500" size={24} />
                Watch Demo Video
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;

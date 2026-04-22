import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "ZetasBuild's point-of-sale solution has been a game-changer for our business. The system is intuitive, lightning-fast, and provides the detailed insights we need to manage our multi-location stores effectively.",
    rating: 5,
  },
  {
    text: "The technical support and professionalism of the ZetasBuild team are unmatched. They custom-built our patient management portal with seamless efficiency, helping us go completely digital.",
    rating: 5,
  },
  {
    text: "Scaling our SaaS platform was a nightmare until we partnered with ZetasBuild. Their architectural redesign allowed us to handle a 400% increase in traffic without a single second of downtime.",
    rating: 5,
  },
  {
    text: "The FinTech security audit performed by ZetasBuild was the most rigorous we've seen. They identified critical vulnerabilities in our legacy code and helped us secure our global API gateway.",
    rating: 5,
  },
  {
    text: "Their UI/UX team transformed our clunky enterprise app into a sleek, modern experience that our employees actually love using. The boost in internal productivity has been remarkable.",
    rating: 5,
  },
  {
    text: "From mobile app engineering to cloud-native database management, ZetasBuild is a powerhouse. They are our go-to partner for all mission-critical software engineering needs.",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative quotes bg */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 pointer-events-none">
        <Quote size={300} className="text-gray-900" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f] mb-4">
              What Our Clients Said <br />
              About <span className="text-primary">ZetasBuild</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 35 },
                opacity: { duration: 0.3 }
              }}
              className="absolute w-full"
            >
              <div className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100 flex flex-col items-start relative group hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 min-h-[300px]">
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-10 italic relative z-10">
                  "{testimonials[index].text}"
                </p>

                <div className="mt-auto flex items-center justify-end w-full">
                  <div className="text-gray-200 group-hover:text-primary/10 transition-colors">
                    <Quote size={60} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-transparent transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`transition-all duration-500 rounded-full h-1.5 ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-transparent transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

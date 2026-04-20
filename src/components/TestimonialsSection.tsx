import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Samuel Abraham",
    position: "CEO, Glocal Partners",
    text: "DevCraft's point-of-sale solution has been a game-changer for our business. The system is intuitive, lightning-fast, and provides the detailed insights we need to manage our multi-location stores effectively.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    name: "Dr. Priyantha Jayakody",
    position: "Director, Smart Life Medical",
    text: "The technical support and professionalism of the DevCraft team are unmatched. They custom-built our patient management portal with seamless efficiency, helping us go completely digital.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quotes bg */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12">
        <Quote size={300} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f] mb-4">
              What Our Clients Said <br />
              About <span className="text-primary">DevCraft</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 flex flex-col items-start relative group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-[#0a192f]">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-semibold">{testimonial.position}</p>
                </div>
              </div>

              <div className="absolute top-10 right-10 text-gray-200 group-hover:text-primary/10 transition-colors">
                <Quote size={60} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

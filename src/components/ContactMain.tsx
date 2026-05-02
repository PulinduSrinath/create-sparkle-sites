import { motion } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactMain = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error("Please complete the reCAPTCHA verification");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "zetasbuild@gmail.com",
        "g-recaptcha-response": recaptchaValue,
      };

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || serviceId === "YOUR_SERVICE_ID") {
        console.warn("EmailJS Service ID is not configured. Simulating success...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Message sent successfully! (Simulated)");
        reset();
        recaptchaRef.current?.reset();
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
      recaptchaRef.current?.reset();
    } catch (error: any) {
      console.error("Email sending failed:", error);
      const errorMsg = error?.text || error?.message || "Please verify your EmailJS configuration.";
      toast.error(`Failed to send message: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportTypes = [
    "Sales support",
    "Technical support",
    "Inquiries",
    "Complaints",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Left Column: Info */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-6">Send us a message</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              At ZetasBuild, we value your feedback and strive to continuously improve our 
              products and services. Your input is invaluable to us, so please don't hesitate 
              to share your thoughts and suggestions with us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              We look forward to hearing from you and assisting you in any way we can. 
              Thank you for choosing ZetasBuild.
            </p>

            <div className="space-y-4">
              {supportTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50/50 p-10 lg:p-16 border-l border-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400`}
                    {...register("name")}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400`}
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Subject"
                  className={`w-full bg-white border ${errors.subject ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400`}
                  {...register("subject")}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none`}
                  {...register("message")}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <div className="pt-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6Lc2QtUsAAAAAHTshKIx3a6CpJFrZpaneCRxt2Kz"}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMain;

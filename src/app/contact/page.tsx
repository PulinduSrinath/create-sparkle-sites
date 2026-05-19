import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, Mail, Phone, ArrowUpRight, 
  CheckCircle2, Send, Loader2, 
  Facebook, Linkedin, Instagram, MessageCircle 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";

// ==========================================
// CONTACT HERO SECTION
// ==========================================
const ContactHero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>
          <motion.path 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            d="M0 100 Q 250 500 500 100 T 1000 100" fill="none" stroke="url(#line-grad)" strokeWidth="1" 
          />
        </svg>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
          <div className="lg:w-3/5 text-left w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-6 sm:mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />Establish a Partnership
            </motion.div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-display leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-10 tracking-tighter text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
              Let's Build <br /><span className="gradient-text drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">Something Exceptional.</span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-foreground/70 text-sm sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-medium mb-8 sm:mb-12">
              Connect with the precision engineers and digital visionaries crafting the next generation of scalable legacies.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 sm:gap-4">
              <a href="mailto:info@zetasbuild.com" className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/70 transition-all cursor-pointer group shadow-[0_0_12px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                <Mail size={15} className="flex-shrink-0" /><span className="text-xs sm:text-sm font-bold uppercase tracking-widest">info@zetasbuild.com</span><ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
              </a>
              <a href="tel:+94771914260" className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 text-foreground hover:border-white/40 hover:bg-white/10 transition-all cursor-pointer group">
                <Phone size={15} className="flex-shrink-0 text-primary" /><span className="text-xs sm:text-sm font-bold uppercase tracking-widest">+94 77 191 4260</span>
              </a>
            </motion.div>
          </div>
          <div className="lg:w-2/5 relative hidden lg:flex justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.5, type: "spring" }} className="relative w-80 h-? flex items-center justify-center py-20">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-[140%] h-[140%] border border-white/5 rounded-full" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-[110%] h-[110%] border border-white/10 rounded-full" />
              </div>
              <div className="relative w-64 h-64 rounded-[3rem] glass-card border-white/20 bg-white/[0.01] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-30" />
                <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity }} className="z-10 text-primary opacity-60 flex items-center justify-center">
                  <MessageSquare size={80} className="drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
                </motion.div>
                <div className="absolute top-4 right-4 w-12 h-1 bg-primary/20 rounded-full rotate-45" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border border-secondary/20 rounded-lg rotate-[30deg]" />
              </div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-4 py-2.5 px-5 glass-card rounded-2xl text-[10px] font-bold text-primary uppercase tracking-[0.2em] border border-primary/40 shadow-[0_0_20px_rgba(34,211,238,0.15)]">Inquiry</motion.div>
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-10 -left-10 py-2.5 px-5 glass-card rounded-2xl text-[10px] font-bold text-secondary uppercase tracking-[0.2em] border border-secondary/40 shadow-[0_0_20px_rgba(168,85,247,0.15)]">Consultation</motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    </section>
  );
};

// ==========================================
// CONTACT MAIN SECTION
// ==========================================
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
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error("Please complete the reCAPTCHA verification");
      setIsSubmitting(false);
      return;
    }
    try {
      const templateParams = { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message, to_email: "zetasbuild@gmail.com", "g-recaptcha-response": recaptchaValue };
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || serviceId === "YOUR_SERVICE_ID") {
        console.warn("EmailJS Service ID is not configured. Simulating success...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Message sent successfully! (Simulated)");
        reset(); recaptchaRef.current?.reset(); setIsSubmitting(false); return;
      }
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset(); recaptchaRef.current?.reset();
    } catch (error: unknown) {
      const err = error as { text?: string; message?: string };
      console.error("Email sending failed:", err);
      const errorMsg = err?.text || err?.message || "Please verify your EmailJS configuration.";
      toast.error(`Failed to send message: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportTypes = ["Sales support", "Technical support", "Inquiries", "Complaints"];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 bg-card rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-border">
          <div className="p-6 sm:p-10 lg:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Send us a message</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">At ZetasBuild, we value your feedback and strive to continuously improve our products and services. Your input is invaluable to us, so please don't hesitate to share your thoughts and suggestions with us.</p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">We look forward to hearing from you and assisting you in any way we can. Thank you for choosing ZetasBuild.</p>
            <div className="space-y-4">{supportTypes.map((type) => <div key={type} className="flex items-center gap-3 text-foreground"><CheckCircle2 size={18} className="text-primary" /><span className="font-medium">{type}</span></div>)}</div>
          </div>
          <div className="bg-muted/50 p-6 sm:p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div><input type="text" placeholder="Your Name" className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-border'} text-foreground rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground`} {...register("name")} />{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}</div>
                <div><input type="email" placeholder="Your Email" className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border'} text-foreground rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground`} {...register("email")} />{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}</div>
              </div>
              <div><input type="text" placeholder="Your Subject" className={`w-full bg-background border ${errors.subject ? 'border-red-500' : 'border-border'} text-foreground rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground`} {...register("subject")} />{errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}</div>
              <div><textarea placeholder="Your Message" rows={6} className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-border'} text-foreground rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground resize-none`} {...register("message")}></textarea>{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}</div>
              <div className="pt-2 overflow-x-auto"><ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6Lc2QtUsAAAAAHTshKIx3a6CpJFrZpaneCRxt2Kz"} /></div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed w-full">
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}{isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// CONTACT NUMBERS SECTION
// ==========================================
const WhatsAppIcon = ({ size = 20 }: {size?: number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438-9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.81 11.81 0 005.925 1.585h.005c6.635 0 12.03-5.396 12.033-12.03a11.825 11.825 0 00-3.48-8.504" />
  </svg>
);

const ContactNumbers = () => {
  const contacts = [{ label: "Contact Number", number: "+94 77 191 4260" }];
  return (
    <section className="py-12 sm:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center justify-center mb-16">
          {contacts.map((contact, i) => (
            <motion.div key={contact.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">{contact.label}</h3>
              <a href="tel:+94771914260" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tighter group-hover:scale-105 transition-transform duration-300 block hover:opacity-80">{contact.number}</a>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold text-foreground">Email Channels</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">General Inquiry</span>
              <a href="mailto:info@zetasbuild.com" className="text-lg sm:text-2xl md:text-3xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity break-all">info@zetasbuild.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Technical Support</span>
              <a href="mailto:support@zetasbuild.com" className="text-lg sm:text-2xl md:text-3xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity break-all">support@zetasbuild.com</a>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { Icon: Facebook,     href: "https://www.facebook.com/share/1QTWVwMz7h/?mibextid=wwXIfr", label: "Facebook",  color: "border-[#1877F2]/50 bg-[#1877F2]/10 text-[#1877F2] shadow-[0_0_18px_rgba(24,119,242,0.2)] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/80 hover:shadow-[0_0_28px_rgba(24,119,242,0.4)]" },
            { Icon: Linkedin,     href: "https://www.linkedin.com/in/zetasbuild",                        label: "LinkedIn",  color: "border-[#0A66C2]/50 bg-[#0A66C2]/10 text-[#0A66C2] shadow-[0_0_18px_rgba(10,102,194,0.2)] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/80 hover:shadow-[0_0_28px_rgba(10,102,194,0.4)]" },
            { Icon: WhatsAppIcon, href: "https://wa.me/94771914260",                                    label: "WhatsApp", color: "border-[#25D366]/50 bg-[#25D366]/10 text-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.2)] hover:bg-[#25D366]/20 hover:border-[#25D366]/80 hover:shadow-[0_0_28px_rgba(37,211,102,0.4)]" },
            { Icon: Instagram,    href: "https://www.instagram.com/zetasbuild?igsh=Z3NvNmE0eDN1eWo3&utm_source=qr", label: "Instagram", color: "border-[#E1306C]/50 bg-[#E1306C]/10 text-[#E1306C] shadow-[0_0_18px_rgba(225,48,108,0.2)] hover:bg-[#E1306C]/20 hover:border-[#E1306C]/80 hover:shadow-[0_0_28px_rgba(225,48,108,0.4)]" },
          ].map(({ Icon, href, label, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border font-bold text-sm uppercase tracking-widest transition-all duration-300 ${color}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// MAIN CONTACT PAGE
// ==========================================
const Contact = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <main className="pt-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ContactHero />
          <ContactMain />
          <ContactNumbers />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

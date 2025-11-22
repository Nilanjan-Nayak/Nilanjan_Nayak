import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle,
  Linkedin, Github, Twitter, Globe, Clock, MessageSquare,
  Sparkles, ArrowUpRight, Calendar
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@nilanjannayak.com',
      link: 'mailto:hello@nilanjannayak.com',
      description: 'Drop me a line anytime',
      gradient: 'from-[#3066be] to-[#5AA8D6]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      description: 'Mon-Fri from 9am to 6pm',
      gradient: 'from-[#5AA8D6] to-[#00bfff]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#',
      description: 'Remote & On-site available',
      gradient: 'from-[#00bfff] to-[#5AA8D6]',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  const benefits = [
    { icon: Clock, text: 'Fast 24h response time' },
    { icon: CheckCircle2, text: 'Proven success track record' },
    { icon: MessageSquare, text: 'Clear communication' },
    { icon: Calendar, text: 'Flexible scheduling' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative min-h-screen py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#02000d] via-[#050939] to-[#02000d] overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Ambient Lighting */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3066be] rounded-full blur-[180px] opacity-12 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#5AA8D6] rounded-full blur-[180px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#131c80]/30 via-[#3066be]/20 to-[#131c80]/30 backdrop-blur-xl border border-[#5AA8D6]/30 rounded-full mb-10 shadow-[0_0_40px_rgba(90,168,214,0.2)]"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} className="text-[#5AA8D6]" />
              </motion.div>
            </div>
            <span className="text-sm font-semibold text-slate-200 uppercase tracking-[0.15em]">
              Let's Connect
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-[#5AA8D6] via-[#3066be] to-[#00bfff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(90,168,214,0.4)]">
              Get In Touch
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind? Let's collaborate and create something extraordinary together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4"
            >
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                    className="group relative block bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-2xl p-6 border-2 border-[#131c80]/40 hover:border-[#5AA8D6]/60 transition-all duration-500 shadow-[0_0_40px_rgba(19,28,128,0.3)] hover:shadow-[0_0_60px_rgba(90,168,214,0.5)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/5 to-[#5AA8D6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div className="relative flex-shrink-0 w-14 h-14">
                        <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-xl shadow-[0_0_30px_rgba(90,168,214,0.4)] group-hover:scale-110 transition-transform duration-500`} />
                        <div className="absolute inset-[2px] bg-gradient-to-br from-[#050939] to-[#02000d] rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-[#5AA8D6]" strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{method.label}</div>
                        <div className="text-base font-bold text-white mb-1 group-hover:text-[#5AA8D6] transition-colors">
                          {method.value}
                        </div>
                        <div className="text-sm text-slate-400">{method.description}</div>
                      </div>

                      <ArrowUpRight size={20} className="text-slate-600 group-hover:text-[#5AA8D6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-2xl p-6 border-2 border-[#131c80]/40 shadow-[0_0_40px_rgba(19,28,128,0.3)]"
            >
              <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-full aspect-square bg-[#131c80]/30 rounded-xl border border-[#3066be]/20 hover:border-[#5AA8D6]/50 flex items-center justify-center transition-all hover:shadow-[0_0_30px_rgba(90,168,214,0.3)]"
                      aria-label={social.label}
                    >
                      <Icon size={20} className="text-slate-400 group-hover:text-[#5AA8D6] transition-colors" strokeWidth={2.5} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 }}
              className="bg-gradient-to-br from-[#3066be]/10 to-[#5AA8D6]/10 backdrop-blur-xl rounded-2xl p-6 border border-[#3066be]/30"
            >
              <h3 className="text-lg font-bold text-white mb-4">Why Work Together?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.1 + idx * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-[#5AA8D6]" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm">{benefit.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative bg-gradient-to-br from-[#07203f]/60 to-[#050939]/60 backdrop-blur-3xl rounded-3xl p-8 border-2 border-[#131c80]/40 shadow-[0_0_60px_rgba(19,28,128,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/5 to-transparent rounded-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-8">Fill out the form and I'll get back to you within 24 hours</p>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-2 border-emerald-500/50 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-emerald-400 font-semibold mb-1">Message Sent Successfully!</div>
                    <div className="text-sm text-emerald-300/80">I'll get back to you as soon as possible.</div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Name <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full h-12 px-4 bg-[#131c80]/30 border-2 border-[#3066be]/30 focus:border-[#5AA8D6] rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3066be]/10 to-[#5AA8D6]/10 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full h-12 px-4 bg-[#131c80]/30 border-2 border-[#3066be]/30 focus:border-[#5AA8D6] rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                    {focusedField === 'email' && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3066be]/10 to-[#5AA8D6]/10 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
                    Subject <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full h-12 px-4 bg-[#131c80]/30 border-2 border-[#3066be]/30 focus:border-[#5AA8D6] rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all text-sm"
                      placeholder="Project Inquiry"
                    />
                    {focusedField === 'subject' && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3066be]/10 to-[#5AA8D6]/10 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Message <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#131c80]/30 border-2 border-[#3066be]/30 focus:border-[#5AA8D6] rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all resize-none text-sm"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3066be]/10 to-[#5AA8D6]/10 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-2">Minimum 10 characters required</div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="group relative w-full h-14 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(90,168,214,0.4)] hover:shadow-[0_0_60px_rgba(90,168,214,0.6)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                        <ArrowUpRight size={18} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

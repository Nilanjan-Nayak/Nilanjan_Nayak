import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail, MapPin, Phone, Send, CheckCircle2,
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
      className="relative py-20 lg:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Elements - Matching other sections */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-[#5AA8D6]/10 backdrop-blur-sm border border-[#5AA8D6]/20 rounded-full mb-6"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-[#5AA8D6]" />
              </motion.div>
            </div>
            <span className="text-sm font-semibold text-[#5AA8D6] uppercase tracking-wider">
              Let's Connect
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] to-[#3066be]">
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

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-16">
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
                    className="group relative block bg-[#0a0e1a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f35] hover:border-[#3066be]/30 transition-all duration-300"
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${method.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{method.label}</div>
                        <div className="text-base font-bold text-white mb-1 group-hover:text-[#5AA8D6] transition-colors">
                          {method.value}
                        </div>
                        <div className="text-sm text-slate-400">{method.description}</div>
                      </div>

                      <ArrowUpRight size={18} className="text-slate-600 group-hover:text-[#5AA8D6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
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
              className="bg-[#0a0e1a]/80 backdrop-blur-sm rounded-xl p-6 border border-[#1a1f35]"
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-full aspect-square bg-[#1a1f35]/50 rounded-lg border border-[#3066be]/20 hover:border-[#5AA8D6]/50 flex items-center justify-center transition-all"
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
              className="bg-gradient-to-br from-[#3066be]/10 to-[#5AA8D6]/10 backdrop-blur-sm rounded-xl p-6 border border-[#3066be]/20"
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
            className="relative bg-[#0a0e1a]/80 backdrop-blur-sm rounded-xl p-8 border border-[#1a1f35]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-8">Fill out the form and I'll get back to you within 24 hours</p>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start gap-3"
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
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                    Your Name <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#02000d] border border-[#1a1f35] rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-[#5AA8D6] focus:ring-1 focus:ring-[#5AA8D6] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                    Email Address <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#02000d] border border-[#1a1f35] rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-[#5AA8D6] focus:ring-1 focus:ring-[#5AA8D6] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">
                    Subject <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#02000d] border border-[#1a1f35] rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-[#5AA8D6] focus:ring-1 focus:ring-[#5AA8D6] transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                    Your Message <span className="text-[#5AA8D6]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#02000d] border border-[#1a1f35] rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-[#5AA8D6] focus:ring-1 focus:ring-[#5AA8D6] transition-all resize-none"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-2">Minimum 10 characters required</div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="group relative w-full py-4 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00bfff] text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-[#5AA8D6]/30 hover:shadow-[#5AA8D6]/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center gap-2"
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


    </section>
  );
}
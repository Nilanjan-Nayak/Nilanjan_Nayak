import { Award, Briefcase, GraduationCap, TrendingUp, Code2, Rocket, Heart, Target, ArrowUpRight, CheckCircle2, Sparkles, Download, Mail, Linkedin, Github, MapPin, Calendar, Users, ExternalLink, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview'| 'Qualification' | 'experience' >('overview');

  const stats = [
    { 
      icon: Briefcase, 
      value: '5+', 
      label: 'Years Experience',
      subtext: 'In Production',
      color: 'from-[#3066be] to-[#5AA8D6]',
    },
    { 
      icon: Award, 
      value: '50+', 
      label: 'Projects Delivered',
      subtext: 'Successfully',
      color: 'from-[#5AA8D6] to-[#00bfff]',
    },
    { 
      icon: Users, 
      value: '98%', 
      label: 'Client Satisfaction',
      subtext: 'Average Rating',
      color: 'from-[#00bfff] to-[#5AA8D6]',
    },
    { 
      icon: Shield, 
      value: '15+', 
      label: 'Certifications',
      subtext: 'Industry Recognized',
      color: 'from-[#3066be] to-[#131c80]',
    },
  ];

  const experiences = [
    {
      role: 'TATA',
      company: 'TATA CONSULTANCY SERVICES',
      location: 'Remote',
      period: '2022 - Present',
      duration: '3 years',
      type: 'Full-time',
      description: 'Leading development of enterprise-level web applications, architecting scalable solutions, and mentoring junior developers.',
      achievements: [
        'Architected microservices infrastructure serving 500K+ users',
        'Led cross-functional team of 8 developers and designers',
        'Reduced deployment time by 60% through CI/CD automation',
        'Delivered 15+ mission-critical projects on time and under budget'
      ],
      tech: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker', 'PostgreSQL'],
      gradient: 'from-[#3066be] to-[#5AA8D6]',
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Hybrid',
      period: '2020 - 2022',
      duration: '2 years',
      type: 'Full-time',
      description: 'Specialized in building responsive, accessible user interfaces for high-traffic web applications.',
      achievements: [
        'Improved Core Web Vitals scores by 45% across product suite',
        'Built component library used by 20+ development teams',
        'Achieved 98+ accessibility scores on all major projects',
        'Mentored 5 junior developers in modern frontend practices'
      ],
      tech: ['React', 'Vue.js', 'Tailwind CSS', 'Jest', 'GraphQL'],
      gradient: 'from-[#5AA8D6] to-[#00bfff]',
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'On-site',
      period: '2019 - 2020',
      duration: '1 year',
      type: 'Full-time',
      description: 'Developed and maintained multiple client websites and web applications in fast-paced startup environment.',
      achievements: [
        'Delivered 12+ client projects with 100% satisfaction rate',
        'Implemented responsive designs across 15+ landing pages',
        'Collaborated with UX team to improve conversion rates by 35%',
        'Participated in code reviews and agile ceremonies'
      ],
      tech: ['JavaScript', 'HTML/CSS', 'jQuery', 'PHP', 'MySQL'],
      gradient: 'from-[#131c80] to-[#3066be]',
    },
  ];

  const expertise = [
    {
      category: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React & Next.js', level: 95, years: '5 years' },
        { name: 'TypeScript', level: 90, years: '4 years' },
        { name: 'Tailwind CSS', level: 92, years: '3 years' },
        { name: 'State Management', level: 88, years: '4 years' },
      ],
      color: 'text-[#5AA8D6]',
      bgColor: 'from-[#3066be]/10 to-[#5AA8D6]/10'
    },
    {
      category: 'Backend Development',
      icon: Zap,
      skills: [
        { name: 'Node.js & Express', level: 90, years: '4 years' },
        { name: 'RESTful APIs', level: 93, years: '5 years' },
        { name: 'Database Design', level: 87, years: '4 years' },
        { name: 'Authentication', level: 91, years: '4 years' },
      ],
      color: 'text-[#00bfff]',
      bgColor: 'from-[#5AA8D6]/10 to-[#00bfff]/10'
    },
    {
      category: 'DevOps & Cloud',
      icon: Rocket,
      skills: [
        { name: 'AWS Services', level: 85, years: '3 years' },
        { name: 'Docker & K8s', level: 82, years: '2 years' },
        { name: 'CI/CD Pipelines', level: 88, years: '3 years' },
        { name: 'Monitoring', level: 84, years: '3 years' },
      ],
      color: 'text-[#3066be]',
      bgColor: 'from-[#131c80]/10 to-[#3066be]/10'
    },
  ];

  const certifications = [
    { name: 'TATA DATA VISUALISATION', issuer: 'TATA + Job Simulation on Forage', year: ' August 2024' },
    { name: ' INDUSTRIAL INTENSIVE ACTIVATE', issuer: 'ARDENT COMPUTECH PVT LTD', year: 'October 30, 2023 - November 30, 2023' },
    { name: 'BASIC WEB DEVELOPMENT ', issuer: 'AEONIX RESEARCH & INNOVATIONS LLP', year: 'OCT 2024 – OCT 2024' },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#02000d] via-[#050939] to-[#02000d] overflow-hidden">
      {/* Refined Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(19,28,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(19,28,128,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#131c80] rounded-full blur-[150px] opacity-8" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Professional Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#131c80]/20 backdrop-blur-sm border border-[#3066be]/20 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00bfff] animate-pulse" />
            <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">Professional Profile</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Nilanjan Nayak
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-[#5AA8D6] font-semibold mb-4">
            Senior Full-Stack Developer & Solution Architect
          </p>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Transforming complex business requirements into elegant, scalable solutions. 
            Specialized in modern web technologies with a proven track record of delivering 
            high-impact projects for enterprise clients.
          </p>

          {/* Location & Availability */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#5AA8D6]" />
              <span>Based in India</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#5AA8D6]" />
              <span>Available for Projects</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#5AA8D6]" />
              <span>Remote Friendly</span>
            </div>
          </div>
        </div>

        {/* Hero Profile Section */}
        <div className="grid lg:grid-cols-[380px,1fr] gap-8 lg:gap-12 mb-20 max-w-6xl mx-auto">
          
          {/* Professional Photo Card */}
          <div className="relative group mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/30 to-[#5AA8D6]/30 rounded-3xl blur-2xl" />
            
            <div className="relative aspect-[3/4] max-w-[380px] rounded-3xl overflow-hidden border-2 border-[#131c80]/30 shadow-[0_0_80px_rgba(19,28,128,0.4)] group-hover:border-[#3066be]/50 transition-all duration-500">
              <img
                src="src\image\IMG-20251021-WA0067.jpg"
                alt="Nilanjan Nayak"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#02000d] via-[#02000d]/50 to-transparent" />
              
              {/* Professional Badge */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-2xl bg-[#050939]/90 border border-[#3066be]/50 rounded-2xl p-5 shadow-[0_0_40px_rgba(19,28,128,0.8)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfff] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bfff]" />
                      </div>
                      <span className="text-xs font-bold text-slate-100 uppercase tracking-wider">Available</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Open for freelance & full-time opportunities
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a href="mailto:your.email@example.com" className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] text-white text-xs font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(90,168,214,0.5)] transition-all">
                    <Mail size={14} />
                    <span>Contact</span>
                  </a>
                  <a href="/resume.pdf" download className="flex items-center justify-center gap-2 px-3 py-2 border border-[#3066be]/50 text-slate-300 text-xs font-semibold rounded-lg hover:bg-[#131c80]/30 transition-all">
                    <Download size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#07203f]/30 to-[#050939]/30 backdrop-blur-xl rounded-3xl p-8 border border-[#131c80]/30">
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <Briefcase className="text-[#5AA8D6]" size={24} />
                Executive Summary
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Results-driven Full-Stack Developer with <span className="text-[#5AA8D6] font-semibold">5+ years of experience</span> delivering 
                  enterprise-grade web applications. Proven expertise in modern JavaScript frameworks, cloud architecture, 
                  and agile methodologies.
                </p>
                
                <p>
                  Demonstrated ability to lead cross-functional teams, architect scalable solutions, and drive projects from 
                  concept to deployment. Strong track record of improving performance metrics, reducing costs, and exceeding 
                  client expectations.
                </p>

                <div className="pt-4 border-t border-[#131c80]/30">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Development', 'System Architecture', 'Team Leadership', 'Agile/Scrum', 'Cloud Solutions', 'Performance Optimization'].map((comp, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#131c80]/30 border border-[#3066be]/20 rounded-lg text-xs text-slate-300 font-medium">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-[#07203f]/30 to-[#050939]/30 backdrop-blur-xl rounded-3xl p-8 border border-[#131c80]/30">
              <h4 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Award className="text-[#5AA8D6]" size={20} />
                Professional Certifications
              </h4>
              
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#050939]/30 rounded-xl border border-[#131c80]/20 hover:border-[#3066be]/30 transition-all">
                    <CheckCircle2 size={16} className="text-[#00bfff] flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-200 mb-0.5">{cert.name}</div>
                      <div className="text-xs text-slate-400">{cert.issuer} • {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        

        {/* Tab Navigation */}
        <div className="mb-12 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 p-2 bg-[#050939]/50 backdrop-blur-xl rounded-2xl border border-[#131c80]/30">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'Qualification', label: 'Qualification', icon: Briefcase },
              { id: 'experience', label: 'Experience', icon: Code2 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#3066be] to-[#5AA8D6] text-white shadow-[0_0_20px_rgba(90,168,214,0.4)]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {[
                {
                  icon: Rocket,
                  title: 'Innovation Driven',
                  description: 'Leveraging cutting-edge technologies and modern frameworks to build future-proof solutions that scale with business growth.',
                  highlights: ['AI/ML Integration', 'Cloud-Native Architecture', 'Microservices Design']
                },
                {
                  icon: Target,
                  title: 'Quality Focused',
                  description: 'Committed to writing clean, maintainable code following industry best practices, SOLID principles, and comprehensive testing.',
                  highlights: ['Test-Driven Development', 'Code Review Excellence', 'Documentation Standards']
                },
                {
                  icon: Heart,
                  title: 'User-Centric Design',
                  description: 'Creating intuitive interfaces with exceptional UX, ensuring accessibility standards and performance optimization at every step.',
                  highlights: ['WCAG 2.1 Compliance', 'Performance Metrics', 'Mobile-First Approach']
                },
                {
                  icon: Users,
                  title: 'Collaborative Leadership',
                  description: 'Fostering team growth through mentorship, knowledge sharing, and promoting best practices across development teams.',
                  highlights: ['Agile Methodologies', 'Technical Mentoring', 'Cross-Team Collaboration']
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="group bg-gradient-to-br from-[#07203f]/30 to-[#050939]/30 backdrop-blur-xl rounded-2xl p-6 border border-[#131c80]/30 hover:border-[#3066be]/50 transition-all duration-500">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3066be]/20 to-[#5AA8D6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-[#5AA8D6]" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-[#131c80]/30 border border-[#3066be]/20 rounded text-slate-300">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-fade-in">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredExp(index)}
                  onMouseLeave={() => setHoveredExp(null)}
                  className={`group relative bg-gradient-to-br from-[#07203f]/40 to-[#050939]/40 backdrop-blur-xl rounded-3xl p-8 border-2 ${
                    hoveredExp === index ? 'border-[#5AA8D6]' : 'border-[#131c80]/30'
                  } transition-all duration-500`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${exp.gradient} rounded-l-3xl`} />
                  
                  <div className="ml-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-100 mb-2">{exp.role}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                          <span className="text-[#5AA8D6] font-semibold">{exp.company}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400">{exp.location}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400">{exp.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-[#131c80]/40 border border-[#3066be]/30 rounded-xl text-sm text-slate-300 font-mono">
                          {exp.period}
                        </span>
                        <span className="px-4 py-2 bg-[#050939]/60 border border-[#131c80]/30 rounded-xl text-sm text-slate-400 font-mono">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Achievements</h5>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <CheckCircle2 size={16} className="text-[#00bfff] flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#131c80]/30">
                      <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#131c80]/30 border border-[#3066be]/30 rounded-lg text-sm text-slate-300 font-medium hover:bg-[#3066be]/20 hover:border-[#5AA8D6]/50 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Expertise Tab */}
          {activeTab === 'Qualification' && (
            <div className="space-y-8 animate-fade-in">
              {expertise.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-[#07203f]/30 to-[#050939]/30 backdrop-blur-xl rounded-3xl p-8 border border-[#131c80]/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.bgColor} flex items-center justify-center`}>
                        <Icon className={category.color} size={24} />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-100">{category.category}</h4>
                    </div>

                    <div className="space-y-5">
                      {category.skills.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-slate-500 font-mono">{skill.years}</span>
                              <span className="text-sm text-[#5AA8D6] font-mono font-semibold">{skill.level}%</span>
                            </div>
                          </div>
                          <div className="h-2 bg-[#131c80]/30 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-full shadow-[0_0_10px_rgba(90,168,214,0.5)] transition-all duration-1000"
                              style={{ 
                                width: `${skill.level}%`,
                                animation: `slideIn 1s ease-out ${i * 0.1}s backwards`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative group bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5AA8D6] to-[#00bfff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:your.email@example.com"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#3066be] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                >
                  <Mail size={20} />
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
                
                <div className="flex gap-3 justify-center">
                  {[
                    { icon: Github, href: "https://github.com" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: ExternalLink, href: "#portfolio" }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-[#3066be] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { width: 0; opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

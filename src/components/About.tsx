import { ChevronRight, Download, ExternalLink } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolio';

export default function About() {

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-transparent overflow-hidden">
      {/* Background Elements Removed to show global fixed background */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-400 mb-4">
            Get To Know Me
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] to-[#3066be]">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A passionate software engineer with a knack for building robust and scalable applications.
            Explore my journey, skills, and what drives me to create.
          </p>
        </div>



        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Experience & Bio */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">

            {/* Bio Section with Profile Image */}
            <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-6 sm:gap-8 items-start">
              {/* Profile Image - Ultra Premium Enlarged Card */}
              <div className="relative group mx-auto sm:mx-0 w-full max-w-[280px] sm:max-w-[260px] md:max-w-[280px]">


                {/* Holographic Animated Border */}
                <div className="absolute -inset-[3px] bg-gradient-to-r from-[#3066be] via-[#5AA8D6] via-[#00bfff] to-[#3066be] rounded-3xl opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-700 animate-gradient-x"
                  style={{ backgroundSize: '200% 200%' }} />

                {/* Outer Glow Ring */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#3066be]/30 via-transparent to-[#5AA8D6]/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Main Card Container with Hexagonal Accent */}
                <div className="relative bg-gradient-to-br from-[#0a0e1a] via-[#050939] to-[#02000d] rounded-3xl p-2 shadow-2xl">
                  {/* Inner Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5AA8D6]/30 via-transparent to-[#3066be]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Hexagonal Corner Accents */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="none" stroke="url(#gradient1)" strokeWidth="4" className="animate-pulse" />

                    </svg>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full rotate-180">
                      <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="none" stroke="url(#gradient2)" strokeWidth="4" className="animate-pulse" />

                    </svg>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0e1a] to-[#02000d]">
                    {/* Profile Image */}
                    <img
                      src={aboutData.profileImage}
                      alt="Developer Profile"
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Animated Scan Line */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5AA8D6]/15 to-transparent h-full animate-scan" />
                    </div>

                    {/* Tech Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(90,168,214,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(90,168,214,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02000d]/95 via-[#02000d]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3066be]/10 via-transparent to-[#5AA8D6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />



                    {/* Status Badge - Premium Enlarged */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-gradient-to-r from-[#0a0e1a]/98 to-[#050939]/98 backdrop-blur-xl border-2 border-[#5AA8D6]/70 rounded-xl shadow-2xl shadow-[#5AA8D6]/40">
                        <div className="flex items-center gap-2.5">
                          <div className="relative flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] animate-pulse" />
                            <div className="absolute w-4 h-4 rounded-full bg-[#27c93f]/30 animate-ping" />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono text-white font-black uppercase tracking-wider">Active on Study</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-4 bg-gradient-to-t from-[#3066be] to-[#5AA8D6] rounded-full shadow-lg shadow-[#5AA8D6]/50" />
                          <div className="w-1 h-5 bg-gradient-to-t from-[#5AA8D6] to-[#00bfff] rounded-full shadow-lg shadow-[#00bfff]/50" />
                          <div className="w-1 h-4 bg-gradient-to-t from-[#00bfff] to-[#3066be] rounded-full shadow-lg shadow-[#3066be]/50" />
                        </div>
                      </div>
                    </div>

                    {/* Corner Tech Indicators - Enhanced */}
                    <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5AA8D6] via-[#5AA8D6]/60 to-transparent rounded-full" />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#5AA8D6] via-[#5AA8D6]/60 to-transparent rounded-full" />
                      <div className="absolute top-2 left-2 w-3 h-3 bg-[#5AA8D6] rounded-full animate-pulse shadow-xl shadow-[#5AA8D6]/70">
                        <div className="absolute inset-0 bg-[#5AA8D6] rounded-full animate-ping" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#5AA8D6] via-[#5AA8D6]/60 to-transparent rounded-full" />
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-[#5AA8D6] via-[#5AA8D6]/60 to-transparent rounded-full" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#5AA8D6] rounded-full animate-pulse shadow-xl shadow-[#5AA8D6]/70">
                        <div className="absolute inset-0 bg-[#5AA8D6] rounded-full animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Brackets - Premium Enlarged */}
                <div className="absolute -top-4 -left-4 w-10 h-10 opacity-90">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#5AA8D6] to-transparent rounded-full shadow-lg shadow-[#5AA8D6]/50" />
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#5AA8D6] to-transparent rounded-full shadow-lg shadow-[#5AA8D6]/50" />
                  <div className="absolute top-0 left-0 w-4 h-4 border-2 border-[#5AA8D6] rounded-tl-xl shadow-lg shadow-[#5AA8D6]/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 opacity-90">
                  <div className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-l from-[#5AA8D6] to-transparent rounded-full shadow-lg shadow-[#5AA8D6]/50" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-full bg-gradient-to-t from-[#5AA8D6] to-transparent rounded-full shadow-lg shadow-[#5AA8D6]/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-2 border-[#5AA8D6] rounded-br-xl shadow-lg shadow-[#5AA8D6]/50" />
                </div>

              </div>

              {/* Bio Text */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                  <span className="w-6 sm:w-8 h-1 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-full" />
                  Professional Journey
                </h3>
                <div className="prose prose-invert max-w-none text-slate-400 space-y-3 sm:space-y-4">
                  {aboutData.summary.text.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {aboutData.summary.coreCompetencies.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-[#5AA8D6] bg-[#5AA8D6]/10 border border-[#5AA8D6]/20 rounded-full hover:bg-[#5AA8D6]/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 h-1 bg-gradient-to-r from-[#5AA8D6] to-[#00bfff] rounded-full" />
                Study
              </h3>

              <div className="relative space-y-6 sm:space-y-8 pl-6 sm:pl-8 border-l border-[#1a1f35]">
                {aboutData.experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[27px] sm:-left-[39px] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] sm:border-4 border-[#02000d] bg-gradient-to-br ${exp.gradient} group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(90,168,214,0.3)]`} />

                    <div className="bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] rounded-xl p-4 sm:p-6 hover:border-[#3066be]/30 transition-colors duration-300">
                      <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#5AA8D6] transition-colors">
                              {exp.role}
                            </h4>
                            <div className="text-sm sm:text-base text-[#5AA8D6] font-medium">{exp.company}</div>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1">
                            <span className="text-xs sm:text-sm font-mono text-slate-400 bg-[#1a1f35] px-2 py-1 rounded w-fit">
                              {exp.period}
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-500">{exp.location} • {exp.type}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-400 mb-3 sm:mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-3 sm:mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5AA8D6] mt-0.5 shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-[#1a1f35]">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="text-[9px] sm:text-[10px] font-mono text-slate-500 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#131c80]/10 rounded hover:text-[#5AA8D6] transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Experience Timeline */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 h-1 bg-gradient-to-r from-[#5AA8D6] to-[#00bfff] rounded-full" />
                Internships
              </h3>

              <div className="relative space-y-6 sm:space-y-8 pl-6 sm:pl-8 border-l border-[#1a1f35]">
                {aboutData.internships.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[27px] sm:-left-[39px] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] sm:border-4 border-[#02000d] bg-gradient-to-br ${exp.gradient} group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(90,168,214,0.3)]`} />

                    <div className="bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] rounded-xl p-4 sm:p-6 hover:border-[#3066be]/30 transition-colors duration-300">
                      <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#5AA8D6] transition-colors">
                              {exp.role}
                            </h4>
                            <div className="text-sm sm:text-base text-[#5AA8D6] font-medium">{exp.company}</div>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1">
                            <span className="text-xs sm:text-sm font-mono text-slate-400 bg-[#1a1f35] px-2 py-1 rounded w-fit">
                              {exp.period}
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-500">{exp.location} • {exp.type}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-400 mb-3 sm:mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 mb-3 sm:mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5AA8D6] mt-0.5 shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-[#1a1f35]">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="text-[9px] sm:text-[10px] font-mono text-slate-500 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#131c80]/10 rounded hover:text-[#5AA8D6] transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Science Fairs & Certifications */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-12">
            {/* Science Fairs & Achievements - Trophy Case Design */}
            <div className="relative">
              {/* Section Header with Tech Decoration */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#5AA8D6] blur-sm opacity-50 animate-pulse" />
                    <div className="relative w-8 h-8 bg-[#0a0e1a] border border-[#5AA8D6] rounded-lg flex items-center justify-center">
                      <span className="text-lg">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Achievements</h3>
                    <p className="text-xs text-[#5AA8D6] font-mono uppercase tracking-wider">Hall of Fame</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3066be] animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5AA8D6] animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00bfff] animate-pulse delay-150" />
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid gap-4">
                {aboutData.scienceFairs.map((fair, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#0a0e1a] to-[#050939] border border-[#1a1f35] rounded-xl overflow-hidden hover:border-[#5AA8D6]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(90,168,214,0.15)] hover:-translate-y-1"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${fair.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Animated Border Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5AA8D6] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="relative p-5 flex gap-4">
                      {/* Medal/Icon Container */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#131c80]/30 border border-[#3066be]/30 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                          {fair.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-base font-bold text-white group-hover:text-[#5AA8D6] transition-colors truncate pr-2">
                            {fair.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500 bg-[#1a1f35] px-1.5 py-0.5 rounded border border-white/5 whitespace-nowrap">
                            {fair.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${fair.gradient} text-white shadow-sm`}>
                            {fair.achievement}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono border-l border-white/10 pl-2">
                            {fair.category}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3 group-hover:text-slate-300 transition-colors">
                          {fair.description}
                        </p>

                        {/* Action Link */}
                        <a
                          href={fair.certificate}
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#5AA8D6] hover:text-white transition-colors group/link"
                        >
                          <span>VIEW CERTIFICATE</span>
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications - Compact Tech Style
            <div className="relative pt-6 border-t border-[#1a1f35]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-4 bg-[#5AA8D6] rounded-full" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Certified Competence</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.certifications.map((cert, index) => (
                  <div key={index} className="group relative bg-[#0a0e1a] border border-[#1a1f35] p-3 rounded-lg hover:border-[#3066be]/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-1.5 bg-[#131c80]/20 rounded text-[#5AA8D6]">
                        <Download size={14} />
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">{cert.year}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-200 group-hover:text-white mb-1 line-clamp-1" title={cert.name}>
                      {cert.name}
                    </h4>
                    <p className="text-[10px] text-slate-500">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Certifications */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 h-1 bg-gradient-to-r from-[#3066be] to-[#131c80] rounded-full" />
                Certifications
              </h3>

              <div className="grid gap-3 sm:gap-4">
                {aboutData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] rounded-xl hover:border-[#3066be]/30 transition-colors group">
                    <div className="p-1.5 sm:p-2 bg-[#131c80]/10 rounded-lg group-hover:bg-[#131c80]/20 transition-colors flex-shrink-0">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 text-[#5AA8D6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-sm sm:text-base truncate group-hover:text-[#5AA8D6] transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400">{cert.issuer}</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-1">{cert.year}</p>
                    </div>
                    <a href="#" className="p-1.5 sm:p-2 text-slate-500 hover:text-white transition-colors flex-shrink-0">
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume CTA */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-[#131c80]/20 to-[#3066be]/10 rounded-xl border border-[#3066be]/20 text-center space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white">Interested in working together?</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Download my resume to see my full work history and qualifications.
              </p>
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#5AA8D6] hover:bg-[#3066be] text-white text-sm sm:text-base font-bold rounded-lg transition-colors shadow-lg shadow-[#5AA8D6]/20"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

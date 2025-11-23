import { useState } from 'react';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-transparent overflow-hidden">
      {/* Background Elements Removed to show global fixed background */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] to-[#3066be]">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {skillsData.categories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCategory === category.id;

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative group p-6 lg:p-8 bg-[#0a0e1a]/80 backdrop-blur-sm border border-[#1a1f35] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#3066be]/30 ${category.size}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={category.iconSize / 2} className="text-white" />
                    </div>
                    <div className="text-xs font-mono text-slate-500 bg-[#131c80]/10 px-2 py-1 rounded border border-[#131c80]/20">
                      {category.skills.length} Skills
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5AA8D6] transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-4 mt-auto">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#1a1f35] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transform origin-left transition-transform duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          <span>{skill.years}y exp</span>
                          <span>{skill.projects} projects</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 border-t border-[#1a1f35] pt-12">
          {skillsData.radar.slice(0, 4).map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#5AA8D6] to-[#3066be]">
                {stat.level}%
              </div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

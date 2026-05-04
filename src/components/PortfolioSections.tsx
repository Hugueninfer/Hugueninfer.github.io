import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Languages, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">{t.about.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg mb-4">
            {t.about.p1}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            {t.about.p2}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border border-black/10 dark:border-white/10 flex items-center justify-center"
        >
          <div className="text-neutral-400 dark:text-neutral-600 font-mono text-xl">
             &lt;huguenin.dev /&gt;
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 text-xs font-medium mb-6">
          <Briefcase size={14} /> {t.experience.badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">{t.experience.title}</h2>
      </div>

      <div className="space-y-8">
        {t.experience.items.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-sm shadow-sm dark:shadow-none"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">{exp.role}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-white/5 px-3 py-1 rounded-full self-start">
                {exp.period}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  const { t } = useLanguage();
  const edu = t.education;
  return (
    <section id="education" className="section-padding max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-neutral-600 dark:text-neutral-400" />
          <h2 className="text-3xl font-bold text-black dark:text-white">{edu.educationTitle}</h2>
        </div>
        <div className="space-y-8">
          {edu.items.map((item, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-black/5 dark:border-white/10 ml-2">
              <div className="absolute w-4 h-4 rounded-full bg-neutral-800 dark:bg-white -left-[9px] top-1" />
              <h3 className="font-bold text-lg dark:text-white">{item.degree}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{item.school}</p>
              <p className="text-sm text-neutral-500 mt-1">{item.period}</p>
              {item.description && (
                <p className="text-sm text-neutral-500 mt-2 italic">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-neutral-600 dark:text-neutral-400" />
          <h2 className="text-3xl font-bold text-black dark:text-white">{edu.certificationsTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {edu.certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors duration-150 flex items-center justify-between gap-2"
            >
              <span className="text-sm font-medium dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                {cert.name}
              </span>
              <ArrowUpRight size={14} className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white shrink-0 transition-colors" />
            </a>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6 font-bold text-black dark:text-white">
            <Languages size={20} />
            {edu.languagesTitle}
          </div>
          <div className="space-y-4">
            {edu.languages.map((lang, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="dark:text-neutral-300">{lang.name}</span>
                  <span className="text-neutral-500">{lang.level}</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className={`${lang.width} h-full bg-black dark:bg-white`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 text-xs font-medium mb-6">
          <Award size={14} /> {t.projects.badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">{t.projects.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((project, i) => {
          const url = 'url' in project ? (project.url as string) : undefined;
          const Wrapper = url ? motion.a : motion.div;
          const wrapperProps = url
            ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <Wrapper
              key={i}
              {...(wrapperProps as object)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 transition duration-150 ease-out flex flex-col justify-between shadow-sm dark:shadow-none ${url ? 'cursor-pointer hover:scale-[1.02] hover:shadow-lg dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-white/5' : 'hover:bg-neutral-50 dark:hover:bg-white/5'}`}
            >
              <div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-black dark:text-white">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

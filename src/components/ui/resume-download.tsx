import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ResumeDownload() {
  const { t } = useLanguage();

  return (
    <section id="resume" className="section-padding max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-sm"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
            <FileText className="text-neutral-600 dark:text-neutral-400" size={22} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-500 dark:text-neutral-400 text-[11px] font-medium mb-1">
              {t.resume.badge}
            </div>
            <h3 className="text-lg font-bold text-black dark:text-white">{t.resume.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{t.resume.description}</p>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <a
            href="/CV_Pedro_PT_BR.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105"
          >
            <Download size={14} />
            {t.resume.downloadPt}
          </a>
          <a
            href="/CV_Pedro_EN_US.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:scale-105 transition-all shadow-lg"
          >
            <Download size={14} />
            {t.resume.downloadEn}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <div className="w-full min-h-[700px] md:min-h-[600px] md:h-[600px] relative overflow-hidden flex flex-col md:flex-row rounded-3xl border border-black/10 dark:border-white/10 bg-neutral-50/50 dark:bg-black/40 backdrop-blur-3xl shadow-xl dark:shadow-2xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(120,120,120,0.3)"
      />

      <div className="flex flex-col md:flex-row w-full flex-1 relative z-10">
        <div className="flex-none md:flex-1 p-8 pt-12 pb-4 md:p-16 md:pt-16 md:pb-16 relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 text-xs font-medium mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.available}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-black via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-neutral-500 tracking-tight leading-[1.1]"
          >
            Pedro <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-900 dark:from-neutral-300 dark:to-neutral-600">Huguenin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-[280px] sm:max-w-[320px] md:max-w-lg text-[15px] md:text-lg leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white dark:text-black bg-black dark:bg-white rounded-full overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">{t.hero.viewProjects}</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="mailto:hugueninpedro@gmail.com" className="px-8 py-3.5 text-sm font-medium text-black dark:text-white rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              {t.hero.contact}
            </a>
          </motion.div>
        </div>

        <div className="flex-1 relative min-h-[450px] sm:min-h-[500px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-black/40 via-transparent to-transparent z-10 pointer-events-none md:hidden" />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

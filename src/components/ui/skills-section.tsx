'use client';
import React from 'react';
import { Database, Code2, Globe, Shield, Terminal, Sparkles, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { useLanguage } from '@/contexts/LanguageContext';

const categoryIcons = [Database, Globe, Terminal, Code2, Shield, Sparkles];

export function SkillsSection() {
	const { t } = useLanguage();
	const skillCategories = t.skills.categories.map((cat, i) => ({
		...cat,
		icon: categoryIcons[i],
	}));

	return (
		<section id="skills" className="py-24 md:py-32 w-full relative">
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 dark:text-neutral-300 text-sm font-medium mb-6 backdrop-blur-md">
						<Zap className="w-4 h-4 mr-2 text-current" />
						{t.skills.badge}
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-black dark:text-white">
						{t.skills.title}{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800 dark:from-neutral-400 dark:to-neutral-600">
							{t.skills.titleHighlight}
						</span>
					</h2>
					<p className="text-neutral-600 dark:text-neutral-400 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						{t.skills.description}
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.2}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{skillCategories.map((skill, i) => (
						<FeatureCard key={i} feature={skill} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: string;
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

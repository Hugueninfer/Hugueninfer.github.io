'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BrandLogo } from '@/components/ui/brand-logo';

export function Footer() {
	const { t } = useLanguage();

	return (
		<footer className="relative w-full mt-32 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] pointer-events-none" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-black/[0.02] dark:bg-white/[0.05] blur-[100px] rounded-full pointer-events-none" />

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<AnimatedContainer className="space-y-6">
						<div className="flex items-center gap-3">
							<BrandLogo className="size-10" />
							<span className="text-black dark:text-white font-bold text-2xl tracking-tight">huguenin.dev</span>
						</div>
						<p className="text-neutral-500 dark:text-neutral-400 text-base max-w-sm leading-relaxed font-light">
							{t.footer.description}
						</p>
						<div className="flex items-center gap-4 pt-2">
							<a
								href="https://linkedin.com/in/pedro-huguenin"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
							>
								<LinkedinIcon className="size-4" />
							</a>
							<a
								href="https://github.com/Hugueninfer"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
							>
								<GithubIcon className="size-4" />
							</a>
							<a
								href="mailto:hugueninpedro@gmail.com"
								className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
							>
								<Mail className="size-4" />
							</a>
						</div>
					</AnimatedContainer>

					<AnimatedContainer delay={0.2} className="flex flex-col gap-3 md:items-end justify-center">
						{[
							{ label: t.nav.about, href: '#about' },
							{ label: t.nav.experience, href: '#experience' },
							{ label: t.nav.projects, href: '#projects' },
							{ label: t.nav.education, href: '#education' },
							{ label: t.nav.resume, href: '#resume' },
						].map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors text-sm font-light"
							>
								{link.label}
							</a>
						))}
					</AnimatedContainer>
				</div>

				<AnimatedContainer delay={0.4} className="mt-16 pt-8 border-t border-black/5 dark:border-white/10 flex items-center justify-center">
					<p className="text-neutral-400 dark:text-neutral-500 text-sm font-light">
						{t.footer.copyright}
					</p>
				</AnimatedContainer>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
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
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern();

	return (
		<div className={cn('group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-8 transition-all duration-500 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-black/20 dark:hover:border-white/20 shadow-sm dark:shadow-none', className)} {...props}>
			{/* Hover Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/[0.05] dark:from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			
			{/* Grid Pattern */}
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20 dark:opacity-50 group-hover:opacity-40 dark:group-hover:opacity-100 transition-opacity duration-500">
				<div className="from-black/5 dark:from-white/5 to-black/1 dark:to-white/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-black/5 dark:fill-white/5 stroke-black/10 dark:stroke-white/10 absolute inset-0 h-full w-full dark:mix-blend-overlay"
					/>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-20">
				<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
					<feature.icon className="text-black dark:text-white size-6" strokeWidth={1.5} aria-hidden />
				</div>
				<h3 className="text-xl font-semibold text-black dark:text-white tracking-tight">{feature.title}</h3>
				<p className="text-neutral-600 dark:text-neutral-400 mt-3 text-sm leading-relaxed font-light">{feature.description}</p>
			</div>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}

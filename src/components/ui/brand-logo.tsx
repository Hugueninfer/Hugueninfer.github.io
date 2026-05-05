import type { ComponentProps } from 'react';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

type BrandLogoProps = {
	className?: string;
} & Pick<ComponentProps<'img'>, 'alt'>;

export function BrandLogo({ className = 'h-8 w-8', alt = '' }: BrandLogoProps) {
	return (
		<span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
			<img
				src={`${base}logo-black.svg`}
				alt={alt}
				className="h-full w-full object-contain dark:hidden"
				draggable={false}
			/>
			<img
				src={`${base}logo-white.svg`}
				alt={alt}
				className="hidden h-full w-full object-contain dark:block"
				draggable={false}
			/>
		</span>
	);
}

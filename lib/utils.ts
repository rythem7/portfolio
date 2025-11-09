import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleScrollTo = (e: React.MouseEvent, id: string) => {
	e.preventDefault();
	gsap.to(window, {
		duration: 1.3,
		scrollTo: { y: `#${id}`, offsetY: 0 },
		ease: "power4.out",
	});

	ScrollTrigger.refresh();
};

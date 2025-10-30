"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisScrollProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [ready, setReady] = useState(false);
	const [isTouch, setIsTouch] = useState(false);

	// Detect touch devices (disable Lenis)
	useEffect(() => {
		queueMicrotask(() => {
			setIsTouch(
				"ontouchstart" in window || navigator.maxTouchPoints > 0
			);
			setReady(true);
		});
	}, []);

	const lenis = useLenis(() => {
		if (!isTouch) ScrollTrigger.update();
	});

	// Kickstart Lenis RAF on desktop
	useEffect(() => {
		if (!lenis || !ready || isTouch) return;
		lenis.raf(0);
	}, [lenis, ready, isTouch]);

	// Setup ScrollTrigger proxy & resize
	useEffect(() => {
		if (!lenis || !ready || isTouch) return;

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				if (value !== undefined) lenis.scrollTo(value);
				return lenis.scroll;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
		});

		const handleResize = () => lenis.resize();
		window.addEventListener("resize", handleResize);
		ScrollTrigger.addEventListener("refresh", handleResize);

		ScrollTrigger.refresh();

		return () => {
			window.removeEventListener("resize", handleResize);
			ScrollTrigger.removeEventListener("refresh", handleResize);
		};
	}, [lenis, ready, isTouch]);

	if (!ready) return <>{children}</>;
	if (isTouch) return <>{children}</>; // Mobile: fallback to native scroll

	return (
		<ReactLenis
			root
			options={{
				duration: 1.2,
				lerp: 0.1,
			}}
		>
			{children}
		</ReactLenis>
	);
}

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const isTouch =
			"ontouchstart" in window || navigator.maxTouchPoints > 0;
		if (isTouch) return; // disable smooth scroll on mobile

		const smoother = ScrollSmoother.create({
			wrapper: "#wrapper", // outer container
			content: "#content", // scrollable content
			smooth: 1.2, // adjust scroll smoothness
			effects: true, // optional: enable data-speed / data-lag effects
			smoothTouch: 0,
		});

		return () => smoother.kill();
	}, []);

	return (
		<div id="wrapper">
			<div id="content">{children}</div>
		</div>
	);
}

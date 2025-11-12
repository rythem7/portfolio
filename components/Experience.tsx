import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "@/assets";
import { useGSAP } from "@gsap/react";
import Heading from "./sub/Heading";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
	const lineRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			// ScrollTrigger.getAll().forEach((t) => t.kill());
			const line = lineRef.current;
			const cards = cardsRef.current;
			if (!line || !cards) return;

			// Animate the growing line
			gsap.fromTo(
				line,
				{ scaleY: 0, transformOrigin: "top" },
				{
					scaleY: 1,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 80%",
						end: "bottom center",
						scrub: 1,
						markers: false,
						invalidateOnRefresh: true,
					},
				}
			);

			// Reveal cards on scroll
			cards.forEach((card, i) => {
				const isEven = i % 2 === 0;
				gsap.fromTo(
					card,
					{ opacity: 0, x: isEven ? -50 : 50 },
					{
						opacity: 100,
						x: 0,
						// duration: 0.5,
						scrollTrigger: {
							trigger: card,
							start: "top 80%",
							end: "bottom 80%",
							// toggleActions: "play none none reverse",
							scrub: 0.7,
							invalidateOnRefresh: true,
						},
					}
				);
			});
			requestAnimationFrame(() => ScrollTrigger.refresh());

			return () => {
				ScrollTrigger.getAll().forEach((t) => t.kill());
			};
		},
		{ scope: containerRef }
	);

	return (
		<section className=" flex flex-col items-center w-full py-5 bg-zinc-100 min-h-screen dark:bg-zinc-900 select-none">
			<Heading text={"My Journey..."} className="mb-4 mt-15" />
			<div
				ref={containerRef}
				className="relative w-full max-w-5xl flex flex-col items-center py-4"
			>
				{/* Vertical Line */}
				<div
					ref={lineRef}
					// style={{ scaleY }}
					className="absolute top-0 bottom-0 lg:left-1/2 left-[90%] sm:left-[75%] w-1 bg-red-400 origin-top will-change-transform transform-gpu lg:right-auto"
				></div>

				{/* Timeline Cards */}
				<div className="flex flex-col gap-15 w-full sm:px-30 px-12 mt-10">
					{experienceData.map((data, i) => (
						<div
							key={`id-${i}`}
							ref={(el) => {
								if (el) cardsRef.current[i] = el;
							}}
							className={`relative flex items-center will-change-transform transform-gpu ${
								i % 2 === 0
									? "lg:justify-start"
									: "lg:justify-end"
							} justify-start`}
						>
							{/* Card */}
							<div
								className={`w-[300px] p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg z-10 ${
									i % 2 === 0
										? "lg:ml-0 lg:mr-[50%]"
										: "lg:mr-0 lg:ml-[50%]"
								}`}
							>
								<h1 className="text-lg sm:text-xl font-bold text-gray-700 dark:text-gray-200">
									{data.title}
								</h1>
								<p className="light:text-gray-800">
									<span className="block font-semibold">
										Education:
									</span>
									<span className="block pl-2 font-light">
										{data.education}
									</span>
								</p>
								<div className="light:text-gray-800">
									<span className="font-semibold">
										Experience:
									</span>
									<ul className="pl-2">
										{data.experience.map((exp, j) => (
											<li
												key={`exp-${j}`}
												className="my-1 font-light"
											>
												{exp}
											</li>
										))}
									</ul>
								</div>
								<h3 className="text-lg font-semibold text-red-400">
									{data.year}
								</h3>
								{/* <div
									className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
										i % 2 === 0
											? "left-1/2 -translate-x-1/2 lg:left-full"
											: "right-1/2 translate-x-1/2 lg:right-full"
									}`}
								>
									{data.year}
								</div> */}

								{/* <p className="text-gray-600 dark:text-gray-300 mt-2">
									{data.text}
								</p> */}
							</div>

							{/* Circle checkpoint with arrow */}
							<div
								className={`absolute lg:left-1/2 left-[90%] sm:left-[75%] translate-x-[-50%] flex flex-col items-center ${
									i % 2 === 0
										? "lg:flex-row"
										: "lg:flex-row-reverse"
								}`}
							>
								<div className="w-6 h-6 bg-white border-4 border-red-400 hidden lg:block rounded-full shadow-md"></div>
								{/* <div
									className={`hidden lg:block w-0 h-0 border-y-[6px] border-y-transparent ${
										i % 2 === 0
											? "border-l-[10px] border-l-red-500 ml-2"
											: "border-r-[10px] border-r-red-500 mr-2"
									}`}
								></div> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { reviewsData, starIcons, arrowIcons } from "@/assets";
import { useState, useRef, useEffect, useCallback } from "react";
import { animate, motion } from "framer-motion";

const Reviews = () => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(false);
	const prevIndex = useRef(0);
	const slides = useRef<(HTMLDivElement | null)[]>([]);

	const rightClickHandler = useCallback(() => {
		const currentEl = slides.current[index];
		const prevEl = slides.current[prevIndex.current];
		if (currentEl) {
			animate(currentEl, { x: 0 }, { delay: 0.3 });
		}
		if (prevEl) {
			animate(prevEl, {
				scale: index === 0 ? 1 : 0.4,
				rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
			});
		}
	}, [index]);

	const leftClickHandler = useCallback(() => {
		const currentEl = slides.current[index];
		const prevEl = slides.current[prevIndex.current];
		if (currentEl) {
			animate(currentEl, { scale: 1, rotate: 0 }, { delay: 0.2 });
		}
		if (prevEl) {
			animate(prevEl, { x: "100%" });
		}
	}, [index]);

	useEffect(() => {
		if (direction) {
			leftClickHandler();
		} else {
			rightClickHandler();
		}
		prevIndex.current = index;
	}, [index, direction, leftClickHandler, rightClickHandler]);

	return (
		<div className="h-screen flex flex-col items-center justify-center gap-y-6 max-w-[90%] mx-auto">
			<Heading text="Reviews" className="self-start" />

			<div className="flex flex-col items-center justify-center p-4">
				{/* Slider container */}
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="
				relative flex items-center justify-center overflow-clip 
				w-[300px] md:w-[600px] lg:w-[800px]
				h-[600px] sm:h-[400px] md:h-[450px] lg:h-[500px]
				rounded-xl
			"
				>
					{reviewsData.map((review, i) => (
						<motion.div
							key={`review-${i}`}
							initial={{ x: "100%" }}
							ref={(el) => {
								slides.current[i] = el;
							}}
							className="
						absolute inset-0 flex flex-col items-center justify-center 
						gap-y-5 lg:gap-y-7 p-6 
						border border-yellow-500 rounded-xl 
						bg-zinc-50 dark:bg-zinc-700 
						transition-colors transform-gpu will-change-transform
					"
						>
							<Image
								src={review.image}
								alt="Reviews Image"
								width={130}
								height={130}
								className="
							w-[130px] aspect-square object-contain rounded-full
							border border-yellow-500 p-4
						"
							/>

							<h1 className="text-xl md:text-2xl text-center tracking-wider text-yellow-600">
								{review.name}
							</h1>

							<p
								className="
						text-sm md:text-lg text-justify font-extralight tracking-wide
						text-gray-600 dark:text-white 
						first-letter:pl-2 transition-colors
					"
							>
								{review.comment}
							</p>

							<div className="flex flex-col items-center justify-center gap-y-2">
								<span className="text-lg font-light text-yellow-600 mr-3">
									{review.stars
										.reduce((sum, item) => sum + item, 0)
										.toFixed(1)}
								</span>

								<div className="flex items-center gap-x-2 text-2xl text-yellow-500">
									{review.stars.map((star, i) => (
										<span key={i}>
											{star === 1
												? starIcons[0]
												: starIcons[1]}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Navigation buttons */}
				<div className="flex gap-x-6 mt-6 text-4xl text-yellow-500">
					<button
						className={`
					transition-all hover:scale-150
					${index === 0 ? "opacity-30 pointer-events-none" : "opacity-100"}
				`}
						onClick={() => {
							setDirection(true);
							setIndex((prev) => prev - 1);
						}}
					>
						{arrowIcons[0]}
					</button>

					<button
						className={`
					transition-all hover:scale-150
					${
						index === reviewsData.length - 1
							? "opacity-30 pointer-events-none"
							: "opacity-100"
					}
				`}
						onClick={() => {
							setDirection(false);
							setIndex((prev) => prev + 1);
						}}
					>
						{arrowIcons[1]}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reviews;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { heroIconsArr } from "@/assets";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { handleScrollTo } from "@/lib/utils";
import Link from "next/link";

function Hero() {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	const [buttonHover, setButtonHover] = useState(false);
	const [mouseMove, setMouseMove] = useState(false);
	const isTouchRef = React.useRef(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x, { stiffness: 300, damping: 10 });
	const ySpring = useSpring(y, { stiffness: 300, damping: 10 });

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (isTouchRef.current) return;
		const { clientX, clientY } = event;
		x.set(clientX);
		y.set(clientY);
	};

	const rotateY = useTransform(xSpring, [0, windowSize.width], [40, -40]);
	const rotateX = useTransform(ySpring, [0, windowSize.height], [-30, 30]);

	const handleMouseEnter = () => {
		if (isTouchRef.current) return;
		setMouseMove(true);
	};

	const handleMouseLeave = () => {
		if (isTouchRef.current) return;
		setMouseMove(false);
		x.set(windowSize.width / 2);
		y.set(windowSize.height / 2);
	};

	// Initialize window size on mount
	useEffect(() => {
		if (typeof window === "undefined") return;
		isTouchRef.current =
			"ontouchstart" in window || navigator.maxTouchPoints > 0;

		if (!isTouchRef.current) {
			queueMicrotask(() => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			});
		}
	}, []);

	const handleResize = useCallback(() => {
		if (!isTouchRef.current) return;
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, [isTouchRef]);

	useEffect(() => {
		if (isTouchRef.current) return;
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [handleResize]);

	return (
		<div
			className="h-screen w-full grid place-content-center"
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div>
				<div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize select-none">
					<motion.div
						className="flex items-center justify-center "
						style={{
							rotateY: mouseMove ? rotateY : 0,
							rotateX: mouseMove ? rotateX : 0,
							// transition: "0.1s",
						}}
					>
						<Image
							src={"/person.png"}
							alt="Picture of the author"
							width={400}
							height={400}
							priority
							className="h-auto w-[150px]"
						/>
						<motion.span
							className="absolute text-xl font-semibold text-white"
							initial={{ scale: 0, opacity: 0, y: 0 }}
							animate={{
								opacity: buttonHover ? 1 : 0,
								scale: buttonHover ? 3 : 0,
								y: buttonHover ? -40 : 0,
							}}
							transition={{
								// opacity: { delay: 0.1 },
								ease: "backOut",
							}}
						>
							Hi
						</motion.span>
					</motion.div>
					<h1 className="text-center text-2xl md:text-3xl font-bold tracking-wider light:text-gray-500">
						My Name is Rythem &
					</h1>
					<p className="text-lg md:tracking-wider light:text-gray-700">
						I&apos;m a web developer 💻
					</p>
				</div>
				<div className="flex gap-x-10 justify-center mt-8 text-3xl text-yellow-600">
					{heroIconsArr.map((item, i) => (
						<Link
							href={item.url}
							key={`hero-icon-${i}`}
							className="hover:bg-red-400 hover:text-white transition-all rounded-lg hover:scale-140"
						>
							{item.icon}
						</Link>
					))}
				</div>
				<Link
					href="#contact"
					onClick={(e) => handleScrollTo(e, "contact")}
					className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
					onMouseEnter={() => setButtonHover(true)}
					onMouseLeave={() => setButtonHover(false)}
				>
					Talk to me
				</Link>
			</div>
		</div>
	);
}

export default Hero;

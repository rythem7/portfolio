import { ReactNode, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

type Props = {
	title: string;
	amount: number;
	children: ReactNode;
};

const Achievements = ({ title, amount, children }: Props) => {
	const number = useMotionValue(0);
	const [hasCounted, setHasCounted] = useState(false);

	const count = (amount: number, duration = 1000) => {
		const start = performance.now();

		const update = (t: number) => {
			const progress = Math.min((t - start) / duration, 1);
			const current = Math.floor(progress * amount);
			number.set(current);
			if (progress < 1) requestAnimationFrame(update);
		};

		requestAnimationFrame(update);
	};

	return (
		<div className="flex items-center gap-x-3 lg:gap-x-5">
			<span className="lg:text-4xl text-2xl text-gray-300">
				{children}
			</span>
			<h1 className="flex flex-col gap-y-2">
				<motion.span
					className="text-xl lg:text-2xl font-light text-yellow-500"
					onViewportEnter={() => {
						if (!hasCounted) {
							count(amount, 600);
							setHasCounted(true);
						}
					}}
				>
					{number}
				</motion.span>
				<span className="text-sm tracking-wide text-wrap text-gray-500">
					{title}
				</span>
			</h1>
		</div>
	);
};

export default Achievements;

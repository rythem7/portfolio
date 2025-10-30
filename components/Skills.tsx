"use client";
import { motion } from "framer-motion";

import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";

const Skills = () => {
	const variants = {
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.03,
			},
		}),
		hidden: {
			opacity: 0,
			y: 30,
		},
	};
	return (
		<div className="h-full py-20 lg:h-[60vh] flex flex-col items-center justify-center gap-y-10 lg:gap-y-20">
			<Heading text="Skills" className="self-start" />
			<div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
				{skillsData.map((item, i) => (
					<motion.div
						key={i}
						variants={variants}
						custom={i}
						initial="hidden"
						whileInView="visible"
						whileHover={{ scale: 1.1 }}
						viewport={{ once: true, margin: "50px" }}
						className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 lg:px-5 py-2 px-2 will-change-auto transform-gpu"
					>
						<Image
							src={item.icon}
							alt="Skills Image"
							width={100}
							height={100}
							className="h-auto w-10"
						/>
						<p className="text-sm text-gray-600">{item.name}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Skills;

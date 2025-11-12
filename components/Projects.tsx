"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsData, projectsButton } from "@/assets";
import { motion, animate } from "framer-motion";

const Projects = () => {
	const [tech, setTech] = useState("All");
	const [index, setIndex] = useState(0);
	const prevIndex = useRef(0);
	const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);

	const handleClick = useCallback(() => {
		const prevBtn = buttonsRef.current[prevIndex.current];
		const nextBtn = buttonsRef.current[index];

		if (prevBtn) {
			animate(prevBtn, {
				opacity: 0.5,
				scale: 1,
			});
		}

		if (nextBtn) {
			animate(nextBtn, { opacity: 1, scale: 1.2 });
		}
	}, [index]);

	useEffect(() => {
		handleClick();
		prevIndex.current = index;
	}, [index, handleClick]);
	return (
		<div className="min-h-screen py-20 ">
			<Heading text={"Projects"} />
			<div className="flex flex-wrap items-center justify-between gap-4 py-10">
				{projectsButton.map((text, i) => (
					<motion.div
						role="button"
						key={i}
						initial={{
							opacity: i === 0 ? 1 : 0.5,
							scale: i === 0 ? 1.2 : 1,
						}}
						ref={(el) => {
							buttonsRef.current[i] = el;
						}}
						onClick={() => {
							setTech(text);
							setIndex(i);
						}}
						className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider cursor-pointer text-gray-400"
					>
						<span className="select-none">{text}</span>
					</motion.div>
				))}
			</div>
			<div className="flex flex-wrap items-center justify-center gap-5">
				{projectsData
					.filter((project) => {
						return project.tech.some((item) =>
							tech === "All" ? true : item === tech
						);
					})
					.map((data, i) => (
						<motion.div key={`id-${i}`} layout>
							<Project data={data} index={i} />
						</motion.div>
					))}
			</div>
		</div>
	);
};

export default Projects;

"use client";
import { navbarData, copyRightIcon } from "@/assets";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { handleScrollTo } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Navbar = () => {
	const [activeId, setActiveId] = useState("home");
	const navbarRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!navbarRef.current) return;

			ScrollTrigger.getAll().forEach((t) => t.kill());

			navbarData.forEach((item) => {
				const triggerEl = document.getElementById(item.id);
				if (!triggerEl) return;
				ScrollTrigger.create({
					trigger: triggerEl,
					start: "top center",
					end: "bottom center",
					onEnter: () => setActiveId(item.id),
					onEnterBack: () => setActiveId(item.id),
					markers: false,
				});
			});

			gsap.fromTo(
				".nav-item",
				{ x: -40, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.08,
					ease: "power3.out",
				}
			);

			return () => {
				// window.removeEventListener("resize", handleResize);
				ScrollTrigger.getAll().forEach((t) => t.kill());
			};
		},
		{ scope: navbarRef, dependencies: [] }
	);

	return (
		<div
			ref={navbarRef}
			className="fixed left-0 top-0 h-screen w-[50px] sm:w-[70px] flex flex-col justify-between border-r light:bg-white border-gray-200 px-4 xl:py-10 py-6 z-30"
		>
			{/* Logo */}
			<Link
				href="/#home"
				onClick={(e) => handleScrollTo(e, "home")}
				className="flex flex-col items-center"
			>
				<span className="text-3xl font-semibold text-red-400">R</span>
				<span className="rotate-90 origin-bottom text-[12px] font-semibold dark:text-white">
					Dhamija
				</span>
			</Link>

			{/* Navigation Items */}
			<nav className="flex flex-col items-center gap-y-1 sm:gap-y-2 xl:gap-y-3">
				{navbarData.map((item, i) => {
					const isActive = item.id === activeId;

					return (
						<Link
							key={item.id}
							href={`/#${item.id}`}
							onClick={(e) => handleScrollTo(e, item.id)}
							className="nav-item group flex flex-col items-center gap-y-2"
						>
							<span
								className={`text-2xl transition-all duration-300 hover:scale-120 ${
									isActive
										? "scale-120 text-[#ef4444]"
										: "text-[#ca8a04]"
								}`}
							>
								{item.icon}
							</span>

							<motion.span
								initial={{
									opacity: 0,
									x: i % 2 === 0 ? 10 : -10,
								}}
								whileHover={{ opacity: 1, x: 0 }}
								animate={
									isActive
										? { opacity: 1, x: 0 }
										: {
												opacity: 0,
												x: i % 2 === 0 ? 10 : -10,
										  }
								}
								transition={{ duration: 0.3 }}
								className="text-[10px] tracking-wide text-center dark:text-white"
							>
								{item.name}
							</motion.span>
						</Link>
					);
				})}
			</nav>

			{/* Footer */}
			<p className="mt-6 flex items-center justify-center text-[11px] xs:text-[13px] text-gray-500">
				<span className="absolute left-1/2 -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200">
					{copyRightIcon} 2023 - {new Date().getFullYear()}
				</span>
			</p>
		</div>
	);
};

export default Navbar;

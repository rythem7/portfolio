"use client";

import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";
import aboutMe from "@/public/about-me.png";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";
import Link from "next/link";
export default function About() {
	return (
		<div className="h-screen flex flex-col gap-y-15 items-center justify-center">
			<Heading text="About Me!" className="self-start" />
			<div className="w-full flex flex-col lg:flex-row items-center justify-between">
				<Image
					src={aboutMe}
					alt="Profile Picture"
					width={400}
					height={400}
					className="w-[250px] lg:w-[300px] hidden sm:block"
					priority
				/>
				<div className="max-w-[800px] rounded-xl light:bg-zinc-100 dark:bg-zinc-800 text-justify p-8 relative space-y-4">
					<span className="absolute left-1 hidden lg:inline-block">
						{arrowLeftIcon}
					</span>
					<p className="text-lg font-light light:text-gray-700 text-[14px] lg:text-[16px]">
						{aboutText}
					</p>
					<Link
						href="/resume-dev.pdf"
						download=""
						className="flex items-center w-max gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
					>
						<span>Download CV</span>
						<span className="text-xl">{downloadIcon}</span>
					</Link>
				</div>
			</div>
			<div className=" w-full grid md:grid-cols-4 grid-cols-2 place-content-center  gap-7">
				{aboutData.map((item, i) => (
					<Achievements
						key={i}
						title={item.title}
						amount={item.amount}
					>
						{item.icon}
					</Achievements>
				))}
			</div>
		</div>
	);
}

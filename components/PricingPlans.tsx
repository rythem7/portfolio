"use client";
import Heading from "./sub/Heading";
import { pricingPlans, checkIcon } from "@/assets";
import { motion } from "framer-motion";

const PricingPlans = () => {
	return (
		<div className="py-20 lg:px-0">
			<Heading text={"Pricing Plans"} className="self-start mb-10" />
			<div className="lg:h-screen h-auto flex lg:flex-row flex-col items-center justify-between gap-8">
				{pricingPlans.map((plan, i) => (
					<motion.div
						initial={{ y: 200, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.05 }}
						transition={{
							duration: 0.4,
							delay: i * 0.2,
							scale: { duration: 0.15 },
						}}
						key={i}
						className={`
  flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600
  dark:bg-zinc-700 transition-colors
  w-[300px] xl:w-[370px] select-none
  ${i === 1 ? "bg-white sm:w-[320px] xl:w-[370px]" : "bg-zinc-50"}
`}
					>
						<h1 className="lg:text-3xl text-lg font-light tracking-wide text-center dark:text-white transition-colors">
							{plan.title}
						</h1>
						<span className="lg:text-2xl text-xl text-center dark:text-white transition-colors">
							{plan.pricing}
						</span>
						<ul className="flex flex-col gap-y-2">
							{plan.features.map((feature, j) => (
								<div
									key={j}
									className="flex items-center gap-x-3"
								>
									<span
										className={`text-2xl  ${
											i === 1
												? "text-red-300"
												: "text-yellow-500"
										}`}
									>
										{checkIcon}
									</span>
									<li className="text-[15px] font-light tracking-wide dark:text-white transition-colors">
										{feature}
									</li>
								</div>
							))}
						</ul>
						<p className="text-sm font-light text-center dark:text-gray-200 transition-colors">
							<span className="font-semibold">Ideal for:</span>{" "}
							{plan.recommended}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default PricingPlans;

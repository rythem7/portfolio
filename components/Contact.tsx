"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="lg:h-screen h-auto lg:py-20 py-40 xs:pb-0 pb-20 ">
			<Heading text={"Get in touch"} />
			<div className="w-full h-full my-auto flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:gap-x-20 gap-x-0 gap-y-20">
				<motion.div
					initial={{ opacity: 0, y: 150 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
				>
					<Image
						src={"/contact.gif"}
						alt="Contact Image"
						width={400}
						height={400}
						className="aspect-auto rounded-md opacity-80"
						loading="eager"
						unoptimized
					/>
				</motion.div>
				<motion.form
					initial={{ opacity: 0, x: 150 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
					className="w-full sm:w-[400px] lg:w-[600px] flex flex-col gap-3"
				>
					<div className="w-full flex flex-col lg:flex-row gap-x-3 lg:gap-y-0 gap-y-3">
						<input
							type="text"
							className="w-full border border-yellow-500 rounded-md light:bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
							placeholder="Your Name"
						/>
						<input
							type="email"
							className="w-full border border-yellow-500 rounded-md light:bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
							placeholder="Your Email"
						/>
					</div>
					<input
						type="text"
						className="w-full border border-yellow-500 rounded-md light:bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
						placeholder="Subject"
					/>
					<textarea
						className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md light:bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
						placeholder="Write Me..."
					></textarea>
					<input
						type="submit"
						className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
						value="Send Message"
						disabled
					/>
				</motion.form>
			</div>
		</div>
	);
};

export default Contact;

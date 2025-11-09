"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "./sub/ContactForm";

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
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;

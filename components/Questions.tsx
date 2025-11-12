"use client";
import Heading from "./sub/Heading";
import Question from "./sub/Question";
import { questions } from "@/assets";
import { motion } from "framer-motion";

const Questions = () => {
	return (
		<div className="py-20 h-full flex flex-col gap-y-8">
			<Heading text={"Frequently Asked Questions"} />
			<div>
				<motion.ul layout className="flex flex-col gap-y-3">
					{questions.map((question, i) => (
						<Question key={i} data={question} index={i} />
					))}
				</motion.ul>
			</div>
		</div>
	);
};

export default Questions;

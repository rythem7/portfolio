"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const inputClasses =
	"w-full border border-yellow-500 rounded-md light:bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 dark:text-gray-100 outline-none";

export const ContactForm = () => {
	const [form, setForm] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState("");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setStatus("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			const data = await res.json();
			setStatus(data.message);
		} catch (err) {
			console.error(err);
			setStatus("Something went wrong.");
		} finally {
			setLoading(false);
		}
	};
	return (
		<motion.form
			initial={{ opacity: 0, x: 150 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
			viewport={{ once: true }}
			onSubmit={handleSubmit}
			className="w-full sm:w-[400px] lg:w-[600px] flex flex-col gap-3"
		>
			<div className="w-full flex flex-col lg:flex-row gap-x-3 lg:gap-y-0 gap-y-3">
				<input
					type="text"
					className={inputClasses}
					placeholder="Your Name"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>
				<input
					type="email"
					className={inputClasses}
					placeholder="Your Email"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
			</div>
			<input
				type="text"
				className={inputClasses}
				placeholder="Subject"
				name="subject"
				value={form.subject}
				onChange={handleChange}
			/>
			<textarea
				className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md light:bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 dark:text-gray-100 outline-none"
				placeholder="Write Me..."
				name="message"
				value={form.message}
				onChange={handleChange}
			></textarea>
			<button
				type="submit"
				className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
				disabled={loading}
			>
				{loading ? "Sending..." : "Send Message"}
			</button>

			{status && (
				<p className="mt-2 text-center text-sm text-gray-500">
					{status}
				</p>
			)}
		</motion.form>
	);
};

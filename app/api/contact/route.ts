import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactData {
	name: string;
	email: string;
	subject?: string;
	message: string;
}

export async function POST(req: Request) {
	try {
		const body: ContactData = await req.json();
		const { name, email, subject, message } = body;

		if (!name || !email || !message) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_USER,
			subject: `📬 New Message: ${subject || "No subject"}`,
			text: `
From: ${name} <${email}>
Message:
${message}
      `,
		});

		return NextResponse.json(
			{ message: "Message sent successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Email error:", error);
		return NextResponse.json(
			{ message: "Failed to send message." },
			{ status: 500 }
		);
	}
}

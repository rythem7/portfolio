"use client";
import { ModeToggle } from "@/components/shared/mode-toggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import PricingPlans from "@/components/PricingPlans";
import Questions from "@/components/Questions";
import Contact from "@/components/Contact";
import SmoothScrollProvider from "@/lib/SmoothScrollProvider";

export default function Home() {
	return (
		<>
			<ModeToggle className="fixed z-30 top-4 right-4" />
			<SmoothScrollProvider>
				<div className="min-h-screen overflow-x-clip flex flex-col items-center">
					<section id="home" className="w-full ml-[10%] lg:ml-0">
						<Hero />
					</section>
					<div className="max-w-6xl w-[95%] pl-[60px] flex flex-col">
						<section id="about">
							<About />
						</section>
						<section id="experience">
							<Experience />
						</section>
						<section id="skills">
							<Skills />
						</section>
						<section id="reviews">
							<Reviews />
						</section>
						<section id="projects">
							<Projects />
						</section>
						<section id="pricing">
							<PricingPlans />
						</section>
						<section id="contact">
							<Contact />
						</section>
						<section id="questions">
							<Questions />
						</section>
					</div>
				</div>
			</SmoothScrollProvider>
		</>
	);
}

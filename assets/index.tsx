// Hero
import {
	RiFacebookCircleLine,
	RiInstagramLine,
	RiDribbbleLine,
	RiYoutubeLine,
	RiGithubLine,
} from "@remixicon/react";

export const heroIcons: React.ReactNode[] = [
	<RiInstagramLine key="instagram-icon" />,
	<RiFacebookCircleLine key="facebook-icon" />,
	<RiDribbbleLine key="dribbble-icon" />,
	<RiYoutubeLine key="youtube-icon" />,
	<RiGithubLine key="github-icon" />,
];

// About Me
import {
	RiGithubFill,
	RiProjector2Line,
	RiGroupLine,
	RiAwardFill,
} from "@remixicon/react";

export const aboutData = [
	{
		title: "Github Repos",
		amount: 348,
		icon: <RiGithubFill />,
	},
	{
		title: "Successful Projects",
		amount: 227,
		icon: <RiProjector2Line />,
	},
	{
		title: "Satisfied clients",
		amount: 176,
		icon: <RiGroupLine />,
	},
	{
		title: "Awards and Recognition",
		amount: 107,
		icon: <RiAwardFill />,
	},
];

import { RiDownloadLine, RiArrowLeftSFill } from "@remixicon/react";

export const downloadIcon = <RiDownloadLine />;
export const arrowLeftIcon = <RiArrowLeftSFill />;

export const aboutText =
	"Hello! I'm Rythem Dhamija, a passionate developer with a knack for creating engaging web experiences. Welcome to my portfolio!";
// End of About Me

// Experience
export const experienceData = [
	{
		year: 2023,
		title: "Foundation and Basics",
		education:
			"Full Stack Web Development Bootcamp: Completed a bootcamp covering HTML, CSS, JavaScript, and basic backend development.",
		experience: [
			"Basic HTML/CSS: Learned through online tutorials and courses.",
			"Personal Projects: Created simple personal websites or blogs.",
		],
	},
	{
		year: 2024,
		title: "Early Experience",
		education: "Built small JS projects with chatGPT.",
		experience: [
			"Learnt about event listeners, DOM manipulation, API calls.",
		],
	},
	{
		year: 2024,
		title: "2AM Coding Sessions",
		education: "Got Introduced to ReactJS.",
		experience: [
			"Reinforced faith in good quality chair.",
			"React felt Amazing!",
		],
	},
	{
		year: 2025,
		title: "Building Expertise and Expanding Skills",
		education:
			"Gained proficiency in ReactJS and started learning NextJS and TypeScript.",
		experience: [
			"Learnt about SSR, SSG, ISR in NextJS.",
			"Built several projects using ReactJS and NextJS.",
			"Started learning backend development with NodeJS and Express.",
		],
	},
	{
		year: 2025,
		title: "Full stack nextjs E-com store",
		education:
			"Built a full stack e-commerce store using NextJS, Prisma, Paypal, and Next Auth.",
		experience: [
			"Implemented user authentication, product listings, and payment processing.",
			"Deployed the application on Vercel.",
		],
	},
	{
		year: 2025,
		title: "Still Grinding...",
		education:
			"Enhancing front-end skills. Getting comfortable with GSAP and framer-motion",
		experience: [
			"Exploring advanced features of NextJS.",
			"Learning about performance optimization and SEO best practices.",
		],
	},
];

// Skills
export const skillsData = [
	{
		name: "NextJS",
		icon: "/skills/nextjs.png",
	},
	{
		name: "ReactJS",
		icon: "/skills/react.png",
	},
	{
		name: "TypeScript",
		icon: "/skills/ts.png",
	},
	{
		name: "TailwindCSS",
		icon: "/skills/tailwind.png",
	},
	{
		name: "VS Code",
		icon: "/skills/vscode.png",
	},
	{
		name: "Framer Motion",
		icon: "/skills/framer.png",
	},
	{
		name: "GSAP",
		icon: "/skills/gsap.png",
	},
	{
		name: "PostgreSQL",
		icon: "/skills/postgres.png",
	},
	{
		name: "Prisma",
		icon: "/skills/prisma.png",
	},
	{
		name: "Shadcn UI",
		icon: "/skills/shadcn.png",
	},
	{
		name: "HTML",
		icon: "/skills/html.png",
	},
	{
		name: "CSS",
		icon: "/skills/css.png",
	},
	{
		name: "JavaScript",
		icon: "/skills/js.png",
	},

	{
		name: "Vite",
		icon: "/skills/vite.png",
	},

	{
		name: "NodeJS",
		icon: "/skills/nodejs.png",
	},
	{
		name: "Github",
		icon: "/skills/github.png",
	},
	// {
	// 	name: "Figma",
	// 	icon: "/skills/figma.png",
	// },
	// {
	// 	name: "Photoshop",
	// 	icon: "/skills/photoshop.png",
	// },
	// {
	// 	name: "Blender",
	// 	icon: "/skills/blender.png",
	// },

	// {
	// 	name: "AI",
	// 	icon: "/skills/ai.png",
	// },

	// {
	// 	name: "ThreeJS",
	// 	icon: "/skills/threejs.png",
	// },

	// {
	// 	name: "MongoDB",
	// 	icon: "/skills/mongodb.png",
	// },
];

// Reviews
import {
	RiStarFill,
	RiStarHalfLine,
	RiArrowLeftSLine,
	RiArrowRightSLine,
} from "@remixicon/react";

/* eslint-disable react/jsx-key */
export const starIcons = [<RiStarFill />, <RiStarHalfLine />];
export const arrowIcons = [<RiArrowLeftSLine />, <RiArrowRightSLine />];

export const reviewsData = [
	{
		image: "/reviews/client-4.png",
		name: "Dad",
		comment: "Nice!",
		stars: [1, 1, 1, 1, 0.5],
	},
	{
		image: "/reviews/client-3.png",
		name: "Mom",
		comment: "Nice! But job?",
		stars: [1, 1, 1, 1, 1],
	},
	{
		image: "/reviews/client-2.png",
		name: "Sis",
		comment:
			"Show me the cash moneyyy! Just kidding, your portfolio looks amazing. I'm so proud of you!",
		stars: [1, 1, 1, 1, 1],
	},
	{
		image: "/reviews/client-1.png",
		name: "Someday Client, CEO of Creative Agency",
		comment:
			"I absolutely love the blog design you created for me, Rythem. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
		stars: [1, 1, 1, 1, 0.5],
	},
	{
		image: "/reviews/client-5.png",
		name: "Happy Non-Profit Director Someday",
		comment:
			"your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
		stars: [1, 1, 1, 1, 1],
	},
];

// Projects
export const projectsData = [
	{
		name: "SparkleGrove.com",
		desc: "A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.",
		url: "/projects/image-1.jpg",
		tech: ["Figma", "Photoshop", "HTML"],
	},
	{
		name: "TechTrekker.net",
		desc: "A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.",
		url: "/projects/image-2.jpg",
		tech: ["Figma", "Photoshop"],
	},
	{
		name: "CozyNestHomes.org",
		desc: "A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.",
		url: "/projects/image-3.jpg",
		tech: ["HTML", "CSS", "JavaScript"],
	},
	{
		name: "WanderLuxeTravels.co",
		desc: "A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.",
		url: "/projects/image-4.jpg",
		tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
	},
	{
		name: "ByteBoosters.io",
		desc: "A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.",
		url: "/projects/image-5.jpg",
		tech: ["Figma", "ReactJS", "TailwindCSS", "CSS"],
	},
	{
		name: "GreenLeafGardens.biz",
		desc: "An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.",
		url: "/projects/image-6.jpg",
		tech: ["ReactJS", "TailwindCSS", , "CSS", "FramerMotion"],
	},
	{
		name: "PixelPerfectDesigns.info",
		desc: "A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.",
		url: "/projects/image-7.jpg",
		tech: ["NextJS", "FramerMotion"],
	},
	{
		name: "HarmonyHealthHub.com",
		desc: " A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.",
		url: "/projects/image-8.jpg",
		tech: ["NextJS", "ReactJS", "FramerMotion"],
	},
	{
		name: "StellarSkiesAstronomy.org",
		desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
		url: "/projects/image-9.jpg",
		tech: ["ReactJS", "JavaScript", "ThreeJS"],
	},
	{
		name: "UrbanEatsDelights.com",
		desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
		url: "/projects/image-10.jpg",
		tech: ["NextJS", "ThreeJS"],
	},
];

export const projectsButton = [
	"All",
	"Figma",
	"Photoshop",
	"HTML",
	"CSS",
	"JavaScript",
	"ReactJS",
	"TailwindCSS",
	"NextJS",
	"FramerMotion",
	"ThreeJS",
];

// Pricing Plans
export const pricingPlans = [
	{
		title: "Basic",
		pricing: "$500 - $1,000",
		features: [
			"Up to 5 pages",
			"Responsive design ",
			"Basic SEO ",
			"Contact form",
			"Social media links",
			"1 month support",
		],
		recommended: "Small businesses, personal websites, bloggers",
	},
	{
		title: "Premium",
		pricing: "$5,000 - $10,000",
		features: [
			"Unlimited pages",
			"Responsive design",
			"Comprehensive SEO",
			"Contact form ",
			"Social media links",
			"Advanced security",
			"E-commerce (unlimited products)",
			"Blog setup",
			"Google Analytics with custom reports",
			"6 months support",
		],
		recommended:
			"Medium-sized businesses, online stores, service providers",
	},
	{
		title: "Standard",
		pricing: "$1,500 - $3,000",
		features: [
			"Up to 10 pages",
			"Responsive design",
			"Advanced SEO",
			"CContact form",
			"Social media links",
			"E-commerce (20 products)",
			"Blog setup",
			"Google Analytics",
			"3 months support",
		],
		recommended:
			"Large businesses, complex e-commerce sites, custom web applications",
	},
];

import { RiCheckLine } from "@remixicon/react";

export const checkIcon = <RiCheckLine />;

// Q & A
export const questions = [
	{
		question: "How much do you charge for a website?",
		answer: "The website packages usually range from $2997 - $4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
	},
	{
		question: "Why are you so expensive?",
		answer: "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
	},
	{
		question: "How long does it take to build a website?",
		answer: "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
	},
	{
		question: "How do we communicate throughout the website build?",
		answer: "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
	},
	{
		question: "What will you need from me?",
		answer: "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
	},
	{
		question: "What if I don’t like the website?",
		answer: "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
	},
	{
		question: "Do you offer a payment schedule?",
		answer: "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
	},
	{
		question:
			"Can I make the final payment when the site is ready to go live?",
		answer: "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
	},
	{
		question: "Who hosts the website?",
		answer: "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
	},
	{
		question: "Can I update the website myself once it’s been built?",
		answer: "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
	},
	{
		question:
			"What if I don’t want to manage the website at all. Can you do it all for me?",
		answer: "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
	},
];

import { RiArrowDropDownLine } from "@remixicon/react";
export const questionArrow = <RiArrowDropDownLine />;

// Navbar
import { RiCopyrightLine } from "@remixicon/react";

export const copyRightIcon = <RiCopyrightLine />;

import {
	RiHome5Line,
	RiUserLine,
	RiHistoryLine,
	RiBriefcaseLine,
	RiUserStarLine,
	RiProjectorLine,
	RiPriceTag3Line,
	RiContactsBook2Line,
	RiQuestionAnswerLine,
} from "@remixicon/react";

export const navbarData = [
	{
		id: "home",
		name: "Home",
		icon: <RiHome5Line />,
	},
	{
		id: "about",
		name: "About",
		icon: <RiUserLine />,
	},
	{
		id: "experience",
		name: "Journey",
		icon: <RiHistoryLine />,
	},
	{
		id: "skills",
		name: "Skills",
		icon: <RiBriefcaseLine />,
	},
	{
		id: "reviews",
		name: "Reviews",
		icon: <RiUserStarLine />,
	},
	{
		id: "projects",
		name: "Projects",
		icon: <RiProjectorLine />,
	},
	{
		id: "pricing",
		name: "Pricing",
		icon: <RiPriceTag3Line />,
	},
	{
		id: "contact",
		name: "Contact",
		icon: <RiContactsBook2Line />,
	},
	{
		id: "questions",
		name: "Ques.",
		icon: <RiQuestionAnswerLine />,
	},
];

// Toggle
import { RiMoonFoggyFill, RiSunFoggyFill } from "@remixicon/react";

export const sunIcon = <RiSunFoggyFill />;
export const moonIcon = <RiMoonFoggyFill />;

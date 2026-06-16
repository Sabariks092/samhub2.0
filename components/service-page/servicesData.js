import sd from "@/public/images/v8/sd.png";
import wd from "@/public/images/v8/wd.png";
import gd from "@/public/images/v8/gd.png";
import md from "@/public/images/v8/md.png";
import vd from "@/public/images/v8/vd.png";
import uiux from "@/public/images/v8/ui-ux.png";
import smm from "@/public/images/v8/smm.png";
import ad from "@/public/images/v8/ad.png";
import seo from "@/public/images/v8/seo.png";

import thumb1v8 from "@/public/images/v8/thumb1v8.png";
import thumb2v8 from "@/public/images/v8/thumb2v8.png";
import thumb3v8 from "@/public/images/v8/thumb3v8.png";
import thumb4v8 from "@/public/images/v8/thumb4v8.png";
import thumb5v8 from "@/public/images/v8/thumb5v8.png";
import thumb6v8 from "@/public/images/v8/thumb6v8.png";

import image1v8 from "@/public/images/v8/image1v8.png";
import image2v8 from "@/public/images/v8/image2v8.png";
import image3v8 from "@/public/images/v8/image3v8.png";

import ServiceDetails from "@/public/images/service/service-details.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";

export const servicesData = {
	"software-development": {
		title: "Software Development",
		description: "Our custom software development services are tailored to align with your unique business processes and challenges. We build scalable, secure, and robust applications that streamline operations and drive enterprise value.",
		serviceDetailsImage: thumb1v8,
		subTitle: "How our agency provides Software Development services",
		subDescription: "From requirements analysis to deployment and ongoing support, we utilize agile methodologies, cloud-native architectures, and modern engineering practices to deliver software that scales with your growth.",
		strategiesTitle: "Engineering Strategies",
		strategiesDescription: "We combine technical expertise with business acumen to create software that delivers continuous business value.",
		strategiesList: [
			"Enterprise architecture design",
			"Agile product lifecycle",
			"Microservices & API design",
			"Cloud-native deployments",
			"DevSecOps & CI/CD pipelines",
			"Rigorous QA automation"
		],
		approachTitle: "Our Development Approach",
		approachDescription: "A structured, transparent engineering process focused on delivering quality at speed.",
		approachList: [
			{
				step: "1. Discovery & Specifications",
				text: "Deep collaboration to outline functional requirements, map database schemas, and model system workflows."
			},
			{
				step: "2. Sprint-Based Engineering",
				text: "Iterative development cycles with frequent check-ins, codebase sanity checks, and regular client feedback loops."
			},
			{
				step: "3. Continuous Integration & QA",
				text: "Automated testing, security scanning, and seamless cloud deployment pipelines for robust and bug-free releases."
			}
		],
		serviceThumbImage: image1v8,
		serviceIcon: sd
	},
	"website-development": {
		title: "Website Development",
		description: "We craft visually stunning, responsive, and search-optimized websites designed to convert visitors into loyal customers. Leveraging the latest frontend and backend technologies, we ensure high speed, accessibility, and stellar security.",
		serviceDetailsImage: thumb2v8,
		subTitle: "How our agency provides Website Development services",
		subDescription: "Whether you need a bespoke corporate landing page, a high-converting e-commerce storefront, or a custom CMS integration, our web engineers build sites that deliver top performance and outstanding user engagement.",
		strategiesTitle: "Modern Web Strategies",
		strategiesDescription: "Building modern websites requires a blend of speed, accessibility, SEO readiness, and scalability.",
		strategiesList: [
			"Responsive & fluid grid systems",
			"SEO-friendly semantic HTML",
			"Headless CMS implementations",
			"Global CDN & caching setups",
			"Performance budget optimization",
			"W3C Accessibility standards"
		],
		approachTitle: "Our Web Process",
		approachDescription: "An iterative methodology focused on pixel-perfect layouts and seamless web performance.",
		approachList: [
			{
				step: "1. Layout & Prototyping",
				text: "Designing responsive wireframes that map user flows, branding tokens, and content layout architectures."
			},
			{
				step: "2. Modern Frontend Coding",
				text: "Writing clean Next.js, React, or static web solutions for snappy interactions and fast page load times."
			},
			{
				step: "3. Launch & Speed Tuning",
				text: "Thorough testing across desktop/mobile browsers, caching optimization, and Core Web Vitals checks."
			}
		],
		serviceThumbImage: image2v8,
		serviceIcon: wd
	},
	"digital-branding": {
		title: "Digital Branding",
		description: "Digital branding is about creating a cohesive, memorable identity that resonates with your audience across all digital channels. We define your brand voice, visual assets, and positioning strategy to help you stand out.",
		serviceDetailsImage: thumb3v8,
		subTitle: "How our agency provides Digital Branding services",
		subDescription: "Our team collaborates with you to craft a compelling brand narrative, premium logos, typographic systems, and comprehensive brand guidelines that ensure consistency across all your customer touchpoints.",
		strategiesTitle: "Identity Strategies",
		strategiesDescription: "Aligning creative designs with market research and brand psychology to build trust and affinity.",
		strategiesList: [
			"Brand positioning & voice",
			"Typography & design systems",
			"Logo & corporate identity",
			"Audience persona building",
			"Market research & competitor audits",
			"Multi-channel consistency maps"
		],
		approachTitle: "Our Brand Approach",
		approachDescription: "A strategic creative process that brings your business vision to life.",
		approachList: [
			{
				step: "1. Brand Discovery",
				text: "Uncovering your core values, mission, target demographics, and market differentiators to form a baseline."
			},
			{
				step: "2. Visual Identity Design",
				text: "Creating conceptual designs for logos, color palettes, typography, and mood boards for collaborative feedback."
			},
			{
				step: "3. Guidelines & Collateral",
				text: "Compiling a complete brand style guide and design system to ensure seamless brand applications across materials."
			}
		],
		serviceThumbImage: image3v8,
		serviceIcon: gd
	},
	"ui-ux-development": {
		title: "UI/UX Development",
		description: "UI/UX design involves a combination of research, planning, design, and testing activities to create digital products that meet the needs of users and provide them with a positive experience. Good UI/UX design is essential for digital success.",
		serviceDetailsImage: ServiceDetails,
		subTitle: "How our agency provides UI/UX design services",
		subDescription: "UI/UX design services typically encompass the creation and optimization of user interfaces (UI) and user experiences (UX) for the digital products such as websites, mobile apps, and software applications.",
		strategiesTitle: "UI/UX design strategies",
		strategiesDescription: "The broader context of a project aligning to design decisions with business goals & creating roadmap for achieving optimal user experiences.",
		strategiesList: [
			"Measurement & analytics",
			"User-centered approach",
			"Persona development",
			"Wireframing & prototyping",
			"Stakeholder alignment",
			"Iterative improvement"
		],
		approachTitle: "Our Approach",
		approachDescription: "The approach of a digital agency typically encompasses its methodologies, philosophies, and strategies for delivering value to clients.",
		approachList: [
			{
				step: "1. Understanding Client Needs",
				text: "We begin by thoroughly understanding the target industries & unique challenges of our clients' target audiences."
			},
			{
				step: "2. Collaborative Planning",
				text: "We work closely with our clients to co-create a tailored strategy that aligns with their objectives & budget."
			},
			{
				step: "3. In-Depth Research",
				text: "We conduct in-depth research & analysis to inform strategies. This includes market research and competitor audits."
			}
		],
		serviceThumbImage: Thumb2,
		serviceIcon: uiux
	},
	"mobile-app-development": {
		title: "Mobile App Development",
		description: "We design and build high-performance native and cross-platform mobile apps for iOS and Android. Our focus is on creating smooth animations, offline-first capabilities, and intuitive layouts that keep users engaged.",
		serviceDetailsImage: thumb4v8,
		subTitle: "How our agency provides Mobile App Development services",
		subDescription: "Using technologies like React Native, Flutter, Swift, and Kotlin, we deliver mobile solutions that scale. From App Store submission to backend APIs, we manage the entire lifecycle.",
		strategiesTitle: "Mobile App Strategies",
		strategiesDescription: "Developing for mobile requires optimization for device constraints, battery efficiency, and platform-specific behaviors.",
		strategiesList: [
			"Cross-platform consistency",
			"Offline caching & sync",
			"Push notification engines",
			"App store optimization (ASO)",
			"Biometric security integration",
			"Telemetry & crash tracking"
		],
		approachTitle: "Our Mobile Approach",
		approachDescription: "A robust mobile development cycle focused on performance and seamless navigation.",
		approachList: [
			{
				step: "1. UI & Mobile Wireframes",
				text: "Drafting layouts optimized for thumb reach, touch targets, and mobile-friendly layouts."
			},
			{
				step: "2. Agile Development Sprints",
				text: "Writing high-quality code with real-device testing, battery audits, and visual polish."
			},
			{
				step: "3. Store Submission & Launch",
				text: "Guiding the application through Google Play Store and Apple App Store review and publishing guidelines."
			}
		],
		serviceThumbImage: image1v8,
		serviceIcon: md
	},
	"seo-optimization": {
		title: "SEO Optimization",
		description: "Search Engine Optimization is vital for driving sustainable, organic traffic. We optimize your website's architecture, content, and authority to help you rank at the top of search engine result pages (SERPs).",
		serviceDetailsImage: thumb5v8,
		subTitle: "How our agency provides SEO Optimization services",
		subDescription: "We provide full-spectrum SEO services, including keyword research, content strategy, technical SEO audits, core web vitals optimization, and high-quality link building.",
		strategiesTitle: "SEO Growth Strategies",
		strategiesDescription: "A data-backed SEO strategy designed to outrank competitors and capture high-intent search traffic.",
		strategiesList: [
			"Advanced keyword discovery",
			"Technical site audit & fixes",
			"On-page content optimization",
			"Core Web Vitals tuning",
			"Structured data schema markup",
			"Ethical backlink building"
		],
		approachTitle: "Our SEO Process",
		approachDescription: "A continuous iteration of analysis, execution, and monitoring to maintain and grow search visibility.",
		approachList: [
			{
				step: "1. SEO & Technical Audit",
				text: "Analyzing your website's indexing, crawlability, speed, schema tags, and existing ranking keywords."
			},
			{
				step: "2. Keyword & Competitor Research",
				text: "Identifying low-hanging fruit, competitor keyword gaps, and high-impact search queries in your industry."
			},
			{
				step: "3. Content & Link Execution",
				text: "Optimizing landing pages and building digital PR to increase search authority and organic search volume."
			}
		],
		serviceThumbImage: image3v8,
		serviceIcon: seo
	},
	"meta-and-google-ads": {
		title: "Meta and Google Ads",
		description: "Accelerate your user acquisition with highly targeted paid advertising campaigns. We build, manage, and scale Meta (Facebook & Instagram) and Google Ads that drive measurable conversions and maximize return on ad spend (ROAS).",
		serviceDetailsImage: thumb6v8,
		subTitle: "How our agency provides Paid Ads services",
		subDescription: "Our campaign managers leverage audience segmentation, predictive budgeting, conversion tracking, and ad creative optimization to build a sustainable customer acquisition engine.",
		strategiesTitle: "Ad Campaign Strategies",
		strategiesDescription: "A balance of high-impact ad copy, data-driven targeting, and optimization to lower acquisition costs.",
		strategiesList: [
			"Precision demographic targeting",
			"A/B creative & copy testing",
			"Custom audience & retargeting",
			"Smart bidding & budget scaling",
			"Full-funnel attribution setups",
			"Ad fatigue monitoring"
		],
		approachTitle: "Our PPC Methodology",
		approachDescription: "A conversion-focused management strategy that maximizes ROI through rapid testing and scaling.",
		approachList: [
			{
				step: "1. Campaign Structuring",
				text: "Defining target keywords, visual styles, custom conversion events, and budget thresholds."
			},
			{
				step: "2. Creative Development",
				text: "Designing ad visuals, writing copy variants, and optimizing target landing pages for conversion."
			},
			{
				step: "3. Data Auditing & Scaling",
				text: "Weekly CPA and CTR tracking, adjusting bids, and moving budget dynamically to the highest-performing channels."
			}
		],
		serviceThumbImage: image2v8,
		serviceIcon: ad
	},
	"social-media-marketing": {
		title: "Social Media Marketing",
		description: "Social media is where your customers hang out. We design engaging content, manage your channels, and engage your community to build brand loyalty and drive referral traffic across major platforms.",
		serviceDetailsImage: thumb2v8,
		subTitle: "How our agency provides Social Media Marketing services",
		subDescription: "Our services cover content planning, graphic asset creation, caption writing, influencer outreach, and community moderation for LinkedIn, Instagram, TikTok, and Twitter.",
		strategiesTitle: "Social Media Strategies",
		strategiesDescription: "Creating organic social media strategies that foster community engagement and viral potential.",
		strategiesList: [
			"Visual style guides for social",
			"Content calendars & scheduling",
			"Community management & replies",
			"Platform-specific format tuning",
			"Influencer partnership sourcing",
			"Social listening & brand audits"
		],
		approachTitle: "Our Social Strategy",
		approachDescription: "A collaborative, trend-aware content process designed to elevate your brand presence.",
		approachList: [
			{
				step: "1. Audience Alignment",
				text: "Determining which social platforms and content formats resonate best with your target demographic."
			},
			{
				step: "2. Creative Content Production",
				text: "Generating high-quality graphics, videos, carousel posts, reels, and insight-driven copy."
			},
			{
				step: "3. Community Engagement",
				text: "Proactively interacting with followers, hosting discussions, and monitoring monthly traffic conversion metrics."
			}
		],
		serviceThumbImage: image3v8,
		serviceIcon: smm
	},
	"video-production-and-editing": {
		title: "Video Production & Editing",
		description: "Video content is the most engaging form of media today. We write, produce, and edit professional promotional videos, product explainers, social clips, and brand stories that captivate your audience.",
		serviceDetailsImage: thumb4v8,
		subTitle: "How our agency provides Video Production services",
		subDescription: "Our video team handles scripting, storyboard planning, motion graphics, audio sync, sound design, and color grading to deliver high-definition visual narratives.",
		strategiesTitle: "Video Content Strategies",
		strategiesDescription: "Crafting narratives that command attention within the first few seconds and hold it to the call to action.",
		strategiesList: [
			"Scripting & storyboarding",
			"Motion graphics & title cards",
			"Advanced color grading",
			"Audio mastering & sound design",
			"Multi-platform aspect ratios",
			"Bespoke stock overlay curation"
		],
		approachTitle: "Our Video Workflow",
		approachDescription: "A seamless post-production and creative process that ensures top-tier video quality.",
		approachList: [
			{
				step: "1. Story & Script Development",
				text: "Drafting the flow, narration, audio track selection, and scene outline for your approval."
			},
			{
				step: "2. Assembly & Rough Cut",
				text: "Selecting the best takes, pacing the edits, and matching the narration track to visuals."
			},
			{
				step: "3. Polish & Sound Design",
				text: "Adding sound effects, transition animations, color grading, and titles to finalize the export."
			}
		],
		serviceThumbImage: image2v8,
		serviceIcon: vd
	}
};

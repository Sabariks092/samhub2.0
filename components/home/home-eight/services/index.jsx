import sd from "@/public/images/v8/sd.png";
import wd from "@/public/images/v8/wd.png";
import gd from "@/public/images/v8/gd.png";
import md from "@/public/images/v8/md.png";
import vd from "@/public/images/v8/vd.png";
import uiux from "@/public/images/v8/ui-ux.png";
import smm from "@/public/images/v8/smm.png";
import ad from "@/public/images/v8/ad.png";
import seo from "@/public/images/v8/seo.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
const servicesData = [
	{
		id: 1,
		icon: sd,
		title: "Software Development",
		slug: "software-development",
		description:
			"Custom software design, implementation, and maintenance services tailored to your specific business requirements.",
	},
	{
		id: 2,
		icon: wd,
		title: "Website Development",
		slug: "website-development",
		description:
			"Stunning, responsive, and high-performance websites engineered using the latest modern web technologies.",
	},
	{
		id: 3,
		icon: gd,
		title: "Digital Branding",
		slug: "digital-branding",
		description:
			"Create a powerful digital identity with strategic positioning, logo design, and brand guidelines.",
	},
	{
		id: 4,
		icon: uiux,
		title: "UI/UX Development",
		slug: "ui-ux-development",
		description:
			"Crafting intuitive and engaging user interfaces and user experiences to maximize user satisfaction and conversion.",
	},
	{
		id: 5,
		icon: md,
		title: "Mobile App Development",
		slug: "mobile-app-development",
		description:
			"High-quality native and cross-platform mobile application development for iOS and Android devices.",
	},
	{
		id: 6,
		icon: vd,
		title: "Video Production & Editing",
		slug: "video-production-and-editing",
		description:
			"High-definition promotional videos, visual content creation, and professional post-production editing.",
	},
	{
		id: 7,
		icon: ad,
		title: "Meta and Google Ads",
		slug: "meta-and-google-ads",
		description:
			"Highly targeted paid advertising campaigns across Facebook, Instagram, and Google platforms to maximize ROI.",
	},
	{
		id: 8,
		icon: smm,
		title: "Social Media Marketing",
		slug: "social-media-marketing",
		description:
			"Creative content strategy, scheduling, and community engagement to build brand awareness on social platforms.",
	},
	{
		id: 9,
		icon: seo,
		title: "SEO Optimization",
		slug: "seo-optimization",
		description:
			"Improve search visibility, drive organic traffic, and optimize ranking performance on top search engines.",
	},

];
function Services() {
	return (
		<section className="sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>We provide IT and business solutions</h2>
					</div>
				</div>

				<div className="sofax-features-wrapv8">
					{servicesData.slice(0, 6).map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="sofax-features-boxv8">
							<div>
								<div >
									<div className="mb-4">
										<img src={service.icon.src} width={65}  alt="" />
									</div>
								</div>
								<div className="sofax-features-contentv7">
									<h4>{service.title}</h4>
									<p>{service.description}</p>
								</div>
								<Link href={`/service/${service.slug}`}>
									<div className="sofax-icon-btn  sofax-blog-icon-btn blog-versionv7 mt-30">
										Read More
										<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 1L19 8M19 8L12 15M19 8L1 8"
												stroke="#0E0E0E"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</Link>
							</div>
						</FadeInStagger>
					))}
					{servicesData.slice(6,9).map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="sofax-features-boxv8">
							<div>
								<div className="sofax-features-iconv7">
									<div className="w-12 h-12 ">
										<img src={service.icon.src} className="w-full h-full object-cover" alt="" />
									</div>
								</div>
								<div className="sofax-features-contentv7">
									<h4>{service.title}</h4>
									<p>{service.description}</p>
								</div>
								<Link href={`/service/${service.slug}`}>
									<div className="sofax-icon-btn  sofax-blog-icon-btn blog-versionv7 mt-30">
										Read More
										<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 1L19 8M19 8L12 15M19 8L1 8"
												stroke="#0E0E0E"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</Link>
							</div>
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;

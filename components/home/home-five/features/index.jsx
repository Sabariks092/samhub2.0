import Icon1 from "@/public/images/v5/icon1.png";
import Icon2 from "@/public/images/v5/icon2.png";
import Icon3 from "@/public/images/v5/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Branding & Design Services",
		description:
			"Development of unique brand identity, professional logo design, and matching visuals to establish a memorable online presence.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Web & Mobile Development",
		description:
			"High-performance website and mobile application development engineered using state-of-the-art modern technologies.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Digital Marketing & Ads",
		description:
			"Driving growth, leads, and sales via organic SEO, social media management, and targeted Meta & Google ad campaigns.",
	},
];
function Features() {
	return (
		<section className=" section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>Features that can help you boost your progress</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} className="col-lg-4 col-md-12" index={index}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;

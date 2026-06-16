import icon1 from "@/public/images/features/app-development.png";
import icon2 from "@/public/images/features/devops.png";
import icon3 from "@/public/images/features/layers.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: icon1,
		title: "Web & Mobile App Development",
		description: "Creating seamless web and mobile apps tailored to your business needs.",
	},
	{
		id: 2,
		icon: icon2,
		title: "Software Development & Maintanence",
		description: "End-to-end software development with ongoing maintenance and support.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Digital Branding Elegance",
		description: "Crafting unique & memorable brands that stand out in the digital space.",
	},
];

function Features() {
	return (
		<section className="sofax-features-section-v8">
			<div className="container">
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;

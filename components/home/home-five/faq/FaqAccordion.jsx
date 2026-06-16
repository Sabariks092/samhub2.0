import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
function FaqAccordion() {
	return (
		<div className="sofax-accordion-section-wrapper">
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							What services does Samhub Innovations offer?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion2"
					>
						<div className="accordion-body sofax-accordion-body">
							We offer comprehensive branding and digital solutions, including Software & Website Development, Creative Digital Branding, UI/UX Design, Mobile App Development, SEO, Ads Management (Meta & Google), Social Media Marketing, and Video Production.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							How does Samhub help in growing my business?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							We combine strategic marketing, targeted paid ads, search engine optimization, and premium web/app development to boost your online visibility, drive customer engagement, and maximize conversions.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							Where is Samhub Innovations located?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							We are proudly based in Puducherry, delivering top-tier branding and digital marketing/development solutions locally and globally.
						</div>
					</div>
				</div>
			</div>
			<div className="accordion sofax-accordion-section-v2 mt-24" id="sofax-accordion3">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							Do you provide customized branding strategies?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion3"
					>
						<div className="accordion-body sofax-accordion-body">
							Yes! Every business is unique. We tailor our digital branding, content marketing, and advertising strategies specifically to match your target audience and business objectives.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							How long does it take to develop a custom website?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Project timelines depend on the scope and complexity. A standard business website can take 2-4 weeks, while complex web applications or mobile apps may require 6-12 weeks.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							How do I get started with Samhub?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Getting started is easy! You can contact us through our website contact form or send us an email, and our team will get in touch with you to schedule a consultation.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default FaqAccordion;

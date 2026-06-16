import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import AboutOne from "@/components/home/home-five/about-one";
import Faq from "@/components/home/home-five/faq";
import Features from "@/components/home/home-five/features";
import TeamMembers from "@/components/team-page/TeamMembers";

// Teams images
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function AboutUs() {
	return (
		< div className="mt-5">
			<BreadCrumb title="About Us" />
			<Features />
			<AboutOne />
			{/* <TeamMembers /> */}
			<AutoSlider />
			<Faq />
			<Contact/>
			<hr />
		</div>
	);
}

export default AboutUs;

import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/faq-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function FaqPage() {
	return (
		<div className="mt-5">
			<BreadCrumb title="Faq" />
			<Faq />
			<AutoSlider />
		</div>
	);
}

export default FaqPage;

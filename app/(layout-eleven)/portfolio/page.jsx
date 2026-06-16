import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function PortfolioPage() {
	return (
		<div className="mt-5">
			<BreadCrumb title="Our Portfolio" />
			<PortfolioList />
			<Faq />
		</div>
	);
}

export default PortfolioPage;

import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/single";
import { servicesData } from "@/components/service-page/servicesData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
	const { slug } = params;
	const service = servicesData[slug];
	if (!service) {
		return {
			title: "Service Not Found | Samhub Innovations",
			description: "The requested service could not be found.",
		};
	}
	return {
		title: `${service.title} | Samhub Innovations | Best Branding Agency In Puducherry`,
		description: service.description,
	};
}

export async function generateStaticParams() {
	return Object.keys(servicesData).map((slug) => ({
		slug,
	}));
}

function ServiceDetailsPage({ params }) {
	const { slug } = params;
	const service = servicesData[slug];
	if (!service) {
		notFound();
	}

	return (
		<div className="mt-5">
			<BreadCrumb title={service.title} />
			<SingleServiceDetails slug={slug} />
			<Faq />
			<AutoSlider />
		</div>
	);
}

export default ServiceDetailsPage;

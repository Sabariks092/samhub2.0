import JobDetails from "@/components/career-page/single/JobDetails";
import BreadCrumb from "@/components/common/Breadcrumb";
import LogoSlider from "@/components/common/logo-slider";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function SingleCareerPage() {
	return (
		<>
			<BreadCrumb title="UI/UX Designer" />
			<JobDetails />
			<LogoSlider light />
		</>
	);
}

export default SingleCareerPage;

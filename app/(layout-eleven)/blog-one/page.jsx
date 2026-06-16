import SingleBlogOne from "@/components/blog-page/single-blog/SingleBlogOne";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "10 Branding Principles for Growing Startup Businesses | Samhub Innovations",
	description: "10 Branding Principles for Growing Startup Businesses | Samhub Innovations",
};
function BlogOnePage() {
	return (
		<div className="mt-5">
			<BreadCrumb title="Blog Details" />
			<SingleBlogOne />
			<AutoSlider />
		</div>
	);
}
export default BlogOnePage;

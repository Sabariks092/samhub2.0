import Blog from "@/components/blog-page";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function BlogPage() {
	return (
		<div className="mt-5">
			<BreadCrumb title="Blog" />
			<Blog />
			<AutoSlider />
		</div>
	);
}

export default BlogPage;

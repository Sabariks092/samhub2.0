import SingleBlog from "@/components/blog-page/single-blog";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function SingleBlogPage() {
	return (
		<>
			<BreadCrumb title="Blog Details" />
			<SingleBlog />
			<AutoSlider />
		</>
	);
}

export default SingleBlogPage;

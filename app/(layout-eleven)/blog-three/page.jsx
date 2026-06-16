import SingleBlogThree from "@/components/blog-page/single-blog/SingleBlogThree";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Bridging UI/UX Design and Conversions | Samhub Innovations",
	description: "Bridging UI/UX Design and Conversions | Samhub Innovations",
};
function BlogThreePage() {
	return (
		<div className="mt-5">
			<BreadCrumb title="Blog Details" />
			<SingleBlogThree />
			<AutoSlider />
		</div>
	);
}
export default BlogThreePage;

import SingleBlogTwo from "@/components/blog-page/single-blog/SingleBlogTwo";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "The Power of Modern Web Development | Samhub Innovations",
	description: "The Power of Modern Web Development | Samhub Innovations",
};
function BlogTwoPage() {
	return (
		< div className="mt-5">
			<BreadCrumb title="Blog Details" />
			<SingleBlogTwo />
			<AutoSlider />
		</div >
	);
}
export default BlogTwoPage;

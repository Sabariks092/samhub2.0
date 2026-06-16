import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";

const blogData = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
		category: "Branding",
		date: "June 12, 2026",
		title: "10 Branding Principles for Growing Startup Businesses",
		description:
			"Understand the fundamental principles of branding, from brand positioning and identity design to visual coherence across platforms.",
		url: "blog-one",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
		category: "Development",
		date: "June 14, 2026",
		title: "The Power of Modern Web Development in Scaling Your Startup",
		description:
			"A look at how modern web development frameworks and performance optimization contribute directly to user retention and sales.",
		url: "blog-two",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
		category: "UI/UX Design",
		date: "June 15, 2026",
		title: "Bridging UI/UX Design and Conversions to Boost ROI",
		description:
			"How micro-interactions, clean layouts, and intuitive user experiences drive conversions and user engagement.",
		url: "blog-three",
	},
];
function Blog() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="sofax-inner-blog-wrap" key={blog.id} index={index}>
								<BlogCard blog={blog} />
							</FadeInStagger>
						))}
						<Pagination />
					</div>
					<div className="col-lg-4">
						<div className="sofax-inner-blog-sidebar-menu">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
							<NewsLetter />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;

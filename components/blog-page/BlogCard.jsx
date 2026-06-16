import ArrowRight from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog: { title, category, description, date, image, url } }) {
	const blogLink = url ? `/${url}` : "/single-blog";
	return (
		<>
			<div className="sofax-inner-blog-img">
				<img src={typeof image === "string" ? image : image.src} alt="blog thumb" />
			</div>
			<div className="sofax-inner-blog-content">
				<div className="sofax-inner-blog-meta">
					<Link href={blogLink}>
						<h5>{category}</h5>
						<ul>
							<li>{date}</li>
						</ul>
					</Link>
				</div>
				<div className="sofax-inner-blog-text">
					<Link href={blogLink}>
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>
				<Link className="sofax-icon-btn sofax-blog-icon-btn" href={blogLink}>
					Learn More <Image src={ArrowRight} alt="arrow right" />
				</Link>
			</div>
		</>
	);
}

export default BlogCard;

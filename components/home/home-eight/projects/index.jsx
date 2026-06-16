import thumb1 from "@/public/images/portfolio/wsr-project.png";
import thumb2 from "@/public/images/portfolio/error-studio-project.png";
import thumb3 from "@/public/images/portfolio/dowt-project.png";
import thumb4 from "@/public/images/portfolio/ayntech-project.png";
import thumb5 from "@/public/images/portfolio/soulsync-project.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import ProjectCard from "./ProjectCard";
const projectsData = [
	{
		id: 1,
		image: thumb1,
		title: "Wild South Raiders",
		category: "Buisness Website",
		link: "https://wildsouthraiders.vercel.app/",
	},
	{
		id: 2,
		image: thumb2,
		title: "Erro Studio",
		category: "Brand Portfolio",
		link: "https://errorstudio2020.netlify.app/",
	},
	{
		id: 3,
		image: thumb3,
		title: "Dreams One Way Taxi",
		category: "Booking Web App",
		link: "https://dreamsonewaytaxi.com/",
	},
	{
		id: 4,
		image: thumb4,
		title: "Ayntech ",
		category: "Branding Portfolio",
		link: "https://ayntech.co/",
	},
	{
		id: 5,
		image: thumb5,
		title: "Soul Sync",
		category: "Mental Wellness Platform",
		link: "https://1soulsync.netlify.app/",
	},

];
function Projects() {
	return (
		<div className="section sofax-section-padding" id="project">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Recently completed to our latest projects</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="View All Projects" href="/service">
									<span className="button-wraper">View All Projects</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{projectsData.map((project, index) => (

						<FadeInStagger key={project.id} index={index} className="col-lg-4 col-md-6">
								<ProjectCard project={project} />
				
						</FadeInStagger>

					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;

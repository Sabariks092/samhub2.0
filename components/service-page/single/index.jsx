import Icon from "@/public/images/service/icon5.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import { servicesData } from "../servicesData";
import Contact from "@/components/contact-us-page";

function SingleServiceDetails({ slug = "ui-ux-development" }) {
	const service = servicesData[slug] || servicesData["ui-ux-development"];
	const {
		title,
		description,
		serviceDetailsImage,
		subTitle,
		subDescription,
		strategiesTitle,
		strategiesDescription,
		strategiesList,
		approachTitle,
		approachDescription,
		approachList,
		serviceThumbImage
	} = service;

	return (
		<div>
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-default-content inner-service1">
					<h2>{title}</h2>
					<p>{description}</p>
					<FadeInUp className="sofax-service-content-thumb extra-mt">
						<Image src={serviceDetailsImage} alt="ServiceDetails" />
					</FadeInUp>
				</div>
				<div className="sofax-default-content sofax-inner-service-details position-ralatiove">
					<h2>{subTitle}</h2>
					<p>{subDescription}</p>
					<div className="sofax-service-inner-details-shape">
						<Image src={Shape2} alt="Shape2" />
					</div>
				</div>

				<div className="sofax-section-title">
					<div className="row">
						<div className="col-lg-5">
							<div className="sofax-default-content inner-service2 dark-bg">
								<h3 className="light-color">{strategiesTitle}</h3>
								<p>{strategiesDescription}</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sofax-default-content">
								<div className="sofax-list-icon-wrap">
									<div className="sofax-list-icon-icon">
										<ul>
											{strategiesList.slice(0, 3).map((item, idx) => (
												<li key={idx}>
													<Image src={Icon} alt="Icon" />
													{item}
												</li>
											))}
										</ul>
									</div>
									<div className="sofax-list-icon-icon">
										<ul>
											{strategiesList.slice(3, 6).map((item, idx) => (
												<li key={idx}>
													<Image src={Icon} alt="Icon" />
													{item}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50">
							<h2>{approachTitle}</h2>
							<p>{approachDescription}</p>
							<div className="extra-mt">
								{approachList.map((item, idx) => (
									<div className="sofax-inner-service-content-data" key={idx}>
										<h4>{item.step}</h4>
										<p>{item.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-content-thumb">
							<Image src={serviceThumbImage} alt="Thumbs" />
						</FadeInRight>
					</div>
				</div>
			</div>
			
		</section>
		<Contact/>
		</div>
	);
}

export default SingleServiceDetails;

import Logo from "@/public/images/logo/Sam-Hub.png";
import Image from "next/image";
import Link from "next/link";
import FooterCopyright from "./FooterCopyright";
import FooterCta from "./FooterCta";
import { LocateIcon, LocationEditIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react";
import whatsappIcon from "@/public/images/sm/3dicons-whatsapp-front-color.webp";
import xIcon from "@/public/images/sm/3dicons-x-front-color.webp";
import instagramIcon from "@/public/images/sm/3dicons-instagram-front-color.webp";
import discordIcon from "@/public/images/sm/3dicons-discord-front-color.webp";

function Footer() {
	const socialLinks = [
		{ name: "WhatsApp", icon: whatsappIcon, url: "https://whatsapp.com/channel/0029Va9aaK78F2pKhVgphi0q" },
		{ name: "X", icon: xIcon, url: "https://x.com/southraidersoff" },
		{ name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com/southraiders_official/" },
		{ name: "Discord", icon: discordIcon, url: "https://discord.com/invite/mz3kNKJ2dw" },
	];
	return (
		<footer className="sofax-footer-section">
			<div className="container">
				<FooterCta />
				<div className="sofax-footer-top">
					<div className="row">
						{/* Grid 1: Logo and About */}
						<div className="col-lg-3 col-md-3 col-sm-12 mb-4 mb-lg-0">
							<div className="sofax-footer-wrap mr-25">
								<Link href="/">
									<Image src={Logo} alt="logo" width={100} height={100} style={{ objectFit: "contain" }} />
								</Link>
								<p className="mt-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
									Empowering your business journey with premium branding, web, and marketing solutions built for growth.
								</p>

							</div>
						</div>

						{/* Grid 2: Quick Links */}
						<div className="col-lg-3 col-md-3 col-sm-12 mb-4 mb-lg-0">
							<div className="sofax-footer-menu ml-20">
								<h5>Quick Links</h5>
								<ul>
									<li>
										<Link href="/about-us" style={{ fontSize: "16px" }}>About Us</Link>
									</li>
									<li>
										<Link href="/portfolio" style={{ fontSize: "16px" }}>Our Portfolio</Link>
									</li>
									<li>
										<Link href="/blog" style={{ fontSize: "16px" }}>Blogs</Link>
									</li>
									<li>
										<Link href="/contact-us" style={{ fontSize: "16px" }}>Contact Us</Link>
									</li>
									<li>
										<Link href="/terms-and-condition" style={{ fontSize: "16px" }}> Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Grid 3: Services */}
						<div className="col-lg-3 col-md-3 col-sm-12 mb-4 mb-md-0">
							<div className="sofax-footer-menu">
								<h5>Our Services</h5>

								<ul className="ps-0 " style={{ listStyle: "none" }}>
									<li className="mb-2"><Link href="/service/software-development" style={{ fontSize: "16px" }}>Software Development</Link></li>
									<li className="mb-2"><Link href="/service/website-development" style={{ fontSize: "16px" }}>Website Development</Link></li>
									<li className="mb-2"><Link href="/service/digital-branding" style={{ fontSize: "16px" }}>Digital Branding</Link></li>
									<li className="mb-2"><Link href="/service/ui-ux-development" style={{ fontSize: "16px" }}>UI/UX Designmg</Link></li>
									<li className="mb-2"><Link href="/service/mobile-app-development" style={{ fontSize: "16px" }}>Mobile App Development</Link></li>

									<li className="mb-2"><Link href="/service/seo-optimization" style={{ fontSize: "16px" }}>SEO Optimization</Link></li>
									<li className="mb-2"><Link href="/service/meta-and-google-ads" style={{ fontSize: "16px" }}>Meta & Google Ads</Link></li>
									<li className="mb-2"><Link href="/service/social-media-marketing" style={{ fontSize: "16px" }}>SMM Marketing</Link></li>
									<li className="mb-2"><Link href="/service/video-production-and-editing" style={{ fontSize: "16px" }}>Video Production and Editing</Link></li>
								</ul>

							</div>
						</div>

						{/* Grid 4: Contact Details */}
						<div className="col-lg-3 col-md-3 col-sm-12">
							<div className="sofax-footer-menu">
								<h5>Contact Details</h5>
								<ul className="ps-0" style={{ listStyle: "none" }}>
									<li className="mb-3 d-flex align-items-center" style={{ fontSize: "16px", color: "var(--body-color)" }}>
										<strong className="me-2"><PhoneIcon size={18} /></strong> <a href="tel:+918778377449" style={{ color: "inherit" }}>+91 87783 77449</a>
									</li>
									<li className="mb-3 d-flex align-items-center" style={{ fontSize: "16px", color: "var(--body-color)" }}>
										<strong className="me-2"><MailIcon size={18} /></strong> <a href="mailto:contact.samhub@gmail.com" style={{ color: "inherit" }}>contact.samhub@gmail.com</a>
									</li>
									<li className="d-flex align-items-start" style={{ fontSize: "16px", color: "var(--body-color)", lineHeight: "1.5" }}>
										<strong className="me-2"><MapPin size={18} /></strong>
										No.07, Anbu Nagar, Uruvayar, Puducherry - 605005
									</li>
								</ul>
							</div>
							<div className="my-5">
								<h5 className="mb-3">Follow Us</h5>
								<div className="row align-items-center justify-content-start">

									{/* Right Column: Left-Aligned Icons */}
									<div className="col-auto">
										<div className="d-flex align-items-center justify-content-start" style={{ gap: "12px" }}>
											{socialLinks.map((social) => (
												<a
													key={social.name}
													href={social.url}
													target="_blank"
													rel="noopener noreferrer"
													title={social.name}
													className="d-inline-flex"
												>
													<Image
														src={social.icon}
														alt={social.name}
														width={80}
														height={80}
														className="object-fit-contain social-icon"
													/>
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<FooterCopyright />
			</div>
		</footer>
	);
}

export default Footer;

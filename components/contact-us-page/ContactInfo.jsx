import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Image from "next/image";
import whatsappIcon from "@/public/images/sm/3dicons-whatsapp-front-color.webp";
import xIcon from "@/public/images/sm/3dicons-x-front-color.webp";
import instagramIcon from "@/public/images/sm/3dicons-instagram-front-color.webp";
import discordIcon from "@/public/images/sm/3dicons-discord-front-color.webp";
import { AlignJustify } from "lucide-react";

function ContactInfo() {
	const socialLinks = [
		{ name: "WhatsApp", icon: whatsappIcon, url: "https://whatsapp.com/channel/0029Va9aaK78F2pKhVgphi0q" },
		{ name: "X", icon: xIcon, url: "https://x.com/southraidersoff" },
		{ name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com/southraiders_official/" },
		{ name: "Discord", icon: discordIcon, url: "https://discord.com/invite/mz3kNKJ2dw" },
	];
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Chat with us</h4>
					<p>We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon2} alt="Call icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Give us a call</h4>
					<p>Give us a ring at +91 87783 77449. Every monday-friday from 9 am to 5 pm.</p>
				</div>
			</div>
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email Us</h4>
					<p>Drop us an email at contact.samhub@gmail.com and you'll receive a reply within 24 hours.</p>
				</div>
			</div>

			<div className="container-fluid px-0" style={{ marginTop: "40px" }}>
				<p
					className="mb-3"
					style={{
						fontWeight: "600",
						fontSize: "24px",
						color: "var(--heading-color)",
						fontFamily: "var(--font-DM-Sans), sans-serif"
					}}
				>
					Follow us on
				</p>
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
	);
}

export default ContactInfo;

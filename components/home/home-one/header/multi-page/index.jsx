import DesktopMenu from "@/components/common/navigation/desktop-nav";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
import { MailIcon, PhoneIcon } from "lucide-react";

function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="py-3 accent-bg text-light text-end ">
				<div className="container">
					<a href="mailto:contact.samhub@gmail.com" className="pe-3 text-light" style={{fontSize:"16px", borderRight:"1px solid white"}}><MailIcon size={18}/> contact.samhub@gmail.com</a>
					<a href="tel:+918778377449" className="text-light text-small ps-3" style={{fontSize:"16px"}}><PhoneIcon size={17}/> +91 87783 77449</a>
				</div>
			</div>
			<div className="container py-3">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" />
				</nav>
			</div>
		</header>
	);
}

export default Header;

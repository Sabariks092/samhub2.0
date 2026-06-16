import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
	<>
	
		<DesktopNav>
			<NavItem url="/" > Home
				{/* <Dropdown>
					<DropdownItem dropdown title="MultiPage">
						<Dropdown noShape>
							<DropdownItem url="multi-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="multi-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="multi-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="multi-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="multi-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="multi-page/home-six">CRM</DropdownItem>
							<DropdownItem url="multi-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="multi-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="multi-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="multi-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="OnePage">
						<Dropdown noShape>
							<DropdownItem url="one-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="one-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="one-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="one-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="one-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="one-page/home-six">CRM</DropdownItem>
							<DropdownItem url="one-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="one-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="one-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="one-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
				</Dropdown> */}
			</NavItem>
			<NavItem url="about-us">About Us</NavItem>
			<NavItem dropdown title="Our Services">
				<Dropdown>
					<DropdownItem url="service/software-development">Software Development</DropdownItem>
					<DropdownItem url="service/website-development">Website Development</DropdownItem>
					<DropdownItem url="service/digital-branding">Digital Branding</DropdownItem>
					<DropdownItem url="service/ui-ux-development">UI/UX Development</DropdownItem>
					<DropdownItem url="service/mobile-app-development">Mobile App Development</DropdownItem>
					<DropdownItem url="service/seo-optimization">SEO Optimization</DropdownItem>
					<DropdownItem url="service/meta-and-google-ads">Meta and Google Ads</DropdownItem>
					<DropdownItem url="service/social-media-marketing">Social Media Marketing</DropdownItem>
					<DropdownItem url="service/video-production-and-editing">Video Production & Editing</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem url="blog">Blogs</NavItem>

			<NavItem url="contact-us">Contact Us</NavItem>
		</DesktopNav>
	</>
	);
}

export default DesktopMenu;

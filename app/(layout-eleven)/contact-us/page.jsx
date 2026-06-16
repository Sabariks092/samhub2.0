import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import MyMap from "@/components/contact-us-page/MyMap";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function ContactUs() {
	return (
		< div className="mt-5">
			<BreadCrumb title="Contact Us" />
			<Contact />
			<MyMap />
		</div>
	);
}

export default ContactUs;

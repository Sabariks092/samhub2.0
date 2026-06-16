import Footer from "@/components/home/home-five/footer";
import Header from "@/components/home/home-five/header/one-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function OnePageLayoutFive({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutFive;

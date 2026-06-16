import Footer from "@/components/home/home-nine/footer";
import Header from "@/components/home/home-nine/header/multi-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function LayoutNine({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutNine;

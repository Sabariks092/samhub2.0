import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function LayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;

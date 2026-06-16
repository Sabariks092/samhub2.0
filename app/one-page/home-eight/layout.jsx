import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/one-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function OnePageLayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutEight;

import Footer from "@/components/home/home-nine/footer";
import Header from "@/components/home/home-nine/header/one-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function OnePageLayoutNine({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutNine;

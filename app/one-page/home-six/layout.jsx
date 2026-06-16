import Header from "@/components/home/home-six/header/one-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function OnePageLayoutSix({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default OnePageLayoutSix;

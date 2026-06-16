import Header from "@/components/home/home-four/header/one-page";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function OnePageLayoutFour({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default OnePageLayoutFour;

import Header from "@/components/common/header";
export const metadata = {
	title: "Samhub Innovations | Best Branding Agency In Puducherry",
	description: "Samhub Innovations | Best Branding Agency In Puducherry",
};
function LayoutTwelve({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default LayoutTwelve;

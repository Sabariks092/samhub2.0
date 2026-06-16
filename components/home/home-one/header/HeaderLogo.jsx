import Logo from "@/public/images/logo/Sam-Hub.png";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/">
				<Image src={Logo} alt="Logo" className="light-version-logo" width={80} height={80}/>
			</Link>
		</div>
	);
}

export default HeaderLogo;

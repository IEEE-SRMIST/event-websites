import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/concepto.png";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
	const router = useRouter();
	const [openNav, setOpenNav] = useState(false);
	return (
		<header className="flex justify-between items-center px-4 pt-10 max-w-7xl m-auto">
			<Image
				src={Logo}
				alt="logo"
				width="280"
				height="50"
				className="object-content"
			/>
			<div
				className={
					openNav
						? "transition-all duration-500 ease-in-out absolute left-0 top-32 z-20 flex flex-col mx-auto text-center py-4 bg-bgConcepto w-full gap-5 text-gray-400"
						: "hidden md:flex  gap-4 md:gap-8 md:items-center md:mt-4 text-gray-400"
				}
			>
				<Link href="/">
					<a className={router.pathname == "/" ? "text-white" : ""}>Home</a>
				</Link>
				<Link href="/Aboutus">
					<a className={router.pathname == "/Aboutus" ? "text-white" : ""}>
						About
					</a>
				</Link>
				<Link href="">Speakers</Link>
				<Link href="">Events</Link>
				<Link href="">Stickers</Link>
				<Link href="">FAQs</Link>
				<Link href="">About IEEE SRM</Link>
			</div>
			<div className="flex md:hidden mt-4 text-4xl text-white">
				<button onClick={() => setOpenNav(!openNav)}>
					<FiMenu />
				</button>
			</div>
		</header>
	);
};

export default Header;

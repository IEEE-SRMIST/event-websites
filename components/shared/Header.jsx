import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const NavLinks = ({ router }) => {
	return (
		<>
			<Link href="/">
				<a className="navlink">Home</a>
			</Link>

			<Link href="/#about">
				<a className="navlink">About</a>
			</Link>
			<Link href="/#speakers">
				<a className="navlink">Speakers</a>
			</Link>
			<Link href="/events">
				<a className="navlink">Events</a>
			</Link>
			<Link href="/#faq">
				<a className="navlink">FAQs</a>
			</Link>
			<Link href="/#about-ieee">
				<a className="navlink">About IEEE SRM</a>
			</Link>
		</>
	);
};

const Header = () => {
	const router = useRouter();
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<header className="2md:px-8 px-4 py-8">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<img src="/concepto.png" alt="logo" className="h-10 -mt-3" />
				<nav className={"hidden 2md:flex gap-8 items-center"}>
					<NavLinks router={router} />
				</nav>
				<button
					className="block 2md:hidden text-3xl transform-gpu hover:scale-110 active:scale-90 transition-transform text-white"
					onClick={() => setShowDrawer(true)}
				>
					<FiMenu className="mx-4" />
				</button>
			</div>
			<CSSTransition
				in={showDrawer}
				timeout={200}
				classNames="drawer"
				unmountOnExit
			>
				<nav className="fixed z-50 2md:hidden top-0 right-0 bottom-0 left-0 bg-background-secondary">
					<div className="h-full relative flex flex-col items-center justify-center gap-6">
						<button
							onClick={() => setShowDrawer(false)}
							className="absolute top-20 transform-gpu transition-transform hover:scale-125 active:scale-90"
						>
							<IoCloseSharp size="42" className="" />
						</button>
						<NavLinks router={router} />
					</div>
				</nav>
			</CSSTransition>
		</header>
	);
};

export default Header;

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSTransition } from "react-transition-group";

import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Headroom from "react-headroom";

const NavLinks = ({ router, setShowDrawer }) => {
	return (
		<>
			<Link href="/">
				<a
					onClick={(e) => setShowDrawer(false)}
					className={`navlink text-text-secondary hover:text-text-primary ${
						router.pathname === "/" ? "text-text-primary" : ""
					}`}
				>
					Home
				</a>
			</Link>
			<Link href="/#about">
				<a
					onClick={(e) => setShowDrawer(false)}
					className="navlink text-text-secondary hover:text-text-primary"
				>
					About
				</a>
			</Link>
			<Link href="/#speakers">
				<a
					onClick={(e) => setShowDrawer(false)}
					className="navlink text-text-secondary hover:text-text-primary"
				>
					Speakers
				</a>
			</Link>
			<Link href="/events">
				<a
					onClick={(e) => setShowDrawer(false)}
					className={`navlink hover:text-text-primary text-text-secondary ${
						router.pathname === "/events" ? "text-text-primary" : ""
					}`}
				>
					Events
				</a>
			</Link>
			<Link href="/#faq">
				<a
					onClick={(e) => setShowDrawer(false)}
					className="navlink text-text-secondary hover:text-text-primary"
				>
					FAQs
				</a>
			</Link>

			<a
				onClick={(e) => setShowDrawer(false)}
				className="navlink text-text-secondary hover:text-text-primary"
				href="https://ieeesrmist.in"
				target="_blank"
			>
				About IEEE SRM
			</a>
		</>
	);
};

const Header = () => {
	const router = useRouter();
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<>
			<Headroom>
				<header className="2md:px-8 px-4 py-8 bg-background-primary bg-opacity-60 backdrop-blur-lg">
					<div className="max-w-7xl mx-auto flex justify-between items-center">
						<Link href="/">
							<a>
								<img
									src="/concepto.png"
									alt="logo"
									className="max-h-10 -mt-3"
								/>
							</a>
						</Link>
						<nav className={"hidden 2md:flex gap-8 items-center"}>
							<NavLinks setShowDrawer={setShowDrawer} router={router} />
						</nav>
						<button
							className="block 2md:hidden text-3xl transform-gpu hover:scale-110 active:scale-90 transition-transform text-white"
							onClick={() => setShowDrawer(true)}
						>
							<FiMenu className="mx-4" />
						</button>
					</div>
				</header>
			</Headroom>
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
						<NavLinks setShowDrawer={setShowDrawer} router={router} />
					</div>
				</nav>
			</CSSTransition>
		</>
	);
};

export default Header;

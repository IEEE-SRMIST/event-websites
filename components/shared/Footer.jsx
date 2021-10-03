import React from "react";
import Link from "next/link";
import {
	FaLinkedin,
	FaGithub,
	FaTwitter,
	FaInstagram,
	FaFacebook,
	FaMedium,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-background-secondary px-4 md:px-8 pt-10 pb-4">
			<section className="max-w-7xl mx-auto mb-12">
				<div className="flex items-start justify-center md:justify-between mb-12">
					<Link href="/">
						<a>
							<img
								className="h-10 hidden md:block"
								src="/concepto.png"
								alt="Concepto Logo"
							/>
						</a>
					</Link>
					<article>
						<div className="flex gap-3 justify-center md:justify-end mb-2">
							<a
								href="https://www.linkedin.com/company/ieeesrmist/"
								target="_blank"
							>
								<FaLinkedin
									size={28}
									className="text-text-secondary hover:text-text-primary transition-colors"
								/>
							</a>
							<a
								href="https://github.com/IEEE-SRM-Student-Branch"
								target="_blank"
							>
								<FaGithub
									size={28}
									className="text-text-secondary hover:text-text-primary transition-colors"
								/>
							</a>
							<a href="https://twitter.com/ieeesrmist" target="_blank">
								<FaTwitter
									size={28}
									className="text-text-secondary hover:text-text-primary transition-colors"
								/>
							</a>
							<a href="https://www.instagram.com/ieeesrmist/" target="_blank">
								<FaInstagram
									size={28}
									className="text-text-secondary hover:text-text-primary transition-colors"
								/>
							</a>
							<a href="https://www.facebook.com/ieeesrmist" target="_blank">
								<FaFacebook
									size={28}
									className="text-text-secondary hover:text-text-primary transition-colors"
								/>
							</a>
							<a href="https://medium.com/ieeesrmist" target="_blank">
								<FaMedium
									size={28}
									className="text-text-secondary hover:text-text-primary transition-colors"
								/>
							</a>
						</div>
						<div className="text-sm whitespace-nowrap text-text-secondary">
							For more details - Follow us on social media
						</div>
					</article>
				</div>
				<div className="flex items-start justify-center md:justify-between">
					<p className="ml-12 mr-8 max-w-2xl hidden md:block text-text-secondary">
						IEEE SRM is a prolific student chapter that aims to inspire
						professionalism and empower students, help them learn and implement
						new skills and technologies, gain exemplary knowledge through
						various engaging workshops and webinars, experience in fields of
						interest.
					</p>
					<div className="flex flex-col items-center md:items-end gap-2">
						<a
							href="https://www.ieeesrmist.in/disclaimer"
							className="whitespace-nowrap text-text-secondary"
							target="_blank"
						>
							Disclaimer
						</a>
						<a
							href="https://www.ieeesrmist.in/codeofconduct"
							className="whitespace-nowrap text-text-secondary"
							target="_blank"
						>
							Code of Conduct
						</a>
						<a
							href="https://www.ieeesrmist.in/privacypolicy"
							className="whitespace-nowrap text-text-secondary"
							target="_blank"
						>
							Privacy Policy
						</a>
					</div>
				</div>
			</section>
			<div className="text-center">© 2021 Made with ❤️️ by IEEE SRM SB</div>
		</footer>
	);
};

export default Footer;

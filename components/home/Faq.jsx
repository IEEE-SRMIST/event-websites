import Image from "next/image";
import glyph from "../../assets/Glyph.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";

function Faq() {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);
	const [open5, setOpen5] = useState(false);
	const [open6, setOpen6] = useState(false);
	const [open7, setOpen7] = useState(false);

	return (
		<div className="max-w-7xl mx-auto flex flex-col my-16 text-text-primary">
			<div className="text-3xl md:text-4xl text-text-primary font-medium text-center md:text-justify">
				Have a question?
			</div>
			<div className="flex z-10 flex-col gap-4 md:w-2/3 mx-auto my-20 p-10 bg-background-secondary bg-opacity-60">
				<div>
					<div
						className="text-md md:text-xl flex justify-between  md:ml-10 cursor-pointer text-text-secondary hover:text-text-primary"
						onClick={() => setOpen1(!open1)}
					>
						<div>When is the last day for registration?</div>
						{open1 ? (
							<div className="cursor-pointer">
								<FiChevronDown />
							</div>
						) : (
							<div className="cursor-pointer">
								<FiChevronUp />
							</div>
						)}
					</div>
					{open1 && (
						<div className="my-10 text-text-secondary px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
							commodo odio. Vestibulum tristique pharetra accumsan. Curabitur
							vestibulum sem vitae molestie consectetur. Donec tincidunt metus
							sed erat suscipit laoreet. Praesent massa risus, gravida vel
							turpis a, posuere facilisis sapien. Sed vel tincidunt neque.
						</div>
					)}
					<hr className="w-full my-4 border-gray-400" />
				</div>
				<div>
					<div
						className="text-md md:text-xl flex justify-between md:ml-10 cursor-pointer text-text-secondary hover:text-text-primary"
						onClick={() => setOpen2(!open2)}
					>
						<div>When and where is CONCEPTO?</div>
						{open2 ? (
							<div className="cursor-pointer">
								<FiChevronDown />
							</div>
						) : (
							<div className="cursor-pointer">
								<FiChevronUp />
							</div>
						)}
					</div>
					{open2 && (
						<div className="my-10 text-text-secondary px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
							commodo odio. Vestibulum tristique pharetra accumsan. Curabitur
							vestibulum sem vitae molestie consectetur. Donec tincidunt metus
							sed erat suscipit laoreet. Praesent massa risus, gravida vel
							turpis a, posuere facilisis sapien. Sed vel tincidunt neque.
						</div>
					)}
					<hr className="w-full my-4 border-gray-400" />
				</div>
				<div>
					<div
						className="text-md md:text-xl flex justify-between md:ml-10 cursor-pointer text-text-secondary hover:text-text-primary"
						onClick={() => setOpen3(!open3)}
					>
						<div>Why should I come to CONCEPTO?</div>
						{open3 ? (
							<div className="cursor-pointer">
								<FiChevronDown />
							</div>
						) : (
							<div className="cursor-pointer">
								<FiChevronUp />
							</div>
						)}
					</div>
					{open3 && (
						<div className="my-10 text-text-secondary px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
							commodo odio. Vestibulum tristique pharetra accumsan. Curabitur
							vestibulum sem vitae molestie consectetur. Donec tincidunt metus
							sed erat suscipit laoreet. Praesent massa risus, gravida vel
							turpis a, posuere facilisis sapien. Sed vel tincidunt neque.
						</div>
					)}
					<hr className="w-full my-4 border-gray-400" />
				</div>
				<div>
					<div
						className="text-md md:text-xl flex justify-between md:ml-10 cursor-pointer text-text-secondary hover:text-text-primary"
						onClick={() => setOpen4(!open4)}
					>
						<div>When is the last day for registration?</div>
						{open4 ? (
							<div className="cursor-pointer">
								<FiChevronDown />
							</div>
						) : (
							<div className="cursor-pointer">
								<FiChevronUp />
							</div>
						)}
					</div>
					{open4 && (
						<div className="my-10 text-text-secondary px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
							commodo odio. Vestibulum tristique pharetra accumsan. Curabitur
							vestibulum sem vitae molestie consectetur. Donec tincidunt metus
							sed erat suscipit laoreet. Praesent massa risus, gravida vel
							turpis a, posuere facilisis sapien. Sed vel tincidunt neque.
						</div>
					)}
					<hr className="w-full my-4 border-gray-400" />
				</div>
				<div>
					<div
						className="text-md md:text-xl flex justify-between md:ml-10 cursor-pointer text-text-secondary hover:text-text-primary"
						onClick={() => setOpen5(!open5)}
					>
						<div>When is the last day for registration?</div>
						{open5 ? (
							<div className="cursor-pointer">
								<FiChevronDown />
							</div>
						) : (
							<div className="cursor-pointer">
								<FiChevronUp />
							</div>
						)}
					</div>
					{open5 && (
						<div className="my-10 text-text-secondary px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
							commodo odio. Vestibulum tristique pharetra accumsan. Curabitur
							vestibulum sem vitae molestie consectetur. Donec tincidunt metus
							sed erat suscipit laoreet. Praesent massa risus, gravida vel
							turpis a, posuere facilisis sapien. Sed vel tincidunt neque.
						</div>
					)}
					<hr className="w-full my-4 border-gray-400" />
				</div>
				<div>
					<div
						className="text-md md:text-xl flex justify-between md:ml-10 cursor-pointer text-text-secondary hover:text-text-primary"
						onClick={() => setOpen6(!open6)}
					>
						<div>When is the last day for registration?</div>
						{open6 ? (
							<div className="cursor-pointer">
								<FiChevronDown />
							</div>
						) : (
							<div className="cursor-pointer">
								<FiChevronUp />
							</div>
						)}
					</div>
					{open6 && (
						<div className="my-10 text-text-secondary px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
							commodo odio. Vestibulum tristique pharetra accumsan. Curabitur
							vestibulum sem vitae molestie consectetur. Donec tincidunt metus
							sed erat suscipit laoreet. Praesent massa risus, gravida vel
							turpis a, posuere facilisis sapien. Sed vel tincidunt neque.
						</div>
					)}
					<hr className="w-full my-4 border-gray-400" />
				</div>
			</div>
			<div className="absolute mt-52 z-0 sm:h-96 sm:w-96 sm:mt-40  md:right-2 md:h-2/6 md:w-2/6">
				<Image src={glyph} alt="glyph" className="rotate-0" />
			</div>
			<div className="flex flex-col gap-4 items-center">
				<div className="text-3xl font-medium md:text-4xl">Join Telegram</div>
				<div className="text-sm md:text-lg">
					Join our Telegram channel for updates
				</div>
				<button className="border-2 text-lg py-3 px-6 border-telegramButton hover:bg-telegramButton cursor-pointer rounded-md transition-colors">
					<div className="flex items-center gap-2 md:gap-4">
						<FaTelegramPlane className="text-text-primary h-5 w-5" />
						<div className="text-lg md:text-xl">Hop In!</div>
					</div>
				</button>
			</div>
		</div>
	);
}

export default Faq;

import { useState } from "react";
import Image from "next/image";

import { FiChevronUp } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

import faqs from "../../data/faq";

import { Transition } from "react-transition-group";

const Faq = () => {
	const [activeQuestion, setActiveQuestion] = useState(faqs[0].question);

	return (
		<section id="faq" className="px-4 md:px-8 mb-24 pt-4">
			<div className="mx-auto max-w-7xl heading">Have a question?</div>
			<div className="rounded-md 2md:w-2/3 mx-auto my-20 p-10 bg-background-secondary bg-opacity-60">
				{faqs.map((faq) => (
					<AccordionItem
						key={faq.question}
						activeQuestion={activeQuestion}
						setActiveQuestion={setActiveQuestion}
						question={faq.question}
						answer={faq.answer}
					/>
				))}
			</div>
			{/* Telegram Section */}
			<div className="flex flex-col gap-4 items-center">
				<div className="text-3xl font-medium md:text-4xl">Join Telegram</div>
				<div className="text-sm md:text-lg">
					Join our Telegram channel for updates
				</div>
				<a href="https://t.me/IEEESRMSB" target="_blank">
					<button className="border-2 text-lg py-3 px-6 border-telegram hover:bg-telegram cursor-pointer rounded-md transition-colors">
						<div className="flex items-center gap-2 md:gap-4">
							<FaTelegramPlane className="text-text-primary h-5 w-5" />
							<div className="text-lg md:text-xl">Hop In!</div>
						</div>
					</button>
				</a>
			</div>
		</section>
	);
};

export default Faq;

const AccordionItem = ({
	question,
	answer,
	activeQuestion,
	setActiveQuestion,
}) => {
	const [height, setHeight] = useState(0);
	return (
		<article className="border-b last:border-b-0 border-text-secondary py-6 first:pt-0 last:pb-0">
			<div
				className="md:text-xl flex justify-between items-center cursor-pointer text-text-secondary hover:text-text-primary transition-colors"
				onClick={() =>
					setActiveQuestion(activeQuestion === question ? null : question)
				}
			>
				<div className="flex-1 min-w-0">{question}</div>
				<FiChevronUp
					size={20}
					className={`cursor-pointer ml-3 transition-transform duration-500 ${
						activeQuestion === question ? "rotate-0" : "-rotate-180"
					}`}
				/>
			</div>
			<div
				style={{ height }}
				className="text-text-secondary px-2 overflow-hidden transition-all duration-500"
			>
				<Transition
					appear={true}
					in={activeQuestion === question}
					timeout={500}
					onEnter={(el) => setHeight(el.offsetHeight)}
					onExit={(el) => setHeight(0)}
				>
					<div className="pt-4">{answer}</div>
				</Transition>
			</div>
		</article>
	);
};

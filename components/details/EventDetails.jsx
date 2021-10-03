import React from "react";
import Link from "next/link";
import Image from "next/image";

import { VscArrowLeft } from "react-icons/vsc";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import moment from "moment";

const EventDetails = ({ event }) => {
	return (
		<main className="px-4 md:px-8 mx-auto mt-4 mb-24">
			<section className="max-w-7xl mx-auto xs:pl-8">
				<Link href="/events">
					<a className="inline-flex items-center text-text-secondary hover:text-text-primary transition-colors">
						<VscArrowLeft className="mr-2" size={24} />
						<span className="leading-none mt-0.5">All Events</span>
					</a>
				</Link>
			</section>
			<section className="mt-6 max-w-xl mx-auto flex flex-col items-center">
				<img src={event.poster} alt={`${event.speaker.name} Mugshot`} />
				<div
					className={`w-28 h-28 xs:w-32 xs:h-32 -mt-14 xs:-mt-16 overflow-hidden rounded-full border-2 xs:border-4 bg-speaker-${
						(event.position % 6) + 1
					} border-event-${(event.position % 6) + 1}`}
				>
					<Image
						src={event.speaker.image}
						alt={`${event.speaker.name} Mugshot`}
						width={400}
						height={400}
						placeholder="blur"
						layout="responsive"
						objectFit="cover"
					/>
				</div>
			</section>
			<section className="text-center mt-6">
				<div className="text-2xl font-medium">{event.title}</div>
				<div className="text-lg my-2">with</div>
				<div className="text-xl font-medium">{event.speaker.name}</div>
				<div className="text-text-secondary">{event.speaker.designation}</div>
				<div className="mt-2 text-lg">
					Starts on {moment(event.start).format("Do MMMM, YYYY")} at{" "}
					{moment(event.start).format("hh:mm A")}
				</div>
			</section>
			<p className="max-w-5xl px-4 md:px-6 relative mx-auto mt-12 text-text-secondary text-center">
				<ImQuotesLeft className="text-lg sm:text-xl md:text-2xl text-text-primary absolute top-0 left-0" />
				{event.description}
				<ImQuotesRight className="text-lg sm:text-xl md:text-2xl text-text-primary absolute bottom-0 right-0" />
			</p>
			<a href={event.url} target="_blank">
				<button
					className={`block border-2 text-lg py-3 px-8 cursor-pointer z-10 rounded-md transition-colors mx-auto mt-16 border-event-${
						(event.position % 6) + 1
					} hover:bg-event-${(event.position % 6) + 1}`}
				>
					Watch YouTube Stream
				</button>
			</a>
		</main>
	);
};

export default EventDetails;

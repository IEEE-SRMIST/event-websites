import React from "react";
import Image from "next/image";
import Link from "next/link";

import { VscArrowRight } from "react-icons/vsc";
import moment from "moment";

const EventsHero = ({ events, speakers }) => {
	return (
		<section className="px-4 md:px-8 mx-auto mb-16 ">
			<div className="mx-auto max-w-6xl grid grid-cols-1 auto-rows-auto 2md:auto-rows-fr 2md:grid-cols-2 gap-x-16 lg:gap-x-40 gap-y-12 md:gap-y-20 p-4 xs:p-8 md:p-12">
				{events.map((event, index) => {
					const speaker = speakers.find((speaker) => speaker.eid === event.id);
					return (
						<article key={event.id}>
							<Link href={`/events/${event.id}`}>
								<a
									className="max-w-md mx-auto h-full flex items-start cursor-pointer group"
									key={event.id}
								>
									<div
										className={`w-24 h-24 -mr-12 mt-4 rounded-full overflow-hidden z-10 bg-speaker-${
											(index % 6) + 1
										}`}
									>
										<Image
											src={speaker.image}
											alt={`${speaker.name} Mugshot`}
											width={400}
											height={400}
											placeholder="blur"
											layout="responsive"
											objectFit="cover"
										/>
									</div>
									<div
										className={`self-stretch flex-1 min-w-0 p-6 pt-10 flex flex-col rounded-md border-2 border-event-${
											(index % 6) + 1
										}`}
									>
										<header className="ml-10">
											<h2>{speaker.name}</h2>
											<h3 className="text-sm text-text-secondary">
												{speaker.designation}
											</h3>
										</header>
										<div className="ml-0 my-6 text-3xl xs:text-4xl font-medium">
											{event.title}
										</div>
										<footer className="text-text-secondary mt-auto flex items-center">
											<img
												className="h-4 xs:h-6 mr-2"
												src="/images/icons/calendar.svg"
											/>
											<div className="text-sm mt-0.5 xs:text-base leading-none">
												{moment(event.start).format("Do MMM, YYYY")}{" "}
												{moment(event.start).format("hh:mm A")}
											</div>
											<VscArrowRight
												className={`ml-auto group-hover:translate-x-2 transition-transform duration-300 text-event-${
													(index % 6) + 1
												}`}
												size={24}
											/>
										</footer>
									</div>
								</a>
							</Link>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default EventsHero;

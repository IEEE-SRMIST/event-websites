import Image from "next/image";
import Link from "next/link";

function Speakers({ speakers }) {
	return (
		<section id="speakers" className="px-4 md:px-8 pt-4 mb-20">
			<div className="mx-auto max-w-7xl heading">Our Speakers</div>
			<div className="mx-auto max-w-7xl mt-12 grid grid-cols-1 xs:grid-cols-2 2md:grid-cols-3 gap-y-12 xs:gap-y-20">
				{speakers.map((speaker, index) => (
					<a
						key={speaker.name}
						href={speaker.url}
						target="_blank"
						className="flex flex-row items-start xs:flex-col xs:items-center"
					>
						<div
							className={`rounded-full overflow-hidden w-4/12 xs:w-8/12 sm:w-7/12 bg-speaker-${
								(index % 6) + 1
							}`}
						>
							<div className="block grayscale hover:grayscale-0 transition duration-300">
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
						</div>
						<div className="ml-6 py-4 min-w-0 flex-1 xs:ml-0 xs:py-0 xs:px-4 xs:mt-8 xs:text-center">
							<h3 className="text-lg text-text-primary">{speaker.name}</h3>
							<h4 className="text-text-secondary">{speaker.designation}</h4>
						</div>
					</a>
				))}
			</div>
			<Link href="/events">
				<a>
					<button className="block liveBtn mx-auto mt-16">
						View All Events
					</button>
				</a>
			</Link>
		</section>
	);
}

export default Speakers;

// {speaker.id % 2 === 0 ? (
//   <Image
//     src={image1}
//     alt="1"
//     width="220"
//     height="220"
//     className="rounded-full"
//   />
// ) : (
//   <Image
//     src={image2}
//     alt="2"
//     width="220"
//     height="220"
//     className="rounded-full"
//   />
// )}

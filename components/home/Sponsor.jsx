import Image from "next/image";
import sponsors from "../../data/sponsors";

const Sponsor = () => {
	console.log(sponsors);
	return (
		<section className="px-4 py-12 md:px-8 bg-sponsor bg-fixed bg-cover mb-20">
			<div className="mx-auto max-w-7xl heading">Our Awesome Sponsors</div>
			<div className="mt-12 mx-auto max-w-5xl flex justify-center items-center gap-y-16 gap-x-16 md:gap-x-28 flex-wrap">
				{sponsors.map((sponsor, index) => (
					<img
						key={sponsor.name}
						src={sponsor.image}
						alt={`${sponsor.name} Logo`}
						className="h-20 sm:h-28 rounded-full bg-text-primary"
					/>
				))}
			</div>
		</section>
	);
};
export default Sponsor;

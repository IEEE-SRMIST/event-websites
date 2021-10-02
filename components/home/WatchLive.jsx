import Image from "next/image";
import glyph from "../../public/images/glyph.svg";

const WatchLive = () => {
	return (
		<section className="px-4 md:px-8 mx-auto mb-24">
			<div className="mx-auto max-w-7xl heading">Watch Live Stream</div>
			<div className="lg:grid grid-cols-7 gap-6 mt-12">
				<div className="col-span-4 text-text-secondary">
					<div className="p-6 mb-6 max-w-xl rounded-md bg-background-secondary ">
						Innovation, Ideation and Creation, they are the three pillars of
						advancement. The quest for knowledge is crucial to actualizing these
						three pillars. To do this, knowledge should be shared.
					</div>
					<div className="p-6 mb-6 max-w-xl ml-auto rounded-md bg-background-secondary">
						With the world, with anyone and everyone who might be on the same
						path as yourself. To make this ideology a reality, IEEE SRM SB
						introduce to you our flagship event CONCEPTO.
					</div>
					<div className="p-6 max-w-xl rounded-md bg-background-secondary">
						Learn from twelve brilliant speakers belonging to a diverse range of
						fields and industries such as Google and Morgan Stanley, to name
						just a few. Amass the knowledge that these Titans of experience and
						wisdom have to offer in their field, expand your horizons with a
						diverse panel of individuals. Embrace Erudition.
					</div>
				</div>
				{/* <div className="col-span-3 grid relative place-items-center">
					<div className="absolute w-full top-0 translate-y-1/4 translate-x-1/4 bottom-0 left-0">
						<div className="w-full h-auto rotate-45">
							<Image
								src={glyph}
								alt="glyph"
								className="rotate-180"
								layout="responsive"
							/>
						</div>
					</div>
					<button className="liveBtn">Watch YouTube Stream</button>
				</div> */}
				<div className="col-span-3 flex items-center my-20 lg:mt-0 justify-center">
					<div className="absolute sm:h-96 sm:w-96 sm:mt-40 lg:mt-0 md:right-2 lg:h-2/6 lg:w-2/6">
						<Image src={glyph} alt="glyph" className="rotate-180" />
					</div>
					<button className="liveBtn">Watch YouTube Stream</button>
				</div>
			</div>
		</section>
	);
};

export default WatchLive;

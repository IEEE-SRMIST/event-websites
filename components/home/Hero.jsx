const Hero = () => {
	return (
		<section className="py-24">
			<div className="bg-hero px-4 xs:px-8 md:px-0 md bg-contain bg-center bg-no-repeat">
				<video className="md:w-6/12 mx-auto z-0" controls autoPlay={true}>
					<source src="/trailer.mp4" type="video/mp4" />
				</video>
			</div>
			<button className="liveBtn block mt-16 mx-auto">Watch Live Stream</button>
		</section>
	);
};
export default Hero;

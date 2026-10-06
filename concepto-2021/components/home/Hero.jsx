import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="bg-hero px-4 xs:px-8 md:px-0 md bg-contain bg-center bg-no-repeat">
        <video className="md:w-6/12 mx-auto z-0" controls autoPlay={true}>
          <source src="/golden-key.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <button className="liveBtn block mt-16 mx-auto">Watch Live Stream</button> */}
      <a href="https://hviuds8w586.typeform.com/to/VdtSC3Lt" target="_blank">
        <button className="liveBtn block mt-16 mx-auto">Register Now!</button>
      </a>
    </section>
  );
};
export default Hero;

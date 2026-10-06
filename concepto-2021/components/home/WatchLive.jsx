import Link from "next/link";

const WatchLive = () => {
  return (
    <section className="px-4 md:px-8 mx-auto pt-4 pb-24">
      {/* <div className="mx-auto max-w-7xl heading">Watch Live Stream</div> */}
      <div className="mx-auto max-w-7xl heading">Excited? Register Now!</div>
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
            This time you are not just at the receiving cease. Our cause is to
            provide you with understanding and mastering. Ideathon, a platform
            to share your ideas and get them mentioned. As actual knowledge is
            acquired while you share it with others.
          </div>
        </div>

        <div className="col-span-3 flex items-center my-20 lg:mt-0 justify-center">
          <div
            className="absolute z-0 sm:h-96 sm:w-96 sm:mt-40 lg:mt-0 md:right-2 lg:h-2/6 lg:w-2/6"
            style={{ zIndex: -1 }}
          >
            <img
              src="/images/glyph.svg"
              alt="glyph"
              style={{ zIndex: -1 }}
              className="rotate-180"
            />
          </div>
          <a
            href="https://hviuds8w586.typeform.com/to/VdtSC3Lt"
            target="_blank"
          >
            <button className="liveBtn block mt-16 mx-auto">
              Register Now!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WatchLive;

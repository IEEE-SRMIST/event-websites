import Image from "next/image";
import glyph from "../../assets/Glyph.svg";

function WatchLive() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col my-16 text-text-primary">
      <div className="text-3xl md:text-4xl text-text-primary font-medium text-center md:text-justify">
        Watch Live Stream
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-16">
        <div className="flex flex-col gap-5  text-text-secondary md:w-1/2 mx-3 text-center md:text-left text-sm md:text-lg p-2 md:p-0">
          <div className="p-4 bg-cardbg rounded-md bg-background-secondary ">
            Innovation, Ideation and Creation, they are the three pillars of
            advancement. The quest for knowledge is crucial to actualizing these
            three pillars. To do this, knowledge should be shared.
          </div>
          <div className="p-4 bg-cardbg rounded-md md:relative md:left-28 bg-background-secondary">
            With the world, with anyone and everyone who might be on the same
            path as yourself. To make this ideology a reality, IEEE SRM SB
            introduce to you our flagship event CONCEPTO.
          </div>
          <div className="p-4 bg-cardbg rounded-md bg-background-secondary">
            Learn from twelve brilliant speakers belonging to a diverse range of
            fields and industries such as Google and Morgan Stanley, to name
            just a few. Amass the knowledge that these Titans of experience and
            wisdom have to offer in their field, expand your horizons with a
            diverse panel of individuals. Embrace Erudition.
          </div>
        </div>
        <div className="flex items-center my-20 md:mt-0 justify-center">
          <div className="absolute sm:h-96 sm:w-96 sm:mt-40 md:mt-0 md:right-2   md:h-2/6 md:w-2/6">
            <Image src={glyph} alt="glyph" className="rotate-180" />
          </div>
          <button className="border-2 py-3 px-6 border-red-600 hover:bg-red-600 cursor-pointer z-10 rounded-md">
            Watch YouTube Stream
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchLive;

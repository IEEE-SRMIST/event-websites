function WatchLive() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col my-16 text-white">
      <div className="text-4xl text-white text-center md:text-justify">Watch Live Stream</div>
      <div className="flex flex-col md:flex-row justify-between mt-16">
        <div className="flex flex-col gap-5 text-gray-300 text-base md:w-1/2 mx-3">
          <div className="p-4 bg-cardbg rounded-md">
            Innovation, Ideation and Creation, they are the three pillars of
            advancement. The quest for knowledge is crucial to actualizing these
            three pillars. To do this, knowledge should be shared.
          </div>
          <div className="p-4 bg-cardbg rounded-md md:relative md:left-28">
            With the world, with anyone and everyone who might be on the same
            path as yourself. To make this ideology a reality, IEEE SRM SB
            introduce to you our flagship event CONCEPTO.
          </div>
          <div className="p-4 bg-cardbg rounded-md">
            Learn from twelve brilliant speakers belonging to a diverse range of
            fields and industries such as Google and Morgan Stanley, to name
            just a few. Amass the knowledge that these Titans of experience and
            wisdom have to offer in their field, expand your horizons with a
            diverse panel of individuals. Embrace Erudition.
          </div>
        </div>
        <div className="flex items-center mt-5 md:mt-0 justify-center">
          <button className="border-2 py-3 px-6  border-red-600 rounded-md">
            Watch YouTube Stream
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchLive;

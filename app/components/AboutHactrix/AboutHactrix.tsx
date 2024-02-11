export default function Home() {
  return (

<>
  {/* Icon Blocks */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl mx-auto">
      {/* Grid */}
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            About Hactrix
          </h2>
          <p className="mt-3 text-gray-800 dark:text-gray-400">
          Hacktrix aims to foster innovation, skill development, and community building through collaborative problem-solving. Participants work in diverse teams to create innovative solutions to real-world challenges, enhancing technical and non-technical skills while networking with industry professionals. Join us to unleash your creativity and make an impact!"
          </p>
        </div>
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Day 1:Explore and Create
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Our fully furnished spaces are designed and purpose-built with
                Co-Living in mind, featuring high-end finishes and amenities
                that go far beyond traditional apartment buildings.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Day 2: Present and Excel
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Our passion is bringing people together. Beyond creating
                beautiful spaces, we provide shared experiences.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Event Highlights
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We worry about the details so that our residents don't have to.
                From our online application process to simple, all-inclusive
                billing we aim to make the living experience as effortless as
                possible.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Icon Blocks */}
</>
  );
}
import React from 'react'

const EventTimeline = () => {
    return (

        <div className="max-w-[85rem] lg:mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white text-black">
            <div className="max-w-2xl mx-auto text-center mb-2 lg:mb-2 text-black font-body">
                <h2 className="font-body font-bold text-2xl hover:text-orange md:text-3xl">
                    Event Timeline
                </h2>
                <h3 className="mt-1 mb-4 md:mt-4 text-sm text-normal font-body font-medium text-gray-500">
                    A Chronological Journey Through Unforgettable Moments
                </h3>
            </div>

            {/* Day 1 - 4th March */}
            <div>
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-black font-body">
                    <h2 className="text-lg font-semibold md:text-xl md:leading-tight">
                        Day 1 - 4th March
                    </h2>
                </div>

                {/*  Registration and Check-in */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">09:00 AM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-darkGray">
                            Registration and Check-in
                        </h3>
                        <p className="mt-1 text-sm text-lightGray">
                            Event kickoff and welcome address.
                            Brief overview of the agenda and expectations.
                        </p>
                    </div>
                </div>

                {/* Opening Ceremony and Welcome Address */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">09:30 AM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-darkGray">
                            Opening Ceremony and Welcome Address
                        </h3>
                        <p className="mt-1 text-sm text-lightGray">
                            Keynote speakers discuss relevant topics.
                            Q&A session if time permits.
                        </p>
                    </div>
                </div>

                {/* Theme Introduction and Hackathon Kickoff */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">10:00 AM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Theme Introduction and Hackathon Kickoff
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Information on tools, platforms, and resources for the hackathon.
                            Tips and tricks for effective development.
                        </p>
                    </div>
                </div>

                {/* Networking, Team Building, Tech Setup etc. */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">11:30 AM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Networking, Team Building, Tech Setup etc.
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Teams set up their development environments.
                            Coordinate and communicate through Discord or other channels.
                        </p>
                    </div>
                </div>

                {/* Hackathon Coding Session */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">12:30 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Hackathon Coding Session
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Official start of the 24-hour hackathon.
                            Teams can start working on their projects.
                        </p>
                    </div>
                </div>

                {/* Hackathon Continues */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">24 Hr</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Hackathon Continues
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            The ongoing hackathon continues into the second day.
                        </p>
                    </div>
                </div>
            </div>

            {/* Day 2 - 5th March */}
            <div>
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-black font-body">
                    <h2 className="text-lg font-semibold md:text-xl md:leading-tight">
                        Day 2 - 5th March
                    </h2>
                </div>

                {/* Hackathon Ends */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">09:00 AM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Hackathon Coding Session
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Final hours of the hackathon.
                            Teams can start wraping up their projects.
                        </p>
                    </div>
                </div>

                {/*Lunch Break*/}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">12:00 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Lunch Break
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Exciting news awaits! The results of the hackathon will be announced right after the lunch break.
                        </p>
                    </div>
                </div>

                {/* Project Submission and demo preperation */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">01:00 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Project Submission and demo preperation
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Teams prepare their presentations.
                            Ensure all necessary files and demos are ready.
                        </p>
                    </div>
                </div>

                {/* Project Presentation and Judging */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">02:30 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Project Presentation and Judging
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Each team has 10 minutes to present their project.
                            Judges may ask questions during or after the presentation.
                        </p>
                    </div>
                </div>

                {/* Closing Ceremony and Awards Announcement */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">04:00 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Closing Ceremony and Awards Announcement
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Stay tuned for the crowning moment as we announce the winners and conclude this thrilling hackathon journey!
                        </p>
                    </div>
                </div>

                {/* Closing and Thank You */}
                <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xxs lg:text-xs text-orange">04:30 PM</span>
                    </div>
                    <div className="relative last:after:hidden ">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Event Ends
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            Hackathon ends. Network with peers, share experiences, and bid farewell.
                            See you in future tech adventures!
                        </p>
                    </div>
                </div>

                {/* Closing and Thank You */}
                {/* <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xs text-orange">04:00 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Event Ends
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            The results will be announced on 26th January 2024, and certificates will be provided.
                        </p>
                    </div>
                </div> */}

                {/* Closing and Thank You */}
                {/* <div className="flex gap-x-3 font-body">
                    <div className="w-16 text-end">
                        <span className="text-xs text-orange">04:30 PM</span>
                    </div>
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                        <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                            <div className="rotating-bullet-square"></div>
                        </div>
                    </div>
                    <div className="grow pt-0.5 pb-8">
                        <h3 className="flex gap-x-1.5 font-semibold text-dartGrey">
                            Event Ends
                        </h3>
                        <p className="mt-1 text-sm text-lightGrey">
                            The results will be announced on 26th January 2024, and certificates will be provided.
                        </p>
                    </div>
                </div> */}

            </div>

        </div>

    )
}

export default EventTimeline
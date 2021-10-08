// id should match the eid property under ./speakers.js
// it is used to map event to its speaker
// use sensible id names like for event title "Tech-View", use eid = "techview"

export default [
	{
		title: "Tech - View",
		id: "techview",
		description:
			"Open the door to burgeoning opportunities as you explore the unique landscape of technology and learn to navigate its exciting terrain with our brilliant speaker Mr. Tanay Pratap, a Senior Software Engineer at Microsoft. Satiate your curiosity and ask questions that will better help you understand how to create a profile unlike any other and leave a mark for yourself by joining us at 8 PM on 8th October for Tech View!",
		start: 1633703400000,
		poster: "/images/events/techview.jpg",
		url: "https://www.youtube.com/watch?v=OU6hyagqIFw",
	},
	{
		title: "Up or Consilium",
		id: "consilium",
		description:
			"Brave the tides of academic excellence as you chart your course to higher education at Up or Consilium! Join us as we gauge the depths of what it means to pursue higher education and how it will come to shape your career, under the expert guidance of Mr. Rakshit Naidu, a Research Engineer at OpenMind. Ask questions and gain a deeper understanding of how one can make the best of their education and harness the true potential of a finer education by joining us at 6:30 PM on 10th October.",
		start: 1633870800000,
		poster: "/images/events/consilium.jpg",

		url: null,
	},
	{
		title: "Rise and Shine",
		id: "riseandshine",
		description:
			"Awaken new dawn on your career and give it the jumpstart that it deserves with IEEE SRM SB’s very own session on Profile Building with Ms. Priya Vajpeyi – A member of the Tech Staff at Abode. Join us for an intriguing two-hour session “Rise and Shine” on 9th October and begin your journey to shape your career, helping you achieve your goals and turn your dreams into a reality!",
		start: 1633761000000,
		poster: "/images/events/riseandshine.jpg",

		url: null,
	},
	{
		title: "Placement Therapy",
		id: "placement-therapy",
		description:
			"In the season of placements and internships, one thing that haunts all of us is the need to crack a top company with a great package. Spearheaded by Mr. Arsh Goyal - Senior Software Engineer at Samsung - his talk on placements, internships, projects, fellowship and scholarships might be the apt session for you at this moment. Save the date and join us for this insightful event from the expert on the 10th of October at 12 PM, and crack those placements like a pro!",
		start: 1633847400000,
		poster: "/images/events/placementtherapy.jpg",

		url: null,
	},
	{
		title: "Block-the-Chains with us",
		id: "blockthechains",
		description:
			"This is a digital world where numbers define our every move. This raises concern over the kind of security we then have on protecting these numbers. We have the very talented specialist, Mr. Arjun Kalsy - VP at Growth, shedding light on the emerging and essential Blockchain Technology. Expand your horizon and gain inspiration from his talk on the 9th of October at 3PM and be a person with an idea of the exciting technology.",
		start: 1633771800000,
		poster: "/images/events/blockchain.jpg",

		url: null,
	},
	// {
	// 	title: "Revealing soon!",
	// 	id: "event6",
	// 	description: "Stay tuned. Follow our social handles for latest updates.",
	// 	start: "2021-10-08T06:30:00.000Z",
	// 	poster: "/images/events/event.jpg",
	// 	url: "https://google.com",
	// },
].sort((a, b) => {
	return a.start < b.start ? -1 : 1;
});

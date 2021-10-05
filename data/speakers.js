import tanay from "../public/images/speakers/tanay.png";
import rakshit from "../public/images/speakers/rakshit.png";
import priya from "../public/images/speakers/priya.png";
import arjun from "../public/images/speakers/arjun.png";
import arsh from "../public/images/speakers/arsh.png";
import tbd from "../public/images/speakers/tbd.png";

// eid should match the id property under ./events.js
// it is used to map speaker to their event
// use sensible id names like for event title "Tech-View", use eid = "techview"

export default [
	{
		image: rakshit,
		name: "Rakshit Naidu",
		designation: "Research Engineer at OpenMind",
		eid: "event1", // this should be same as event id that this speaker is for
		url: "https://www.linkedin.com/in/rakshit-naidu-8b3431166/",
	},
	{
		image: priya,
		name: "Priya Vajpeyi",
		designation: "Member of Tech staff at adobe",
		eid: "event2",
		url: "https://www.linkedin.com/in/priya-vajpeyi/",
	},
	{
		image: tanay,
		name: "Tanay Pratap",
		designation: "Senior software engineer at Microsoft",
		eid: "event3",
		url: "https://www.linkedin.com/in/tanaypratap/",
	},
	{
		image: arjun,
		name: "Arjun Kalsy",
		designation: "VP at Growth",
		eid: "event4",
		url: "https://www.linkedin.com/in/arjunkrishankalsy/",
	},
	{
		image: arsh,
		name: "Arsh Goyal",
		designation: "Senior software engineer at Samsung",
		eid: "event5",
		url: "https://www.linkedin.com/in/arshgoyal/",
	},
	{
		image: tbd,
		name: "Revealing Soon...",
		designation: "Stay Tuned!",
		eid: null,
		url: null,
	},
];

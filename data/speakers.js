import sudarshanan from "../public/images/speakers/sudarshanan.png";
import rakshit from "../public/images/speakers/rakshit.png";
import mohan from "../public/images/speakers/mohan.png";
import arjun from "../public/images/speakers/arjun.png";
import arsh from "../public/images/speakers/arsh.png";
import tbd from "../public/images/speakers/tbd.png";

// eid should match the id property under ./events.js
// it is used to map speaker to their event
// use sensible id names like for event title "Tech-View", use eid = "techview"

export default [
  // {
  //   image: tbd,
  //   name: "Revealing Soon...",
  //   designation: "Stay Tuned!",
  //   eid: "event6",
  //   url: null,
  // },
  {
    image: sudarshanan,
    name: "Sudharshanan Ganapathy",
    designation: "Founder, The Social Company",
    // eid: "edTech",
    url: "https://www.linkedin.com/in/sudharsananganapathy/",
  },
  {
    image: mohan,
    name: "Mohan Chandar",
    designation: "Owner, MochiSoft Solutions",
    //eid: "riseandshine",
    url: "https://www.linkedin.com/in/mohanchandar/",
  },
  {
    image: arjun,
    name: "Arjun Kalsy",
    designation: "Vice President - Growth at Polygon",
    //eid: "blockthechains",
    url: "https://www.linkedin.com/in/arjunkrishankalsy/",
  },
  {
    image: arsh,
    name: "Arsh Goyal",
    designation: "Senior Software Engineer at Samsung India",
    //eid: "placement-therapy",
    url: "https://www.linkedin.com/in/arshgoyal/",
  },
  {
    image: rakshit,
    name: "Rakshit Naidu",
    designation: "Pursuing Masters at Carnegie Mellon University",
    //eid: "consilium", // this should be same as event id that this speaker is for
    url: "https://www.linkedin.com/in/rakshit-naidu-8b3431166/",
  },
];

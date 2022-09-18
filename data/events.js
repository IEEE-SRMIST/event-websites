// id should match the eid property under ./speakers.js
// it is used to map event to its speaker
// use sensible id names like for event title "Tech-View", use eid = "techview"

export default [
  {
    title: "Ed-Tech",
    id: "edTech",
    description:
      "In this track, works in mission-driven enterprises in education, media, government, and more will have to be presented along with problem prompts from their work on the ground. ",
    start: 1633703400000,
    poster: "/images/events/techview.jpg",
    url: "https://www.youtube.com/watch?v=OU6hyagqIFw",
  },
  {
    title: "FinTech",
    id: "fintech",
    description:
      "In this track, problem prompts in the field of technology-enabled innovation in financial services has to be brought to light to show how this technological sea change is transforming the financial sector and the wider economy, affecting all aspects of our work - from payments to monetary policy to financial regulation.",
    start: 1633870800000,
    poster: "/images/events/consilium.jpg",

    url: null,
  },
  {
    title: "Open Innovation",
    id: "openinnovation",
    description:
      "This track is meant to spark ideation by participants to choose problems they want to solve using innovative technologies like Blockchain, Artificial Intelligence, Machine Learning, iot etc – participants are free to choose problems that do not fit any of these tracks as well.",
    start: 1633761000000,
    poster: "/images/events/riseandshine.jpg",

    url: null,
  },
  {
    title: "Crypto and web3",
    id: "crypto",
    description:
      "In this track, problem prompts to  to providing an inclusive crypto ecosystem and services, to increase the freedom of money for people around the world in the new era of the financial revolution has to ideated and presented.",
    start: 1633847400000,
    poster: "/images/events/placementtherapy.jpg",

    url: null,
  },
  {
    title: "Healthcare",
    id: "healthcare",
    description:
      "In this track, the problem prompts from the work on the ground of healthcare, food and nutrition, health and wellness have to be taken into consideration.",
    start: 1633771800000,
    poster: "/images/events/blockchain.jpg",

    url: null,
  },
  {
    title: "Environmental Impact",
    id: "environtment",
    description:
      "In this track, the problem prompts from the work on the ground of environment, health and wellness have to be taken into consideration.",
    start: 1633771800000,
    poster: "/images/events/blockchain.jpg",

    url: null,
  },
  // {
  //   title: "Revealing soon!",
  //   id: "event6",
  //   description: "Stay tuned. Follow our social handles for latest updates.",
  //   start: 1733771800000,
  //   poster: "/images/events/event.jpg",
  //   url: "https://google.com",
  // },
].sort((a, b) => {
  return a.start < b.start ? -1 : 1;
});

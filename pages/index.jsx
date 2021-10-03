import Layout from "../components/shared/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Speakers from "../components/home/Speakers";
import WatchLive from "../components/home/WatchLive";
import Sponsor from "../components/home/Sponsor";
import Faq from "../components/home/Faq";

import speakers from "../data/speakers";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Speakers speakers={speakers} />
			<WatchLive />
			<Sponsor />
			<Faq />
		</Layout>
	);
};

export default Home;

export async function getStaticProps() {
	return {
		props: {
			speakers,
		},
	};
}

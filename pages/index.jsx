import Layout from "../components/shared/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Speakers from "../components/home/Speakers";
import WatchLive from "../components/home/WatchLive";
import Sponsor from "../components/home/Sponsor";

const Home = () => {
	return (
		<div className=" bg-bgConcepto">
			<Layout>
        <Hero />
        <About />
				<Speakers />
				<WatchLive />
        <Sponsor />
			</Layout>
		</div>
	);
};

export default Home;

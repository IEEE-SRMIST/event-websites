import Layout from "../components/shared/Layout";
import Speakers from "../components/home/Speakers";
import WatchLive from "../components/home/WatchLive";

const Home = () => {
	return (
		<div className=" bg-bgConcepto">
			<Layout>
				<Speakers />
				<WatchLive />
			</Layout>
		</div>
	);
};

export default Home;

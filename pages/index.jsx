import Layout from "../components/shared/Layout";
import Speakers from "../components/shared/Speakers";
import WatchLive from "../components/shared/WatchLive";

const Home = () => {
  return (
    <div className=" bg-bgConcepto">
      <Layout>
        <Speakers />
        <WatchLive/>
      </Layout>
    </div>
  );
};

export default Home;

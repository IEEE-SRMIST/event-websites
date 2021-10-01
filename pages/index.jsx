import Layout from "../components/shared/Layout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Speakers from "../components/home/Speakers";
import WatchLive from "../components/home/WatchLive";
import Sponsor from "../components/home/Sponsor";
import Faq from "../components/home/Faq";

const Home = () => {
  return (
    <div className="">
      <Layout>
        <Hero />
        <About />
        <Speakers />
        <WatchLive />
        <Sponsor />
        <Faq/>
      </Layout>
    </div>
  );
};

export default Home;

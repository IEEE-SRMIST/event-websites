import Navbar from "./components/layout/navbar"
import Landing from "./components/landing/landing"
import Cards from "./components/cards/cards"
import Footer from "./components/layout/footer";
import Speaker from "./components/speaker/speaker";
import Team from "./components/teams/team";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Cards/>
      <Speaker/>
      <Team/>
      <Footer/>
    </div>  
  );
}

export default App;

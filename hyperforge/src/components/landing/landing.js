import React from "react";
import gif from "../../assets/gif/blockchain1.gif";

function App() {
  return (
    <div id="AboutUs" className="flex flex-col lg:flex-row bg-black h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-20">
        <img src={gif} alt="gif" className="max-w-full h-auto lg:h-full" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-white px-4 lg:px-12 xl:px-24">
        <div className="text-center lg:text-right">
          <p className="text-lexand mb-8 lg:mb-12 xl:mb-16 pt-16">
            <div className="text-center lg:text-center mt-4">
              <h1 className="text-Roboto text-3xl lg:text-6xl mb-4">HYPERFORGE</h1>
              <p className="text-lexand mb-8 lg:mb-12 xl:mb-16 pt-10 text-justify px-6 md:px-10 lg:px-0">
              Welcome to our Hyperforge! where students can explore the potential of this revolutionary technology, learn from experts, and network with like-minded individuals. 
              </p>
            </div>
          </p>
          <div>
            <p className="text-lexand mb-8 lg:mb-12 xl:mb-16 text-justify px-6 md:px-10 lg:px-0">
            Join us for an engaging exploration of blockchain and discover the future of transactions, data storage, and online interactions on 25/04/2023 in TechPark 501 from 9am to 3pm IST. Don't miss out on this exciting opportunity to unlock the limitless potential of blockchain!
            </p>
            <div className="flex justify-center lg:hidden">
              <button className="bg-[#FFFFFF] hover:bg-[#00CCB7] text-[#1E1E1E] border rounded flex items-center px-4 py-2 text-sm">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSesglhIb8WZXa_Cjl1HeMVuqWKXlC1Fhdl68UoNS1b7KIYmwQ/viewform?usp=sf_link'>
                Register Now
              </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
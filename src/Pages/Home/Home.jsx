import { React } from "react";
import {
  bgimage,
} from "../../Assets";

const Home = () => {

  return (
    <div >
      {/* Landing */}
      <section className="lg:mt-12 lg:mx-24 mt-12 max-w-screen-xl pb-12 px-4 items-center justify-center lg:flex md:px-8 ">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-6xl xl:text-8xl font-press">
            Linea Doge
          </h1>

          <p className="text-gray-300 text-2xl max-w-xl leading-relaxed  sm:mx-auto  lg:ml-0 ">
            Your fun, community-driven No. 1 memecoin on the revolutionary Linea Build!

          </p>


        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src={bgimage}
            className=" mx-auto sm:w-6/12  lg:w-2/3 md:w-4/12"
            alt="aishiba"
          />
        </div>
      </section>

      {/* Claim */}
      <section className=" m-4 p-4 " id="airdrop">
        <div className="max-w-screen-xl mx-auto text-slate-50  p-4 lg:w-6/12 rounded-2xl text-left bg-sky-500">
          <p className="text-white-500 text-2xl text-center max-w-xl leading-relaxed sm:mx-auto ">
            LineaDoge is more than just a memecoin; it's an exciting new chapter in decentralized digital currency. Born from the spirit of fun and community that memecoins are known for, LineaDoge takes it to the next level by harnessing the power of the Linea Mainnet, the latest evolution of ConsenSys zkEVM.

          </p>
        </div>
      </section>

      {/* About */}
      <section className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8 border" id="about">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="relative max-w-xl text-white mx-auto sm:text-center">
            <h2 className=" text-4xl font-bold sm:text-6xl ">
              What Makes LineaDoge Special?

            </h2>

            <p className="text-white-500 text-2xl text-center max-w-xl leading-relaxed sm:mx-auto pt-8">
              Built on Linea, LineaDoge leverages the exceptional scalability, security, and privacy that Linea Mainnet offers. This allows for seamless transactions while enjoying the thrilling and inclusive culture our LineaDoge community fosters.


            </p>
          </div>

          <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4 ">

          </div>
        </div>
      </section>

      {/*Get Started*/}
      <section
        className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8 border"
        id="start"
      >
        <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 ">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-4xl font-bold sm:text-6xl ">
              How to Get Started with LineaDoge

            </h2>
          </div>

          <p className="text-white-500 text-2xl text-center max-w-xl leading-relaxed sm:mx-auto pt-8">
            LineaDoge isn't just about being a part of the community; it's about making your mark in the crypto world. We're excited to have you on this journey with us. Stay tuned for information on how and where to buy, sell, and trade LineaDoge.

          </p>
        </div>
      </section>

      {/*Vision*/}
      <section
        className="lg:mt-12 lg:mx-24 mt-12 py-14 pb-12 px-4 md:px-8 border"
        id="vision"
      >
        <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 ">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h2 className="text-4xl font-bold sm:text-6xl ">
              Our Vision


            </h2>
          </div>

          <p className="text-white-500 text-2xl text-center max-w-xl leading-relaxed sm:mx-auto pt-8">
            At LineaDoge, we're not just creating a memecoin; we're building a movement. Our roadmap outlines our ambitious plans for LineaDoge's future development. We aim to innovate, excite, and unite under the banner of LineaDoge.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

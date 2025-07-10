import React from "react";
import tokenomicsImage from "../../assets/landing/tokenomics.png";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className=" text-white py-16 lg:px-10">
      <div className="xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Right Side: Tokenomics Details */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8 2xl:text-6xl text-white">Tokenomics</h2>

          {/* List */}
          <ul className="space-y-4 text-lg font-light 2xl:text-2xl">
            <li className="flex items-center gap-3">
              <div className="bg-[#FF2F00] w-10 h-3"></div><div className="text-white">Presale (40%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FFCDA0] w-10 h-3"></div><div className="text-white">Rewards (20%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FFCDA0] w-10 h-3"></div><div className="text-white">ICO Bonus + Bounty (10%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FFB777] w-10 h-3"></div><div className="text-white">Marketing (10%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FF9B5E] w-10 h-3"></div><div className="text-white">Ecosystem Operations (5%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FF8C51] w-10 h-3"></div><div className="text-white">Team (5%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FF7F46] w-10 h-3"></div><div className="text-white">
                Development And Tech Operations (3%)
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FF6C36] w-10 h-3"></div><div className="text-white">
                Legal Advisors And Surveyors (3%)
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FF5E31] w-10 h-3"></div><div className="text-white">Partnerships (2%)</div>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#FF4E1F] w-10 h-3"></div><div className="text-white">
                Liquidity And Exchange Listings (2%)
              </div>
            </li>
          </ul>
        </div>

        {/* Left Side: Image */}
        <div className="flex-1">
          <img
            src={tokenomicsImage}
            alt="Tokenomics Chart"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>

          <div className="flex items-center justify-center">
              {/* Bottom Section */}
      <div className="mt-16 mx-6 p-6 rounded-xl border max-w-4xl xl:max-w-6xl 2xl:max-w-6xl border-white/30 backdrop-blur-md bg-[#322e2e47] flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="text-center sm:border-r-2 border-b-2 border-white sm:pr-14 pb-5 sm:border-b-0">
          <p className="text-xl 2xl:text-2xl text-white mb-1">Contract Address</p>
          <p className="break-all text-white 2xl:text-xl font-medium">
            0x3785b789C64F2fC0aBc357f2fe2BdEB43D2049C7
          </p>
        </div>

        <div className="text-center sm:border-r-2 border-b-2 border-white sm:pr-14 pb-5 sm:border-b-0">
          <p className="text-xl 2xl:text-2xl text-white mb-1">Decimal</p>
          <p className="text-white font-medium 2xl:text-xl">18</p>
        </div>

        <div className="text-center sm:border-r-2 border-b-2 border-white sm:pr-14 pb-5 sm:border-b-0">
          <p className="text-xl 2xl:text-2xl text-white mb-1">Network</p>
          <p className="text-white font-medium 2xl:text-xl">Binance Smart Chain (BEP20)</p>
        </div>

        <div className="text-center">
          <p className="text-xl 2xl:text-2xl text-white mb-1">Token Symbol</p>
          <p className="text-white font-medium 2xl:text-xl">AI WALLET</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Tokenomics;

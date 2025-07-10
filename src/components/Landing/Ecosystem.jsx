import React, { useState } from "react";
import businessImage from "../../assets/landing/ecotoggleimg1.png";
import consumerImage from "../../assets/landing/ecotoggleimg2.png";
import logoImage from "../../assets/landing/ecosystem.png"; // right side image

const Ecosystem = () => {
  const [isBusiness, setIsBusiness] = useState(true);

  const handleToggle = () => {
    setIsBusiness(!isBusiness);
  };

  return (
    <section className="text-white py-16 lg:px-16" id="ecosystem">
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="flex-1 bg-[#121211] sm:p-8 rounded-2xl relative py-10 border-t border-white/50 border-l">
          <div className="flex items-center justify-center mb-16">
            <button
              onClick={handleToggle}
              className={`w-12 flex items-center bg-gray-700 rounded-full p-1 transition-colors duration-300 ${
                isBusiness ? "bg-orange-500" : "bg-gray-700"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isBusiness ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-center mb-6 mt-10 sm:w-1/2">
              <img
                src={isBusiness ? businessImage : consumerImage}
                alt="Toggle Content"
                className="w-full object-contain"
              />
            </div>

            <div className="text-start sm:w-1/2 px-5">
              <h2 className="text-2xl 2xl:text-4xl font-bold mb-4">
                {isBusiness ? (
                  <>
                    <span className="bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">
                      MY AI WALLET
                    </span>{" "}
                    for <span>Business:</span>
                  </>
                ) : (
                  <>
                    <span className="bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">
                      MY AI WALLET
                    </span>{" "}
                    for <span>Users:</span>
                  </>
                )}
              </h2>

              <p className="text-sm text-white 2xl:text-lg font-semibold mb-6 uppercase">
                {isBusiness
                  ? "Smart income tools for entrepreneurs and finance-based platforms."
                  : "Secure, rewarding, and fully decentralized income made for everyone."}
              </p>

              <ul className="text-sm 2xl:text-lg text-gray-300 space-y-5 text-left list-disc list-inside">
                {isBusiness ? (
                  <>
                    <li className="text-white">
                      Integrate referral-based income models and staking features into your own business platform.
                    </li>
                    <li className="text-white">
                      Reward users with $MYAI tokens for onboarding, engagement, or reaching milestones.
                    </li>
                    <li className="text-white">
                      Access analytics tools to monitor team activity and automate rank-based rewards.
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-white">
                      Earn daily rewards (up to 2%) by choosing the right investment tier.
                    </li>
                    <li className="text-white">
                      Build a referral team and unlock multiple income streams up to 5 levels deep.
                    </li>
                    <li className="text-white">
                      Manage your assets securely via a Web3 wallet with full control over your funds.
                    </li>
                  </>
                )}
              </ul>

              <button className="mt-6 px-6 py-2 bg-orange-500 rounded-lg 2xl:text-lg font-bold text-white hover:bg-orange-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col hidden items-center justify-center">
          <img src={logoImage} alt="Ecosystem Logo" className="mb-4" />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
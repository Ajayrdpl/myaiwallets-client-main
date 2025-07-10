import { BiCopy } from "react-icons/bi";
import crud_logo from "../assets/landing/frint-icon.png"; // Replace with My AI Wallet logo if available
import re_bg from "../assets/landing/re_bg.jpg";

export default function ReferToEarnSection() {
  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            Refer to <span className="text-orange-500">Earn</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Join our referral program and share the benefits of My AI Wallet with your community. For every successful referral, you'll receive a 10% bonus in $MYAI tokens, directly credited to your wallet and visible on your dashboard.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Referral Box */}
          <div
            style={{ backgroundImage: `url(${re_bg})`, backgroundSize: "cover" }}
            className="bg-gradient-to-br from-orange-600 via-black to-black rounded-3xl flex flex-col justify-between relative overflow-hidden md:min-h-[450px]"
          >
            <div className="bg-gradient-to-br from-orange-600 via-black to-black w-60 h-40 p-6 sm:p-8 md:block hidden">
              <button className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-6 rounded-full w-full sm:w-max mb-6 text-sm sm:text-base">
                Connect Wallet
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <button className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-6 rounded-full w-full sm:w-max mb-6 text-sm sm:text-base block md:hidden">
                Connect Wallet
              </button>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-white">
                Earn more $MYAI by referring your friends and community
              </h3>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Connect Wallet for Referral Link"
                  className="w-full p-2 px-6 rounded-2xl bg-white text-black placeholder-gray-600 text-sm sm:text-base"
                  disabled
                />
                <button className="bg-orange-600 flex items-center gap-2 hover:bg-orange-700 font-semibold py-3 px-6 rounded-xl w-full sm:w-max text-sm sm:text-base">
                  <BiCopy /> Copy Link
                </button>
              </div>

              <div className="md:flex justify-end w-full hidden">
                <img src={crud_logo} alt="MYAI Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40" />
              </div>
            </div>
          </div>

          {/* Right Leaderboard Box */}
          <div className="bg-black rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-base sm:text-lg text-white mb-2 text-center lg:text-left">
              Top 5 referrers will win bonus rewards in USDT at launch
            </h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center lg:text-left">
              Up to 15% Bonus
            </h2>

            <div className="bg-white text-black rounded-2xl p-4 sm:p-6 space-y-4 text-sm sm:text-base">
              {[
                "First Place: 15%",
                "Second Place: 12%",
                "Third Place: 10%",
                "Fourth Place: 8%",
                "Fifth Place: 5%",
              ].map((item, index) => (
                <div key={index} className={`border-b pb-2 ${index === 4 ? "border-none" : ""}`}>
                  <span className="font-semibold">
                    {item.split(":")[0]}: <span className="text-orange-600">{item.split(":")[1]}</span> bonus in USDT*
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Countdown CTA */}
      <div className="bg-black py-10 px-4 sm:px-6 flex flex-col items-center text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-3xl mb-8">
          To participate, connect your Web3 wallet, generate a referral link from your dashboard, and share it with your network. The more referrals you bring, the more you earn.
        </p>

        <div className="bg-[#141414] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-20 border-t border-white/50 border-l rounded-3xl w-full max-w-md">
          <div className="text-center sm:text-left text-xs sm:text-sm text-gray-400 font-semibold uppercase">
            <p>Offer Valid</p>
            <p>Until Launch</p>
          </div>

          <div className="flex items-center gap-6 sm:gap-10">
            <span className="text-lg sm:text-xl font-semibold">15 Days</span>
            <span className="text-orange-500 text-3xl sm:text-4xl font-bold">2:2:35</span>
          </div>
        </div>
      </div>
    </>
  );
}
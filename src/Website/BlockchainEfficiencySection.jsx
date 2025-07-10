import bg from "../assets/landing/three_box6.png";
import dd from "../assets/landing/dd_reports.png";

export default function BlockchainEfficiencySection() {
  return (
    <div className="bg-[#0D0D0D] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Side Cards */}
        <div className="flex flex-col gap-8 md:col-span-1">
          <div
            style={{
              backgroundImage: `url(${dd})`,
              backgroundSize: "cover",
            }}
            className="bg-black rounded-3xl p-6 flex flex-col justify-center items-start relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-orange-500 text-lg font-semibold">
                Real-Time <br /> Security Audits
              </h3>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-6 flex flex-col justify-between">
            <h3 className="text-lg text-white font-semibold mb-6 text-center">
              DeFi Marketplace for <br /> Investors & Traders
            </h3>
            <button className="border border-white/50 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Right Side Main Section */}
        <div className="md:col-span-2 relative rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <img
            src={bg}
            alt="Blockchain Efficiency"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 w-full flex flex-col md:flex-row p-8 gap-8">
            <div className="flex-1 flex items-center">
              <h2 className="text-5xl text-white font-bold leading-tight">
                Blockchain <br /> Powered <br /> Rewards
              </h2>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-[#b1b1b1] text-right">
                Powered by blockchain technology, My AI Wallet delivers secure, transparent, and automated reward distribution. With on-chain earnings, real-time tracking, and decentralized control, users experience unmatched financial autonomy and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
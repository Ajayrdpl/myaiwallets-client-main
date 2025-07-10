import { useState } from "react";
import black from "../assets/landing/black-coin.png";
import tier from "../assets/landing/tier1.png";
import { TiTick } from "react-icons/ti";
import Button from "../components/Landing/Button";


export default function CrudoInvestment() {
  const [investment, setInvestment] = useState(1000);

  const handleInvestmentChange = (e) => {
    setInvestment(Number(e.target.value));
  };

  return (
    <div className="p-3 md:p-0" id="about">

<div className="p-8 w-full md:max-w-6xl max-w-lg flex flex-col md:flex-row justify-center  gap-10 mx-auto border-t border-white/50 border-l rounded-3xl">
      <div className="rounded-2xl w-full md:w-1/2 space-y-16 shadow-lg">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Investment Amount</h2>
          <h3 className="text-xl text-white">Starting from <span className="font-bold">$100</span></h3>
          <p className=" text-sm text-white">
          Unlock daily rewards and earn $MYAI tokens by joining the My AI Wallet community! With a minimum investment of just $100, you gain access to automated daily returns and exclusive DeFi benefits available only during our presale.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm  flex justify-between">
            How much do you want to spend?
            <span className="ml-4 text-lg font-semibold">${investment}</span>
          </label>
          <div className="flex items-center justify-between">
            <input
              type="range"
              min="1000"
              max="10000"
              step="100"
              value={investment}
              onChange={handleInvestmentChange}
              className="w-full accent-orange-500"
            />

          </div>
        </div>
      </div>

      <div className="bg-[#161616] p-8 rounded-2xl w-full md:w-1/2 shadow-lg relative overflow-hidden">
        <img
          src={tier}
          alt="Boat"
          className="absolute top-0 right-0 w-24 md:w-36 -translate-y-6 translate-x-6"
        />

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-500 p-2 rounded-full">
              <span className="text-white font-bold"><img src={black} alt="" className="h-8"/></span>
            </div>
            <h3 className="text-2xl font-semibold text-white">Beginner Investor</h3>
          </div>

          <ul className="text-gray-300 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-xs text-white"><TiTick />
            🪙 0.5% Daily Earnings

</li>
            <li className="flex items-center gap-2 text-xs text-white"><TiTick /> 🎁 Eligible for Referral Bonuses

</li>
            <li className="flex items-center gap-2 text-xs text-white"><TiTick /> 📈 Team Commission Up to 3 Levels</li>
          </ul>

          <div className="flex items-center justify-end text-center">
          <div className="bg-[#1f1f225e] p-4 rounded-lg shadow-[5px_5px_5px_#000] mt-4 space-y-2">
            <p className="text-white">Investment Amount</p>
            <p className="text-sm">
              <span className="font-bold text-white">$100 – $1000</span> <span className="text-orange-500 font-bold">+Bonus 5%</span>
            </p>
          </div>

          </div>
         
          <Button className="w-full mt-6 bg-bg_color1 hover:bg-orange-600 text-white font-semibold py-3 rounded-2xl transition" title={"BUY MYAI"} />


        </div>
      </div>
    </div>
    </div>
  
  );
}
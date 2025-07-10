import lp from "../assets/landing/lp.png";
import rs from "../assets/landing/rs.png";
import lo from "../assets/landing/lo.png";

export default function SeamlessEntrySection() {
  const features = [
    {
      icon: lp,
      title: "LOYALTY PROGRAM",
      description:
        "Reward users with $MYAI tokens for consistent platform usage, daily investments, and long-term engagement.",
    },
    {
      icon: rs,
      title: "REWARD SYSTEM",
      description:
        "Enable users to earn bonuses through referrals, staking, rank upgrades, and performance-based team income.",
    },
    {
      icon: lo,
      title: "FLEXIBLE OFFERINGS",
      description:
        "Users and businesses can access tiered investment plans, custom returns, and unlockable benefits with higher ranks.",
    },
  ];

  return (
    <div className="p-3 md:p-0">
      <div className="border-t border-white/50 border-l rounded-3xl text-white py-8 md:py-16 px-6 md:max-w-6xl max-w-lg mx-auto">
        <div className="text-center max-w-3xl mx-auto md:mb-14">
          <h2 className="text-xl md:text-6xl text-white font-bold leading-tight">
            Seamless Entry, <span className="text-bg_color1">Limitless</span> Potential
          </h2>
          <p className="text-gray-300 mt-6 text-sm md:text-lg">
            At My AI Wallet, we simplify access to DeFi-based income. From referral rewards to daily earnings, you can grow with just a Web3 wallet and your community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <img
                src={feature.icon}
                alt={feature.title}
                className="md:h-16 md:w-16 w-12 h-12 mb-4"
              />
              <h3 className="text-bg_color1 font-bold text-lg mb-4">{feature.title}</h3>
              <p className="text-base md:text-left text-center text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




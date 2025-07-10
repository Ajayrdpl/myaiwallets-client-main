import React from "react";
import InfoCard from "./InfoCard";
import img1 from "../../assets/landing/roadmap1.png";
import img2 from "../../assets/landing/roadmap2.png";
import img3 from "../../assets/landing/roadmap3.png";
import img4 from "../../assets/landing/roadmap4.png";
import img5 from "../../assets/landing/roadmap5.png";

const sections = {
  phase1: [
    {
      title: "Phase 1",
      subtitle: "Platform Launch & Core Features",
    },
    {
      title: "My AI Wallet Launch",
      features: [
        "Secure wallet built on BNB Chain.",
        "Support for USDT BEP-20 deposits and withdrawals.",
        "User-friendly dashboard with daily earnings tracking.",
      ],
    },
    {
      title: "Referral & Rewards System",
      features: [
        "Multi-level referral rewards (up to 5 levels).",
        "Direct commission and team income structure.",
        "Real-time reward distribution and tracking.",
      ],
    },
    {
      title: "Investment Plans Activation",
      features: [
        "Daily income from 0.5% to 2% based on tiers.",
        "Beginner to Diamond levels with increasing ROI.",
        "Team-based progression and bonuses.",
      ],
    },
  ],

  phase2: [
    {
      title: "Phase 2",
      subtitle: "Web3 Integration & Mobile Support",
    },
    {
      title: "Web3 Wallet Integration",
      features: [
        "MetaMask and Trust Wallet compatibility.",
        "Secure login and wallet-based authentication.",
        "On-chain transparency for all transactions.",
      ],
    },
    {
      title: "Mobile App Development",
      features: [
        "Android & iOS app with earnings tracker.",
        "Push notifications for transactions and bonuses.",
        "Referral sharing and leaderboard in-app.",
      ],
    },
  ],

  phase3: [
    {
      title: "Phase 3",
      subtitle: "Ecosystem Growth & Community Expansion",
    },
    {
      title: "Staking & Passive Income",
      features: [
        "Staking $MYAI for additional yield.",
        "Locked and flexible staking options.",
        "Bonus rewards for top stakers.",
      ],
    },
    {
      title: "Community Rank System",
      features: [
        "Unlock ranks based on referrals and active members.",
        "Increase rewards with every new milestone.",
        "Transparent progression toward Director and Diamond levels.",
      ],
    },
  ],

  phase4: [
    {
      title: "Phase 4",
      subtitle: "Advanced Tools & Utility Expansion",
    },
    {
      title: "AI Trading Bot Integration",
      features: [
        "Automated profit-generating strategies.",
        "Personalized trading based on risk profile.",
        "Available to qualifying investors.",
      ],
    },
    {
      title: "Own Exchange Launch",
      features: [
        "Launch centralized exchange platform.",
        "Low trading fees for $MYAI holders.",
        "Cross-token pairing and liquidity pools.",
      ],
    },
    {
      title: "Blockchain & Compliance",
      features: [
        "Move toward launching own blockchain layer.",
        "Full KYC, AML, and compliance integration.",
        "Open audits and transparency for global reach.",
      ],
    },
  ],
};

const RoadMap = () => {
  return (
    <div id="roadmap" className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:hidden bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">
        AI WALLET <span className="text-white">Roadmap</span>
        </h1>
        <h1 className="max-w-4xl 2xl:max-w-6xl sm:text-5xl  xl:max-w-6xl xl:text-7xl text-3xl font-semibold text-center py-10 bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent 2xl:text-7xl">
          TOKEN LISTING ON CEX AT THE END OF STAGE 5
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-2xl xl:max-w-4xl 2xl:max-w-4xl mx-auto py-10">
        <div className="w-1/2 flex items-center">
          <div className="w-1/2 hidden sm:block">
            <img src={img5} className="w-full" alt="" />
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-col items-end -mt-20 relative mb-20">
              <div className="h-[150px] w-[120px] border-2 -mr-[118px] border-[#fd5d31] border-b-0 border-r-0 rounded-tl-[35px] after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#fd5d31] after:absolute after:-right-32 after:-top-1"></div>
              <div className="h-[350px] w-[100px] -mt-1 border-2 border-[#fd5d31] border-t-0 border-l-0 rounded-br-[35px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#fd5d31] before:absolute before:left-0 before:-bottom-[4px]"></div>
              <div className="flex flex-col items-end absolute -bottom-10 left-0">
                <div className="h-[40px] w-[70px] border-2 -mr-[68px] border-[#fd5d31] border-b-0 border-r-0 rounded-tl-[35px] after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#fd5d31] after:absolute after:-right-[70px] after:-top-1"></div>
                <div className="h-[160px] w-[140px] -mt-1 border-2 border-[#fd5d31] border-t-0 border-l-0 rounded-br-[35px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#fd5d31] before:absolute before:left-0 before:top-[190px]"></div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="h-[115px] relative w-[120px] border-2 -mr-[20px] border-[#fd5d31] border-b-0 border-l-0 rounded-tr-[35px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#fd5d31] before:absolute before:left-0 before:-top-[6px]">
                <div className="h-[40px] w-[100px] absolute -bottom-[30px] -right-[100px] -mt-1 border-2 border-[#fd5d31] border-t-0 border-r-0 rounded-bl-[35px]  after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#fd5d31] after:absolute after:-right-1 after:top-[34px]"></div>
              </div>
              <div className="flex flex-col items-end relative -top-[70px] -left-[130px]">
                <div className="h-[350px] w-[90px] relative border-2 -mr-[118px] border-[#fd5d31] border-b-0 border-l-0 rounded-tr-[35px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#fd5d31] before:absolute before:left-0 before:-top-[6px]">
                  <div className="h-[200px] w-[130px] -mt-1 absolute -bottom-[200px] -right-[130px] border-2 border-[#fd5d31] border-t-0 border-r-0 rounded-bl-[35px]  after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#fd5d31] after:absolute after:-right-0 after:top-[195px]"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 sm:w-1/2 pr-10 pl-2">
          <InfoCard imageSrc={img1} sections={sections.phase1} />
          <InfoCard imageSrc={img2} sections={sections.phase2} />
          <InfoCard imageSrc={img3} sections={sections.phase3} />
          <InfoCard imageSrc={img4} sections={sections.phase4} />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;

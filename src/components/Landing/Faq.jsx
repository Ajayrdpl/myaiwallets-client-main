import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqData = [
  {
    question: "What is My AI Wallet and how does it work?",
    answer: "My AI Wallet is a tokenized rewards platform built on BNB Chain. It enables users to earn daily passive income, participate in referral programs, and access decentralized finance tools using a Web3 wallet."
  },
  {
    question: "How do I earn daily passive income?",
    answer: "You can earn daily returns ranging from 0.5% to 2% by choosing one of the available investment plans based on your deposit amount."
  },
  {
    question: "What is the minimum investment required?",
    answer: "The minimum investment starts at $100. You can select plans based on your budget and earning goals."
  },
  {
    question: "How do team and referral rewards work?",
    answer: "You earn rewards by referring others. The system provides multi-level income with percentages based on your rank and the activity of your team."
  },
  {
    question: "What is a Web3 Wallet and why is it required?",
    answer: "A Web3 Wallet like MetaMask is required to securely hold your funds and interact with the platform. It ensures full control over your assets without third-party custody."
  },
  {
    isTitle: true,
    title: "PRESALE & INVESTMENT QUESTIONS"
  },
  {
    question: "How can I buy $MYAI tokens?",
    answer: "You can buy $MYAI by connecting a Web3 wallet like MetaMask and topping it up with BNB for transaction fees. Then choose your investment plan and confirm the purchase."
  },
  {
    question: "Are there any bonuses for early investors?",
    answer: "Yes, early investors may receive additional bonuses depending on the presale stage and investment tier."
  },
  {
    question: "How are the tokens distributed?",
    answer: "Tokens are distributed to your wallet address after your purchase is confirmed. Distribution for presale may occur after the Token Generation Event (TGE)."
  },
  {
    question: "Is there a vesting period on purchased tokens?",
    answer: "Yes, some tokens may be subject to vesting to ensure long-term ecosystem sustainability."
  },
  {
    question: "What network is My AI Wallet based on?",
    answer: "My AI Wallet operates on the BNB Chain (BEP-20), enabling fast, secure, and low-cost transactions."
  },
  {
    question: "Is there a withdrawal limit or condition?",
    answer: "Yes, the minimum withdrawal amount is $20, and withdrawals are subject to a 10% admin fee."
  },
  {
    question: "Can I receive my earnings in a CEX wallet?",
    answer: "It's recommended to use a non-custodial Web3 wallet for compatibility and security during transactions."
  },
  {
    question: "What happens if I lose my Web3 wallet recovery phrase?",
    answer: "You may lose access to your funds. It is essential to back up and securely store your recovery phrase as My AI Wallet cannot retrieve it for you."
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:px-24">
      <div className="bg-[#171614] rounded-xl border border-gray-700 p-8 w-full max-w-4xl xl:max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4 text-sm ">
          {faqData.map((item, index) =>
            item.isTitle ? (
              <h3
                key={index}
                className="text-[#FF9F82] uppercase  font-bold mt-6"
              >
                {item.title}
              </h3>
            ) : (
              <div key={index} className="flex flex-col border p-2 border-white/20 rounded-lg">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer text-white"
                >
                  <span className=" md:text-base">{item.question}</span>
                  <span className="text-[#FF4D4D] text-xl">
                    {openIndex === index ? <IoChevronUp /> : <IoChevronDown />}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="text-gray-400  mt-2 px-2">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
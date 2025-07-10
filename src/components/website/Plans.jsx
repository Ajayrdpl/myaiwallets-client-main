
const Plans = () => {
  const plans = [
    {
      name: "Standard Account",
      investment: "100-499",
      profit: "Upto 15% /mo",
      support: "24X5 Support",
      features: [
        "Profit: Upto 15% /mo",
        "24X5 SupportLive Trading on MT5",
        "Live Trading on MT5",
        "Instant Deposit & Withdrawal",
        "Multiple Income types",
      ],
      buttonText: "OPEN ACCOUNT",
      color: "white",
      hover_color: "[#3b3663]",
      margin_top: "10",
    },
    {
      name: "Classic Account",
      investment: "500-1999",
      profit: "Upto 25% /mo",
      support: "24X5 Support",
      features: [
        "Profit: Upto 15% /mo",
        "24X5 SupportLive Trading on MT5",
        "Live Trading on MT5",
        "Instant Deposit & Withdrawal",
        "Multiple Income types",
      ],
      buttonText: "OPEN ACCOUNT",
      color: "bg-black/80 text-white",
      hover_color: "white",
      margin_top: "20",
    },
    {
      name: "Premium Account",
      investment: "2000+",
      profit: "Upto 50% /mo",
      support: "24X5 Support",
      features: [
        "Profit: Upto 15% /mo",
        "24X5 SupportLive Trading on MT5",
        "Live Trading on MT5",
        "Instant Deposit & Withdrawal",
        "Multiple Income types",
      ],
      buttonText: "OPEN ACCOUNT",
      color: "white",
      hover_color: "[#3b3663]",
      margin_top: "10",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-md lg:text-lg text-center mb-2 text-green-600 font-medium">PRICING PLANS</h2>
      <h2 className="text-xl lg:text-3xl font-bold text-center mb-8 text-bg-color">
        The Best Solutions for Our Clients
      </h2>

      <div className="flex justify-center items-center flex-wrap gap-8 px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            className={`rounded-3xl text-center p-6 w-full max-w-sm lg:h-[500px] ${plan.color}`}
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-5">{plan.name}</h3>
            <div className="flex justify-center items-center text-2xl gap-3 mb-3 lg:mb-5">
              <span className="text-3xl font-bold">$</span>
              <div>
                <p className="text-sm lg:text-lg font-semibold">INVESTMENT</p>
                <p className="text-2xl lg:text-2xl font-bold">{plan.investment}</p>
              </div>
            </div>

            <ul className="mb-6 space-y-2 lg:space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex justify-left items-center text-sm lg:text-lg">
                  ✔️ {feature}
                </li>
              ))}
            </ul>
            <div className={`flex justify-center gap-3 items-center lg:mt-${plan.margin_top}`}>
              <button
                className={`
    text-white 
    font-semibold 
    py-2 px-4 
    rounded-lg 
    bg-gradient-to-r from-orange-400 to-orange-600 
    hover:from-orange-500 hover:to-orange-700 
    shadow-lg shadow-orange-500/50 
    transform transition-transform duration-200 
    hover:scale-105 
    focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
    hover:text-${plan.hover_color}
  `}
              >
                {plan.buttonText}
              </button>

              {/* <FaArrowRight color="orange" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

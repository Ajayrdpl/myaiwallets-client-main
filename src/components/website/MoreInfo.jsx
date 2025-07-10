import TextComponent from './TextComponent';

const MoreInfo = () => {
  const choose = [
    {
      id: 1,
      image: "https://botbro.biz/wp-content/uploads/2022/04/icon1.png",
      title: "TRADING SOLUTION",
      description: "TRADING SOLUTIONS FOR ACTIVE DAY TRADERS AND NEW ENTRANTS.",
    },
    {
      id: 2,
      image: "https://botbro.biz/wp-content/uploads/2022/04/icon2.png",
      title: "COMPETITIVE PRICING",
      description: "COMPETITIVE AND LOW PRICING FOR ORDINARY TRADERS.",
    },
    {
      id: 3,
      image: "https://botbro.biz/wp-content/uploads/2022/04/icon3.png",
      title: "CONFIDENCE BUILDING",
      description: "OUR AIM IS TO HELP YOU GAIN CONFIDENCE IN ONLINE FOREX TRADING.",
    },
    {
      id: 4,
      image: "https://botbro.biz/wp-content/uploads/2022/04/icon4.png",
      title: "TRADE EXECUTION",
      description: "ALL TRADES ARE EXECUTED ON THE MT5 PLATFORM.",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-10 mt-8 lg:mt-64 md:mt-40 mb-9 lg:mb-40 md:mb-60 lg:max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-32 items-center">
        <TextComponent
          heading={"Features"}
          subheading={"Our My Ai Wallet is a one-stop shop for all your currency trading needs."}
          description={
            "You can instantly deploy profitable strategies onto charts with just the click of a button, without having to worry about anything else like technical analysis or knowledge in this field whatsoever! It does everything from setting up positions on various markets around worldwide economy via automatic algorithms so you don’t have to do any work other than making profits."
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {choose?.map((el) => (
            <div
              key={el.id}
              className="bg-white p-8 rounded-lg shadow-md transform transition duration-300 ease-in-out rounded-tr-[2rem] rounded-bl-[2rem]  hover:shadow-lg hover:rounded-tl-[2rem] hover:rounded-br-[2rem] hover:rounded-tr-none hover:rounded-bl-none "
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <img src={el.image} alt="" className="w-20 h-20 mx-auto mb-4" />
              <h1 className="text-md font-semibold text-center mb-2">{el.title}</h1>
              <p className="text-xs text-center">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

import TextComponent from "./TextComponent";

const WhyChoose = () => {
  const choose = [
    {
      id: 1,
      image: "https://img.icons8.com/3d-fluency/94/fund-accounting.png",
      title: "TRADING SOLUTION",
      description: "TRADING SOLUTIONS FOR ACTIVE DAY TRADERS AND NEW ENTRANTS.",
    },
    {
      id: 2,
      image: "https://img.icons8.com/3d-fluency/94/billing.png",
      title: "COMPETITIVE PRICING",
      description: "COMPETITIVE AND LOW PRICING FOR ORDINARY TRADERS.",
    },
    {
      id: 3,
      image: "https://img.icons8.com/3d-fluency/94/transaction.png",
      title: "CONFIDENCE BUILDING",
      description: "OUR AIM IS TO HELP YOU GAIN CONFIDENCE IN ONLINE FOREX TRADING.",
    },
    {
      id: 4,
      image: "https://img.icons8.com/3d-fluency/94/money-bag-bitcoin.png",
      title: "TRADE EXECUTION",
      description: "ALL TRADES ARE EXECUTED ON THE MT5 PLATFORM.",
    },
  ];

  return (
    <div className="mt-8 lg:mt-20 mb-8 lg:mb-20 relative lg:max-w-[85rem] m-auto">
      <div className="absolute inset-0 z-0">
        <img
          src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/map-new.png"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 sm:px-10 lg:px-40 ">
        <TextComponent
          heading={"Why Choose Us"}
          subheading={"Are You Ready to Hand Your Trading Over to a Forex Robot?"}
          description={
            "We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly website designs to make your business stand out. Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, which is why we work with you."
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

export default WhyChoose;

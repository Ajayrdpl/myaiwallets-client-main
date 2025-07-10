import CountUp from "react-countup";
import platform from "../../assets/website/icons/platform.gif";
import CounterImage from "../../assets/website/icons/CounterImage.jpg";

const CounterComponent = () => {
  const counters = [
    {
      title: "Countries",
      description: "My Ai Wallet is providing its world-class services in more than 140+ countries.",
      end: 140,
      start: 0,
      suffix: "+",
      size: "3xl",
    },
    {
      title: "Users",
      description: "My Ai Wallet has been trading for more than 5.5M+ happy clients.",
      end: 5,
      start: 0,
      suffix: ".5M+",
      size: "5xl",
    },
    {
      title: "Leaders",
      description: "Making us one of the leading Forex Prime Brokers.",
      end: 10000,
      start: 0,
      suffix: "+",
      size: "5xl",
    },
    {
      title: "MT5 Platform",
      description: "Our powerful trading platform.",
      end: 1,
      start: 0,
      suffix: "",
      size: "5xl",
      image: platform,
    },
  ];
  return (
    <div className="bg-white flex flex-col items-center justify-center p-8 lg:p-0 max-w-[80rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center space-y-8 md:space-y-0 md:space-x-16 gap-8">
        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          {counters.map((counter, index) => (
            <div key={index} className="bg-gray-50 rounded-lg py-3 lg:p-6 flex flex-col items-center"  style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
              {counter.image ? (
                <img src={counter.image} alt="" className="w-20 h-20" />
              ) : (
                <div>
                  <h2 className="text-xl lg:text-3xl font-bold text-green-800">
                    <CountUp end={counter.end} start={counter.start} duration={counter.duration || 2} />
                    {counter.suffix}
                  </h2>
                  <p className="text-bg-color mt-4 font-bold text-xl">{counter.title}</p>
                </div>
              )}

              <p className="text-md lg:text-lg text-bg-color mt-4 px-5 md:px-1">{counter.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="relative mt-8 md:mt-0">
          <div className="overflow-hidden rounded-3xl" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img
              src={CounterImage}
              alt="My Ai Wallet Robot"
              className="object-cover p-8 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;

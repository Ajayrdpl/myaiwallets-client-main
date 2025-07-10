const OpenAccountSection = () => {
  return (
    <div className="relative bg-white">
      {/* Background Wave Image */}
      <img
        src="https://botbro.biz/wp-content/uploads/2022/04/home09_vawe_bg2-1.png"
        alt="Background Wave"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 py-8 lg:p-10 max-w-7xl">
        {/* Left Text Section */}
        <div className="text-center lg:text-left lg:max-w-[50%] space-y-4 lg:mb-64">
          <h1 className="text-3xl sm:text-4xl md:text-3xl font-semibold bg-gradient-to-r from-[#0EB5BC] to-[#0879B0] text-transparent bg-clip-text">
            The most profitable
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-green-600">
            Trading Robot
          </h1>
          <p className="text-lg sm:text-xl md:text-lg text-gray-500">
            is here to trade for you...
          </p>
          <p className="text-lg sm:text-xl md:text-xl text-bg-color">
            Start Robot Trading with
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-6xl font-bold text-green-600">
            $125
          </h1>
          <button className="bg-gradient-to-br from-green-400 to-green-700 text-white py-2 sm:py-3 rounded-full px-6 sm:px-10 font-bold mt-4 hover:scale-105 transition text-lg sm:text-xl">
            Open Account
          </button>
        </div>

        {/* Right Robot Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="https://botbro.biz/wp-content/uploads/2022/04/Hero-Image.png"
            alt="BotBro Robot"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenAccountSection;

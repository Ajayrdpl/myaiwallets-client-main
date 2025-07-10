import graph from "../../assets/website/icons/graph.gif";
import best from "../../assets/website/icons/graph.gif";
import features from "../../assets/website/icons/features.gif";
import multitask from "../../assets/website/icons/multitask.gif";
import reliable from "../../assets/website/icons/reliable.gif";
import trust from "../../assets/website/icons/trust.gif";

const CardComponent = () => {
  const cardData = [
    {
      id: 1,
      icon: graph,
      title: "MT5",
      description: "Fast Trade Execution",
    },
    {
      id: 2,
      icon: features,
      title: "Features",
      description: "Advanced trading features.",
    },
    {
      id: 3,
      icon: reliable,
      title: "Reliable",
      description: "Safe and secure",
    },
    {
      id: 4,
      icon: trust,
      title: "Trust",
      description: "World’s most trusted trading platform.",
    },
    {
      id: 5,
      icon: best,
      title: "Best",
      description: "Worlds Best innovative Terminal for Forex Trading",
    },
    {
      id: 6,
      icon: multitask,
      title: "Multi Task",
      description: "Multiple trading instruments supported.",
    },
  ];

  return (
    <main className="px-8 py-5  md:py-10 lg:py-16 max-w-7xl mx-auto">
      <h1 className="text-lg font-medium text-center text-green-600 mb-2 lg:mb-4">Innovative Trading Platform</h1>
      <h2 className="text-xl lg:text-3xl font-bold text-center text-bg-color mb-3 lg:mb-12">How MT5 is the best?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl p-8 text-center py-5 duration-500 transition-all hover:bg-green-500 group"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="flex items-center gap-4">
              <img src={card.icon} alt="" className="mb-4 w-20 h-20 rounded-lg" />
              <h3 className="text-2xl font-semibold text-bg-color mb-2 group-hover:text-black">{card.title}</h3>
            </div>

            <p className="text-bg-color1 text-lg text-left group-hover:text-black px-4">{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CardComponent;

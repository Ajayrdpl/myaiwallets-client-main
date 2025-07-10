import img1 from "../assets/landing/cointelegraph.png";
import img2 from "../assets/landing/coincodex.png";
import img3 from "../assets/landing/coingape.png";
import img4 from "../assets/landing/yahoo_news_logo2.png";
import img5 from "../assets/landing/coinpedia.png";
import img6 from "../assets/landing/coinspeaker.png";
import img7 from "../assets/landing/crypto.news.png";
import img8 from "../assets/landing/cryptopolitan.png";
import img9 from "../assets/landing/analyticsinsight.png";
import img10 from "../assets/landing/bitcoinist.png";

export default function FeaturedOn() {
    const logos = [
      { src: img1, alt: "Cointelegraph" },
      { src: img2, alt: "CoinGape" },
      { src: img3, alt: "Yahoo News" },
      { src: img4, alt: "Analytics Insight" },
      { src: img5, alt: "CoinPedia" },
      { src: img6, alt: "Coinspeaker" },
      { src: img7, alt: "Crypto News" },
      { src: img8, alt: "Cryptopolitan" },
      { src: img9, alt: "Coincodex" },
      { src: img10, alt: "Bitcoinist" },
    ];
  
    return (
      <div className=" text-white py-12 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-7xl  text-white">
            Featured <span className="text-orange-500">On</span>
          </h2>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-6 md:h-8 object-contain"
            />
          ))}
        </div>
      </div>
    );
  }
  
import cardImg2 from "../../assets/website/cardImg2.jpg";
import TextComponent from "./TextComponent";

const About = () => {
  return (
    <div
      id="about"
      className="grid lg:grid-cols-2 grid-cols-1 px-8 lg:px-40 gap-8 lg:gap-32 xl:gap-56"
    >
      <div>
        {/* <div className="absolute left-2">
          <img src={cardImg2} alt="" className="background w-[90%] h-[500px]  hidden xl:block" />
        </div> */}
        <div className="relative mt-4">
          <img
            src={cardImg2}
            alt=""
            className="rounded-tl-xl rounded-br-xl rounded-tr-3xl h-[60vh] object-cover"
            style={{
              borderBottomLeftRadius: "30%",
              borderTopRightRadius: "30%",
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <TextComponent
          heading={"About Us"}
          subheading={"Let the My Ai Wallet help you make money!"}
          description={
            "With a fluctuating market, it's hard to predict when prices will go up or down. This is where our ally comes in – automatically setting Buy and Sell orders so that we can take advantage of any fluctuations happening on your exchange (or others). Simply connect them through API access if needed then wait for performance data; once available check out how successful these strategies were by demoing before investing real funds"
          }
        />
      </div>
    </div>
  );
};

export default About;

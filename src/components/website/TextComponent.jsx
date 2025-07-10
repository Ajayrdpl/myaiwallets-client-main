// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 

// gsap.registerPlugin(ScrollTrigger);

const TextComponent = ({ heading, subheading, description }) => {
  
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".heading",
  //     {
  //       y: 100, 
  //       opacity: 0, 
  //     },
  //     {
  //       y: 0, 
  //       opacity: 1, 
  //       duration: 1,
  //       ease: "power3.out", 
  //       scrollTrigger: {
  //         trigger: ".heading", 
  //         start: "top 80%", 
  //         end: "top 20%", 
  //         scrub: true, 
  //         markers: false, 
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="m-auto space-y-2 lg:space-y-8">
      <div className="heading">
      <h4 className="text-md lg:text-xl text-green-600 font-bold relative group">
      {heading}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-[calc(40%+10px)] group-hover:left-[calc(5%-5px)]"></span>
    </h4>        <h1 className="font-bold text-bg-color text-lg lg:text-xl mt-2 lg:mt-5">{subheading}</h1>
      </div>

      <p className="text-sm lg:text-lg text-bg-color1 text-justify">{description}</p>
    </div>
  );
};

export default TextComponent;

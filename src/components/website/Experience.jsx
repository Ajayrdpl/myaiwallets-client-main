import TextComponent from "./TextComponent";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  // useEffect(()=>{
   
  //     // Animate the first image (fade in)
  //     gsap.fromTo(
  //       ".background-img",
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         duration: 0.2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: ".background-img",
  //           start: "top 80%", // Start animation when top of element is at 80% viewport
  //           end: "top 60%",
  //           scrub: true,
  //         },
  //       }
  //     );
  
  //     // Animate the second image (slide in from left)
  //     gsap.fromTo(
  //       ".foreground-img-1",
  //       { x: -200, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: ".foreground-img-1",
  //           start: "top 75%",
  //           end: "top 50%",
  //           scrub: true,
  //         },
  //       }
  //     );
  
  //     // Animate the third image (slide in from bottom)
  //     gsap.fromTo(
  //       ".foreground-img-2",
  //       { x:0, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: ".foreground-img-2",
  //           start: "top 75%",
  //           end: "top 50%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   }, []);
  

  return (
    <div className="grid grid-cols1 xl:grid-cols-2 px-5 lg:px-40 gap-10 sm:gap-10 lg:gap-24">
      <div className="relative">
        <div>
          <img
            src="https://botbro.biz/wp-content/uploads/2021/01/home10-figure1-2.jpg"
            alt="Background"
            className="lg:w-full lg:h-auto w-96 h-96 background-img m-auto"
          />
        </div>
        <div className="absolute top-9 left-0 right-20 lg:top-10 lg:left-0 flex flex-col items-center">
          <img
            src="https://botbro.biz/wp-content/uploads/2022/04/mockup1-2.png"
            alt="Foreground 2"
            className="h-[300px] w-[150px]  lg:h-[500px] lg:w-[300px] foreground-img-1"
          />
          <img
            src="https://botbro.biz/wp-content/uploads/2022/04/mockup1-1.png"
            alt="Foreground 1"
            className="h-[300px] w-[150px] lg:h-[500px] lg:w-[300px] -mt-[250px] lg:-mt-[400px] ml-60 foreground-img-2"
            
          />
        </div>
      </div>

      <TextComponent
        heading={"Experience"}
        subheading={"First Trading Robot Which Have Best Features And Advantages Of Trading Robot Ever...."}
        description={
          "The main advantage of using a forex robot is that it can execute trades for you without any human intervention. This means no more waiting on the phone or in line at your broker’s office! You’ll have access to all sorts of different investing opportunities, including short selling stocks and bonds as well stock options – meaning there are basically zero risks involved with these types investments if they go south while being fully protected thanks again canceling out potential losses via stops orders etc… The best part? You don’t even need prior knowledge about how this stuff works"
        }
      />
    </div>
  );
};

export default Experience;

import TextComponent from "./TextComponent";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import phone_1 from "../../assets/website/icons/phone_1.png";
import phone_2 from "../../assets/website/icons/phone_2.png";

// gsap.registerPlugin(ScrollTrigger);

const WhyMts = () => {

  // useEffect(()=>{
   
  //     // Animate the first image (fade in)
  //     gsap.fromTo(
  //       ".background-img",
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         duration: 0.7,
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
  //         duration: 0.7,
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
  //       { y: 200, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 2.5,
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
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[75rem] m-auto p-4 lg:p-0 mb-1 lg:mb-32">
      <TextComponent
        heading={"Why MTS ?"}
        subheading={"First Trading Robot Which Have Best Features And Advantages Of Trading Robot Ever...."}
        description={
          "The main advantage of using a forex robot is that it can execute trades for you without any human intervention. This means no more waiting on the phone or in line at your broker’s office! You’ll have access to all sorts of different investing opportunities, including short selling stocks and bonds as well stock options – meaning there are basically zero risks involved with these types investments if they go south while being fully protected thanks again canceling out potential losses via stops orders etc… The best part? You don’t even need prior knowledge about how this stuff works"
        }
      />
        <div className=" flex flex-col items-center">
          <img
            src={phone_2}
            alt="Foreground 2"
            className="h-[300px] w-[200px] lg:h-[500px] lg:w-[300px] foreground-img-1"
          />
          <img
            src={phone_1}
            alt="Foreground 1"
            className="h-[320px] w-[200px] lg:h-[500px] lg:w-[300px] -mt-[310px] lg:-mt-[400px] ml-20 lg:ml-40 foreground-img-2"
            
          />
        </div>
      </div>
  );
};

export default WhyMts;

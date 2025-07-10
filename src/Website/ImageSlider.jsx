import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";

import img1 from "../assets/landing/slider1.png";
import img2 from "../assets/landing/slider2.png";
import img3 from "../assets/landing/slider3.png";
import img4 from "../assets/landing/slider4.png";
import img5 from "../assets/landing/slider5.png";

const images = [img1, img2, img3, img4, img5];

export default function ImageSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full md:max-w-6xl mx-auto px-10 md:px-20">
            <h1 className="text-center text-lg md:text-6xl font-semibold py-4 md:py-10  text-white">
            The <span className="text-bg_color1 text-center"> MY AI WALLET</span> is Here!
            </h1>
            <div className="relative overflow-hidden"> 
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides
                    loop
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {images?.map((img, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="flex justify-center items-center md:p-4"
                        >
                            <img
                                src={img}
                                alt={`Slide ${idx}`}
                                className={`rounded-xl transition-all duration-500 object-cover ${
                                    idx === activeIndex
                                        ? "scale-80 translate-y-[-20px] shadow-2xl z-20"
                                        : "scale-90 opacity-60"
                                }`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

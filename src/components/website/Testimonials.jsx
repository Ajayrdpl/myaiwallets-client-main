import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mohan Sharma",
    role: "Business Owner",
    feedback: "Best Service by My Ai Wallet. Fast withdraw.",
    image: "https://via.placeholder.com/100", // Replace with actual images
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    feedback: "Amazing support and quick service.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    role: "Freelancer",
    feedback: "A seamless experience. Highly recommend.",
    image: "https://via.placeholder.com/100",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="py-16 px-4 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-center text-xl font-bold text-bg-color mb-12">
        <span className="text-green-600">TESTIMONIALS</span>
        <br />
        What Our Client’s Say
      </h2>

      {/* Slider */}
      <div className="max-w-2xl mx-auto h-fit">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg">
              {/* Testimonial Image */}
              <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Jucpf9nxf6sd5gNoYa7tj47gbKrITOEFjQ&s"
  alt={testimonial.name}
  className="mx-auto rounded-full w-28 h-28 mb-6 shadow-lg bg-cover object-cover"
/>

              {/* Testimonial Feedback */}
              <p className="text-gray-600 text-lg italic mb-6">
                “{testimonial.feedback}”
              </p>
              {/* Testimonial Name & Role */}
              <h3 className="text-gray-800 font-bold text-2xl mb-2">
                {testimonial.name}
              </h3>
              <p className="text-green-500 font-medium">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;

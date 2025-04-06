import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSection.css";

const slides = [
  {
    id: 1,
    type: "text-image",
    image: "img6.png",
    title: "Eat Well, Live Well Discover Fresh Groceries!",
    text: "Fuel your body with nature’s best, bringing goodness to every meal. Fresh-picked flavors, pure and real, bright and tasty, full of cheer. Eat with joy and feel just right, fresh and simple, always near. Healthy choices every day, a life of wellness, pure delight!"
  },
  {
    id: 2,
    type: "image-only",
    image: "img7.png"
  },
  {
    id: 3,
    type: "image-only",
    image: "img8.png"
  },
  {
    id: 4,
    type: "image-only",
    image: "img9.png"
  },

  {
    id: 5,
    type: "image-only",
    image: "img10.png"
  },

  {
    id: 6,
    type: "image-only",
    image: "img11.png"
  },

  {
    id: 7,
    type: "image-only",
    image: "img12.png"
  }
  
];

const HeroSlideshow = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 4000 }}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="hero-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="hero-slide">
          {slide.type === "text-image" ? (
            <section className="hero">
              <div className="hero-content">
                <div className="hero-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                </div>
                <div className="right-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </section>
          ) : (
            <section className="image-slide">
              <div className="image-container">
                <img src={slide.image} alt={`Slide ${slide.id}`} />
              </div>
            </section>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlideshow;

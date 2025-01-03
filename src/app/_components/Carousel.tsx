"use client"
import React, { useEffect, useState } from "react";

import Services from "./Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className="carousel-container">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide={true}
        arrows={true}
        autoplay={true}
        autoplaySpeed={3000}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {/* First Slide: Developmental Themes */}
        <div>
          <Services />
        </div>

        {/* Additional Image Slides */}
        <div>
          <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide4.jpg" alt="Slide 4" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide5.jpg" alt="Slide 5" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide6.jpg" alt="Slide 6" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide7.jpg" alt="Slide 7" className="w-full h-auto" />
        </div>
        <div>
          <img src="/images/slide8.jpg" alt="Slide 8" className="w-full h-auto" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;

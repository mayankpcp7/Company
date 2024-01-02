import React from "react";
import slide1 from "../assets/images/png/slide1.png";
import slide2 from "../assets/images/png/slide2.png";
import slide3 from "../assets/images/png/slide3.png";
import slide4 from "../assets/images/png/slide4.png";
import slide5 from "../assets/images/png/slide5.png";
import slide6 from "../assets/images/png/slide6.png";
import slide7 from "../assets/images/png/slide7.png";
import slide8 from "../assets/images/png/slide8.png";
import slide9 from "../assets/images/png/slide9.png";
import slide10 from "../assets/images/png/slide10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 929,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <>
      <section className="py_184 bg_brand">
        <div className="my_container">
          <p
            className="text-center ff_dm mb-4 text-uppercase ls_18 fs_xxsm fw-bold clr_lightgreen"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            BRANDS
          </p>
          <h2
            className="text-center mw_897 ff_dm fs_xl clr_grey mw_897 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            We work with thousands of the world’s leading brands
          </h2>
          <Slider className="mt-4 zoom-in-up" {...settings}>
            <img
              height={100}
              width={143}
              className="slide1"
              src={slide1}
              alt="slide1"
            />
            <img
              height={55}
              width={143}
              className="slide2"
              src={slide2}
              alt="slide2"
            />
            <img
              width={143}
              height={55}
              className="slide3"
              src={slide3}
              alt="slide3"
            />
            <img
              width={143}
              height={55}
              className="slide4"
              src={slide4}
              alt="slide4"
            />
            <img
              width={143}
              height={55}
              className="slide5"
              src={slide5}
              alt="slide5"
            />
          </Slider>
          <Slider className="mt-4 zoom-in-down" {...settings}>
            <img
              height={100}
              width={143}
              className="slide1"
              src={slide6}
              alt="slide1"
            />
            <img
              height={55}
              width={143}
              className="slide2"
              src={slide7}
              alt="slide2"
            />
            <img
              width={143}
              height={55}
              className="slide3"
              src={slide8}
              alt="slide3"
            />
            <img
              width={143}
              height={55}
              className="slide4"
              src={slide9}
              alt="slide4"
            />
            <img
              width={143}
              height={55}
              className="slide5"
              src={slide10}
              alt="slide5"
            />
          </Slider>
          <p
            className="text-center mw_381 fs_sm clr_grey ff_dm mx-auto mt-5 mb-0"
            data-aos="zoom-out"
            data-aos-duration="1600"
          >
            You're going to be in good company. We work with world's leading
            brands.
          </p>
        </div>
      </section>
    </>
  );
};

export default Brands;

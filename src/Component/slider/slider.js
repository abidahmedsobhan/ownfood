import React from "react";
import { Box, Typography } from "@mui/material";
import "./slider.css";
import Slider from "react-slick";
import Bg from "../../assets/img/slider.jpg";
import Bg2 from "../../assets/img/slider2.jpg";
import Custom_Search from "../Search_Bar_OnSlider/custom_Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import zIndex from "@mui/material/styles/zIndex";

const MySlider = () => {
  const settings = {
    // dots: true,
    fade: true,
    // infinite: true,
    autoplay: true,
    speed: 5000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    // <Box>
    //   <div style={{ width: "100%", height: "100vh", position: "relative" }}>
    //     {/* <div classNameNameName="slider-text-layer">Hello</div> */}
    //     <div classNameNameName="slider-opacity-layer"></div>
    //     <div classNameNameName="slider-wrapper">
    //       <Slider {...settings}>
    //         <div classNameNameName="image-wrap"></div>
    //       </Slider>
    //     </div>
    //   </div>
    // </Box>

    // <div
    //   id="carouselExampleFade  "
    //   className="carousel slide carousel-fade"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img
    //         src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg"
    //         className="d-block w-100"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_03.jpg"
    //         className="d-block w-100"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg"
    //         className="d-block w-100"
    //         alt="..."
    //       />
    //     </div>
    //   </div>
    // </div>

    <div
      id="carouselExampleFade"
      className=" carousel-fade"
      data-bs-ride="carousel"
      style={{ zIndex: -1, position: "relative" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="slider-opacity-layer"></div>
          <img
            src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg"
            className="d-block w-100 h-auto"
            alt="..."
          />

          <div className=" row slider-overlay ">
            <h1
              className="text-center"
              style={{ color: "white", zIndex: 1, position: "absolute" }}
            >
              Hello Own
            </h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slider-opacity-layer"></div>
          <img
            src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_03.jpg"
            className="d-block w-100 "
            alt="..."
          />
          <div className=" row slider-overlay ">
            <h1
              className="text-center"
              style={{ color: "white", zIndex: 1, position: "absolute" }}
            >
              Hello Own
            </h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slider-opacity-layer"></div>
          <img
            src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className=" row slider-overlay ">
            <h1
              className="text-center"
              style={{ color: "white", zIndex: 1, position: "absolute" }}
            >
              Hello Own
            </h1>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MySlider;

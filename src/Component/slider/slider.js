import React from "react";
import { Box, Typography } from "@mui/material";
import "./slider.css";
import Slider from "react-slick";
import Bg from "../../assets/img/slider.jpg";
import Bg2 from "../../assets/img/slider2.jpg";
import Custom_Search from "../Search_Bar_OnSlider/custom_Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <Box>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        {/* <div classNameName="slider-text-layer">Hello</div> */}
        <div classNameName="slider-opacity-layer"></div>
        <div classNameName="slider-wrapper">
          <Slider {...settings}>
            <div classNameName="image-wrap"></div>
          </Slider>
        </div>
      </div>
    </Box>
  );
};

export default MySlider;

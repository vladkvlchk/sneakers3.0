import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="/sneakers3.0/media/forSlider/adidasBanner2.jpeg" alt="[banner 1]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/nikeBanner3.jpeg" alt="[banner 2]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/adidasBanner3.jpeg" alt="[banner 3]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/adidasBanner4.jpeg" alt="[banner 4]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/adidasBanner5.jpeg" alt="[banner 5]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/adidasBanner6.jpg" alt="[banner 6]"/>
          </div>
        </Slider>
      </div>
    );
  }
}
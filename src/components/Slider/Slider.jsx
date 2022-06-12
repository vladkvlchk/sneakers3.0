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
            <img src="/sneakers3.0/media/forSlider/nikeArt.jpg" alt="[nike art]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/5shotsBasketball.jpeg" alt="[5 shots basketball]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/maraphonFoots.jpeg" alt="[maraphon foots]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/nikeShelf.jpeg" alt="[nike shelf]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/nikeArt.jpg" alt="[nike art]"/>
          </div>
          <div>
            <img src="/sneakers3.0/media/forSlider/nikeArt.jpg" alt="[nike art]"/>
          </div>
        </Slider>
      </div>
    );
  }
}
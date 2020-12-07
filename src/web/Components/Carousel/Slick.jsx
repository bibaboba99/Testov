import React, { Component } from "react";
import Slider from "react-slick";
import logo1 from '../../../images/2.jpg';
import logo2 from '../../../images/3.jpg';
import logo3 from '../../../images/4.jpg';
import logo4 from '../../../images/5.jpg';
import logo5 from '../../../images/6.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img className="d-block w-100"
            src={logo1} alt="1" />
          </div>
          <div>
          <img className="d-block w-100"
            src={logo2} alt="2" />
          </div>
          <div>
          <img className="d-block w-100"
            src={logo3} alt="3" />
          </div>
          <div>
          <img className="d-block w-100"
            src={logo4} alt="4" />
          </div>
          <div>
          <img className="d-block w-100"
            src={logo5} alt="5" />
          </div>
          
        </Slider>
      </div>
    );
  }
}
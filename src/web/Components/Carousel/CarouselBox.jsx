import React from 'react';
import {Carousel} from 'react-bootstrap';
/*import carousel from './Carousel.module.css'*/
import logo1 from '../../../images/2.jpg';
import logo2 from '../../../images/3.jpg';
/*import logo3 from '../../../images/4.jpg';
import logo4 from '../../../images/5.jpg';
import logo5 from '../../../images/6.jpg';*/


export default function Slider() {

    
  return (    
      <Carousel> 
        <Carousel.Item>
          <img className="d-block w-100"
            src={logo1} alt="1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={logo2} alt="2" />
        </Carousel.Item>
        {/*<Carousel.Item>
          <img className="d-block w-100"
            src={logo3} alt="3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={logo4} alt="4" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100"
            src={logo5} alt="5" />
        </Carousel.Item>*/}
      </Carousel >    
  
  );
  
}







import React from 'react';
import Slider from '../Components/Carousel/CarouselBox';
/*import SimpleSlider from '../Components/Carousel/Slick';*/
/*import Slider from '../Components/Carousel/CarouselBox';*/
/*import logo from '../../images/1.jpg'*/
import train from './mTraining.module.css';



const Mtraining =(props)=> {
   
    return (
        <div className={train.train}>
            <div className = "text">
             Какой-то текст 2
             </div>

            <Slider />

             {/*<Slider />*/}
              {/*<SimpleSlider />*/}
            
            {/*<div className = 'imge'>
            <img src= {logo} alt="картинка"/>
            </div>*/}
             
        
        </div>
        );
            
    }   
    
    export default Mtraining;
import React from 'react';
/*import logo from '../../images/1.jpg'*/
/*import head from './Header.module.css';*/
import Slider from '../Components/CarouselBox.jsx';



const Header =(props)=> {
   
    return ( 
    <div>
    {/*<div className ='imge'>
      <img src= {logo} alt="картинка"/>      
    </div>*/}      
        <Slider />      
      <div>          
      <button className ='button'>Хочу на курс</button>
      <button className ='button'>Бесплатные уроки</button>
      <button className ='button'>Набор художника</button>
      </div>
      <div>
      <button className ='button'>Набор кистей</button>
      </div>
      <div>
          <text>Текст</text>         
      </div>      
      </div> 
  );  
  }   
    
    export default Header;
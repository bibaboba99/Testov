import React from 'react';
import logo from '../../images/1.jpg'
import head from './Header.module.css';


const Header =(props)=> {
   
    return ( 
    <div className = {head.head}>
      <div className ='imge'>
      <img src= {logo} alt="картинка"/>
      </div>
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
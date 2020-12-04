import React from 'react';
import logo from '../../images/1.jpg'
import sets from './Sets.module.css';


const Sets =(props)=> {
   
    return ( 
        <div className={sets.set}>
           <div>
            <img src= {logo} alt="картинка"/>
            </div>
        <div className = "text">
              50
            </div>
            <div className = "img"></div>
  </div>);
    }   
    
    
    export default Sets;
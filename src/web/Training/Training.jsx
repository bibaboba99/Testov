import React from 'react';
import logo from '../../images/1.jpg'
import train from './Training.module.css';


const Training =(props)=> {
   
    return ( 
        <div className={train.train}>
             <div>
            <img src= {logo} alt="картинка"/>
            </div>
        <div className = "text">
              30
            </div>
            <div className = "img"></div>
</div>);
    }   
    
    export default Training;
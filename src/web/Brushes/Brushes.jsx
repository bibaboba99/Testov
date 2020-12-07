import React from 'react';
import logo from '../../images/1.jpg'
import brushes from './Brushes.module.css';


const Brushes =(props)=> {
   
    return ( 
        <div className={brushes.brushes}>
           <div className = "text">
              Какой-то текст 4
            </div>

             <div>
            <img src= {logo} alt="картинка"/>
            </div>
        
            <div className = "img"></div>
</div>);
    }   
    
    export default Brushes;
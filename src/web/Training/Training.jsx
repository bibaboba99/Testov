import React from 'react';
import logo from '../../images/1.jpg'
import train from './Training.module.css';


const Training = (props) => {

    return (
        <div className={train.train}>
            <div className="text">
                Какой-то тест 3
            </div>
            <div>
                <img src={logo} alt="картинка" />
            </div>
        </div>
    );
}



export default Training;
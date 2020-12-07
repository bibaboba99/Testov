import React from 'react';
import logo from '../../images/1.jpg'
import logo2 from '../../images/2.jpg'
import head from './Header.module.css';



const Header = (props) => {

  return (
    <div className={head.head}>
      <div>
        <text>Текст</text>
      </div>
      <div className='imge'>
        <img src={logo} alt="картинка" />

        <img src={logo2} alt="картинка" />
      </div>
      <div className='buut'>
        <button className='button'>Хочу на курс</button>
        <button className='button'>Бесплатные уроки</button>
        <button className='button'>Набор художника</button>
      </div>
      <div className='buut'>
        <button className='button'>Набор кистей</button>
      </div>

    </div>
  );
}

export default Header;
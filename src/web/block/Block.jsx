import React, {useState, useEffect} from 'react'
import './infoblock.css'
import firstImg from '../../images/1.jpg'
import secImg from '../../images/2.jpg'
import thirdImg from '../../images/3.jpg'

export default function Block() {
    const [arrFix, setarrFix] = useState(3)
    const [active, setactive] = useState([
        {id: 1, img: firstImg, title1: 'Доступен курс балбла', title2: 'Детский портрет с нуля', listik: ['50 уроков', 'Основы рисунка', 'Детская анатоми'], button: 'Кнопка текст'},
        {id: 2, img: secImg, title1: 'Доступен курс ', title2: 'На планшете могу как Бог', listik: ['50 уроков', 'Основы рисунка', 'Детская анатоми'], button: 'Кнопка текст'},
    ])
    const [disabled, setdisabled] = useState([
        {id: 3, img: thirdImg, title1: 'Курс балбла', title2: 'Рисуя', listik: ['50 уроков', 'Основы рисунка', 'Детская анатоми'], button: 'Кнопка текст'}
    ])


    const rigth = () =>{
        var arr = active
        const shifted = arr.shift()
        arr.push(disabled[0])
        setactive([...arr])
        setdisabled([{...shifted}])
    }

    const left = () =>{
        var arr = active
        const shifted = arr.pop()
        arr.unshift(disabled[0])
        setactive([...arr])
        setdisabled([{...shifted}])
    }

    return (
        <>
        <div className="infoBlock">
            <div>
            <p>Онлайн обучение на iPad с художницей Maria Sw</p>
            <p>Интенсивные курсы для новичков и умелых художников!</p>
            </div>
        </div>
        <div className="infoBlock__carouselBox">
                <div className="infoBlock__carouselBox__but" onClick={()=>left()}>
                ВЛЕВО    
                </div>
                {active.length > 0 && active.map((item, index)=>{
                    return(
                        <div key={index} className={"infoBlock__carouselBox__block"}>
                            <div className="infoBlock__carouselBox__block--img" ><img src={item.img} alt={'sad'}/></div>
                            <div className="infoBlock__carouselBox__block--t1">{item.title1}</div>
                            <div className="infoBlock__carouselBox__block--t2">{item.title2}</div>
                            <div>{item.listik.map((item, index)=>{
                                    return(
                                        <span key={index}>{item}</span>
                                    )
                                    })}</div>
                        </div>
                    )
                })}
                <div className="infoBlock__carouselBox__but" onClick={()=>rigth()}>
                Вправо    
                </div>
        </div>
        </>
    )
}

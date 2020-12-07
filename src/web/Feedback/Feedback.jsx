import React from 'react';
import Feed from '../Components/Feedback/feed';
import feed from './Feedback.module.css';
import feede from './Feedback.module.css';
import h from './Feedback.module.css';


const Feedback = (props) => {

    return (

        <div className={feed.feedback}>
            <div>
                <div className={h.tut}>
                    Узнавай первым о творческих новинках
            </div>
                <div className='list'>
                    <ul>
                        <li>Актуальные курсы</li>
                        <li>Прямые эфиры</li>
                        <li>Челленджи / марафоны</li>
                        <li>Новые видеоуроки</li>
                    </ul>
                </div>
            </div>
            <div className={feede.feede}>
                <Feed />
            </div>

        </div>
    );

}

export default Feedback;
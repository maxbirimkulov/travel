import React from 'react';
import Carditem from "./Carditem";
import './Cards.css'
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img5 from '../images/img-5.jpg'
import img6 from '../images/img-6.jpg'


function Cards  ()  {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem
                        src={img1}
                        text="Explore the hidden waterfall deep
                        inside the Amazon Jungle "
                        label="Adventure"
                        path='/services'
                        />
                        <Carditem
                        src={img2}
                        text="Travel through the Islands of Bali in a Private Cruise "
                        label="Adventure"
                        path='/services'
                        />

                    </ul>
                    <ul className="cards__items">
                        <Carditem
                        src={img3}
                        text="Explore the hidden waterfall deep
                        inside the Amazon Jungle "
                        label="Adventure"
                        path='/services'
                        />
                        <Carditem
                        src={img5}
                        text="Travel through the Islands of Bali in a Private Cruise "
                        label="Adventure"
                        path='/services'
                        />  <Carditem
                        src={img6}
                        text="Travel through the Islands of Bali in a Private Cruise "
                        label="Adventure"
                        path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
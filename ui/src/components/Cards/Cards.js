import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Variety of features that can be explored by students!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Sticky Notes'
                            label='Notes'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Student Forum'
                            label='Forum'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Notedpad'
                            label='Notepad'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Timetable'
                            label='Timetable'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Personal Profile that allows you to freely edit your information'
                            label='Profile'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

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
                            src='images/stickyNotes.jpg'
                            text='Save your thoughts on Sticky Notes'
                            label='Notes'
                        />
                        <CardItem
                            src='images/studentForum.png'
                            text='Ask and Answer question on the Student Forum'
                            label='Forum'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/notepad.jpg'
                            text='Document your projects on Notedpad'
                            label='Notepad'
                        />
                        <CardItem
                            src='images/timetable.jpg'
                            text='Created your own schedule using the Timetable'
                            label='Timetable'
                        />
                        <CardItem
                            src='images/personalProfile.jpg'
                            text='Personal Profile that allows you to freely edit your information'
                            label='Profile'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

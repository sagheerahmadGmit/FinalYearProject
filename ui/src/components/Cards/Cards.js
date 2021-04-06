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
                            src='images/notepad.PNG'
                            text='Document your projects on Notedpad'
                            label='Notepad'
                        />
                        <CardItem
                            src='images/chat.PNG'
                            text='Talk to other colleagues and friends via the chat application'
                            label='chat'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

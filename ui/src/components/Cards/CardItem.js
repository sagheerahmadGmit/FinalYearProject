// imports
import React from 'react';
import { Link } from 'react-router-dom';

// function CardItem that takes in props
function CardItem(props) {

    // if statement to see if the card has a link
    const isToLink = props.path ? props.path : '/'

    // return everything inside the brackets
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={isToLink} >
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 align="center" className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

// export CardItem
export default CardItem;

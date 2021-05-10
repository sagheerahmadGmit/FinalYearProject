// imports
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// constants
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

// export function ButtonNews
export const ButtonNews = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // if statement to check button style
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // if statement to check button size
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    // return everything inside the brackets
    return (
        // When clicking the button it redirects the user to the newsletter page
        <Link to='/footer' className='btn-mobile'>
            <button
                // style and size the button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                // make the button clickable
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};

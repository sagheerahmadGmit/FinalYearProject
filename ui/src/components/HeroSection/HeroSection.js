import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';
import logo from '../../Images/logo.png';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <p><img src={logo} className='imgCenter' /></p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Newsletter
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Sign In <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;

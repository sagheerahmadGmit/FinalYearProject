// imports
import React from 'react';
import './footerStyles.css';
import { ButtonLogin } from '../Button/ButtonLogin';
import { Link } from 'react-router-dom';

// This class creates a footer that is shown
// at the bottom of most pages inside the project.
// Inside the footer you can find our social media
// links such as github and linkedIn
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the StudentHub newsletter to recieve updates!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            id='mce-EMAIL'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                            required
                        />
                        <ButtonLogin
                            buttonStyle='btn--outline'
                            type='submit'
                        >Subscribe</ButtonLogin>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <a href='/about'>About Us</a>
                        <a href='/contact'>Contact Us</a>
                        <a href='/'>Support Us</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Video Samples</h2>
                        <Link to='/notes'>Sticky Notes</Link>
                        <Link to='/chat'>Messenger</Link>
                        <Link to='/notepad'>Notepad</Link>
                        <Link to='/forum'>Student Forum</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://github.com/MateuszPawlowski'>Git Hub Mateusz</a>
                        <a href='https://github.com/sagheerahmadGmit'>Git Hub Sagheer</a>
                        <a href='https://www.linkedin.com/in/mateusz-pawlowski-0546571ba/'>Linked In Mateusz</a>
                        <a href='https://www.linkedin.com/in/sagheer-ahmad-a254111b6/'>Linked In Sagheer</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>StudentHub © 2021</small>
                </div>
            </section>
        </div>
    );
}

// export Footer
export default Footer;
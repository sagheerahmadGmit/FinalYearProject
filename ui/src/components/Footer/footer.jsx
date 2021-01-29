import React from 'react';
import './footerStyles.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the StudentHub newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <a href='/about'>About Us</a>
                        <a href='/contact'>Contact Us</a>
                        <a href='/'>Support Us</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Video Samples</h2>
                        <Link to='/'>Sticky Notes</Link>
                        <Link to='/'>Timetable</Link>
                        <Link to='/'>Notepad</Link>
                        <Link to='/'>Student Forum</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://github.com/MateuszPawlowski'>Git Hub Mateusz</a>
                        <a href='https://github.com/sagheerahmadGmit'>Git Hub Sagheer</a>
                        <a href='https://www.linkedin.com/in/mateusz-pawlowski-0546571ba/'>Linked In Mateusz</a>
                        <a href='https://www.linkedin.com/in/sagheer-ahmad-a254111b6/'>Linked In Sagheer</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>StudentHub © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
import React from 'react';
import './styles.css';
import Sagheer from '../../Images/sagheer.PNG';
import Mathew from '../../Images/mathew.PNG';
import Martin from '../../Images/martin.jpg';

const About = () => {
  return (
    <div>
      <div className="about-section">
        <p></p>
        <h1>- Our Aim - </h1>
        <p>Provide a exciting and safe environment for online learning.</p>
        <p>Our aim for this project is to build a cross platform Web Application 
          designed to assist students with their online learning. We want to
          help students struggling with their course. They might be struglling with things like
          not being able to access proper course materials due to internet issues. This is where other
          students can help them by submitting helpful information and documentation. This will
          allow to students to better manage their time and be more prepared for exams and projects.

        </p>
      </div>
      <h2 style={{textAlign: 'center'}}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={Sagheer} alt="Sagheer" style={{width: '100%'}} height='300'/>
            <div className="container">
              <h2>Sagheer Ahmad</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Hard working and determined to provide a great user experince.</p>
              <p>studenthub910@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={Mathew} alt="Mike" style={{width: '100%'}} height='300' />
            <div className="container">
              <h2>Mateusz Pawlowski</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Hard working and determined to provide a great user experince.</p>
              <p>studenthub910@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={Martin} alt="John" style={{width: '100%'}} height='300' />
            <div className="container">
              <h2>Martin Hynes</h2>
              <p className="title">Supervisor</p>
              <p>Hard working and determined to provide a great user experince.</p>
              <p>martin.hynes@gmit.ie</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <p></p>
        <h1>- Help us help you - </h1>
        <p>Let us know how we can improve.</p>
        <p>Please tell us how we can improve our website by emailing us and getting in contact with us,
          We appreciate all emails and ideas. Please visit our <a href="/contact" >Contact page.</a>
        </p>
      </div>
    </div>
  );
}

export default About;
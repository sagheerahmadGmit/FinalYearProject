import React from 'react';
import './aboutcss.css';

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
      <div className="about-section">
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
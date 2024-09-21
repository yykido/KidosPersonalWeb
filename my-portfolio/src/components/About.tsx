import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="main-content">
        <div className="text-content">
          <span className="junior-tag">JUNIOR</span>
          <h1>FULL-STACK DEVELOPER</h1>
          <div className="about-content">
            <div className="about-text">
              <p>Hi there! My name is Stefano and I'm a passionate software developer.</p>
              <p>My goal is to learn something new every day, improve my skills and solve users and business issues. I can quickly analyze problems and solve them both independently and in a team.</p>
            </div>
          </div>
        </div>
        <img src="/profile.jpg" alt="Yang Zheng" className="profile-photo" />
      </div>
    </section>
  );
};

export default About;
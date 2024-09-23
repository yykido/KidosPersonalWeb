import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className="main-content">
        <div className="text-content">
          <span className="junior-tag">JUNIOR</span>
          <h1>FULL-STACK<br />DEVELOPER</h1>
          <div className="about-content">
            <div className="about-text">
              <p>Hi there!<br />My name is Stefano and I'm 24 years old ambitious junior front-end developer.<br />Now I'm looking for a new position and new challenges.</p>
            </div>
            <div className="about-text">
              <p>My goal is to learn something new every day, improve my skills and solve users and business issues. I can quickly analyze problems and solve them both independently and in a team.</p>
            </div>
          </div>
        </div>
        <img src="/profile2.jpg" alt="Stefano Ye" className="profile-photo" />
      </div>
    </section>
  );
};

export default Home;
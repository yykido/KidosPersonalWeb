import React from 'react';

const MyStory: React.FC = () => {
  return (
    <section id="my-story">
      <div className="main-content">
        <div className="quote">
          <p>"I'm writing my story so that others might see fragments of themselves."</p>
        </div>
        <div className="about-container">
          <img src="/profile.jpg" alt="Stefano Ye" className="profile-photo" />
          <div className="text-content">
            <h2>MY STORY</h2>
            <p>Hi there, my name is Stefano, I am 24 years old.</p>
            <p>Even from a young age, I liked computer technology. I was always interested in the news and trends of IT technologies with great pleasure.</p>
            <p>Then I realized that I really want to develop myself in the IT direction because this field is developing very dynamically and I wanted to keep up with the times.</p>
            <p>The further I went, the more inspiration and the desire to study programming in more depth came to me.</p>
            <p>I am an open-minded and determined person, I learn quickly. I like to learn new things.</p>
            <p>My hobbies are computer diagnostics of cars, traveling, wakeboarding, and active pastime.</p>
            <p>I believe that working for you, I will be able to bring something new and useful to your teams. In turn, I will apply all my knowledge so that the company becomes even more promising, and the team becomes even more productive and friendly, since I am a person who will always bring with a good mood and motivation to work.</p>
            <p>I'm a real team player.</p>
            <button className="resume-button">Get my resume</button>
          </div>
        </div>
      </div>
      <div className="bottom-quote">
        <p>"Code is like humor. When you have to explain it, it's bad." - Cory House</p>
      </div>
    </section>
  );
};

export default MyStory;

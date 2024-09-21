import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'JAVASCRIPT', icon: 'js-icon.png' },
  { name: 'TYPESCRIPT', icon: 'ts-icon.png' },
  { name: 'FIREBASE', icon: 'firebase-icon.png' },
  { name: 'REACT JS/TS', icon: 'react-icon.png' },
  { name: 'HTML', icon: 'html-icon.png' },
  { name: 'CSS', icon: 'css-icon.png' },
  { name: 'SCSS', icon: 'scss-icon.png' },
  { name: 'GIT', icon: 'git-icon.png' },
  { name: 'REACT-ROUTER-DOM', icon: 'react-router-icon.png' },
];

const additionalSkills = [
  'STYLED-COMPONENTS', 'ADOBE XD', 'FIGMA',
  'LINUX', 'MACOS', 'WINDOWS'
];

const MySkill: React.FC = () => {
  return (
    <section id="skills">
      <h2>MY SKILLS</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={`/icons/${skill.icon}`} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="additional-skills">
          <h3>ALSO SOME BUNCH OF ORDINARY SKILLS:</h3>
          <p>{additionalSkills.join(', ')}</p>
        </div>
        <button className="resume-button">Get my resume</button>
      </div>
    </section>
  );
};

export default MySkill;

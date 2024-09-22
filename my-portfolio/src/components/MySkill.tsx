import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'JAVASCRIPT', icon: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png' },
  { name: 'TYPESCRIPT', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
  { name: 'REACT', icon: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png' },
  { name: 'JAVA', icon: 'https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png' },
  { name: 'SPRING BOOT', icon: 'https://img.icons8.com/color/200/spring-logo.png' },
  { name: 'REDIS', icon: 'https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png' },
  { name: 'MYSQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png' },
  { name: 'MONGODB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
  { name: 'ELASTICSEARCH', icon: 'https://static-00.iconduck.com/assets.00/elasticsearch-icon-1839x2048-s0i8mk51.png' },
  { name: 'GIT', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
  { name: 'AWS', icon: 'https://cmscritic.com/ms-content/uploads/2024/03/aws-logo-icon.jpg?format=auto&width=256' },
  { name: 'DOCKER', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
];

const additionalSkills = [
  'STYLED-COMPONENTS', 'ADOBE XD', 'FIGMA',
  'LINUX', 'MACOS', 'WINDOWS'
];

const MySkill: React.FC = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-content">
          <h2>MY SKILLS</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={`${skill.icon}`} alt={skill.name} className="skill-icon" />
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
        <div className="skills-image">
          <img src="/profile-work.jpg" alt="Profile working" />
        </div>
      </div>
    </section>
  );
};

export default MySkill;

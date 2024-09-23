import React from 'react';

interface Project {
  title: string;
  tech: string;
  description: string;
  githubLink: string;
  image: string;
  isInverted?: boolean;
}

const projects: Project[] = [
  {
    title: 'WECHAT AI ASSISTANT',
    tech: 'AWS, HTML, CSS, REACT.JS, TYPESCRIPT, GITLAB',
    description: 'AutoWechat Bot is a WeChat bot that automatically replies to messages from specified contacts using the Wechaty framework. It can handle text and voice messages, and respond with both text and voice.',
    githubLink: 'https://github.com/yykido/AutoWechat',
    image: 'https://wechaty.github.io/wechaty/images/wechaty-logo-green-en.png',
  },
  {
    title: 'CLOUD NATIVE PRODUCT MANAGMENT SYSTEM',
    tech: 'AWS, SPRING BOOT, TERRAFORM, ELB, RDS, S3, EC2',
    description: 'This is a web application Library Management system built with spring boot and deployed on AWS.',
    githubLink: 'https://github.com/yykido/CSYE6225-2023Spring',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*ZiFLNDSY82SIcRwf6_f9Wg.jpeg',
    isInverted: true,
  },
  {
    title: 'DUTCH AUCTION',
    tech: 'HARDHAT, REACT, SOLIDITY, TYPESCRIPT',
    description: "This project contains a Hardhat and React Dapp starter. The React Dapp interacts with the Greeter.sol smart contract running on a local Hardhat blockchain.",
    githubLink: 'https://github.com/yykido/INFO7500/tree/main/v6.0',
    image: 'https://pbs.twimg.com/media/GYLjDyUXsAAcxYX?format=jpg&name=medium',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>MY PROJECTS</h2>
      {projects.map((project, index) => (
        <div key={index} className={`project-card ${project.isInverted ? 'inverted' : ''}`}>
          {!project.isInverted && (
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <div className="project-info">
            <h3>{project.title}</h3>
            <p className="tech">TECH: {project.tech}</p>
            <p className="description">{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink}>Github →</a>
              <a href="#">Show more +</a>
            </div>
          </div>
          {project.isInverted && (
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
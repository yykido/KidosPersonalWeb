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
    tech: 'FIREBASE, HTML, CSS, REACT.JS, TYPESCRIPT, GITLAB',
    description: 'The main goal was to develop a service to optimize work in the office. Created together with the customer a completely new service on the Ukrainian market to optimize work and services in the office. Helped solve the problem of modern society to save time and use it more organically.',
    githubLink: '#',
    image: 'https://wechaty.github.io/wechaty/images/wechaty-logo-green-en.png',
  },
  {
    title: 'DRIVE2',
    tech: 'FIREBASE, HTML, CSS, REACT.JS, TYPESCRIPT, GITHUB',
    description: 'The main goal is to make a clone of the original Drive2 site, build the Flux architecture in practice and create the likely functionality, practice working with GitHub and Firebase. In this project, I improved my skills in terms of speed and quality of work. Independently figured out the work of Firebase.',
    githubLink: '#',
    image: '/images/drive2.png',
    isInverted: true,
  },
  {
    title: 'BIANU',
    tech: 'HTML, CSS',
    description: 'The goal of the project is to develop HTML-CSS skills. In this project, I improved my skills in terms of speed and quality of work.',
    githubLink: '#',
    image: '/images/bianu.png',
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
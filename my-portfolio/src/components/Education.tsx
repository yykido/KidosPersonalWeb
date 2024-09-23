import React from 'react';

interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

const educationEntries: EducationEntry[] = [
  {
    degree: 'Master of Science in Computer Software Engineering',
    institution: 'Northeastern University',
    year: '2022 - 2024'
  },
  {
    degree: 'Bachelor of Engineering in Engineering Mechanics',
    institution: 'Zhejiang University',
    year: '2017 - 2021'
  }
];

const relatedCourses = [
  'Calculus', 'Linear Algebra', 'Statistics', 'Data Structure and Algorithm',
  'Object Oriented Design', 'Cloud Computing', 'Web Design', 'Cryptocurrency and Smart Contract'
];

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2>EDUCATION</h2>
      <div className="education-container">
        {educationEntries.map((entry, index) => (
          <div key={index} className="education-entry">
            <h3>{entry.degree}</h3>
            <p>{entry.institution}</p>
            <p>{entry.year}</p>
          </div>
        ))}
      </div>
      <div className="related-courses">
        <h3>Related Courses</h3>
        <ul>
          {relatedCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
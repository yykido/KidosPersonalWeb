import React from 'react';

const MyWorkflow: React.FC = () => {
  const workflowSteps = [
    { number: '01', title: 'REQUIREMENTS ANALYSIS' },
    { number: '02', title: 'ASK ABOUT DEADLINES AND RESTRICTIONS' },
    { number: '03', title: 'SETTING UP THE ENVIRONMENT' },
    { number: '04', title: 'PROGRAMMING' },
    { number: '05', title: 'TESTING MY RESULTS' },
    { number: '06', title: 'SUPPORTING AND SCALING MY CODE' },
  ];

  return (
    <section id="workflow">
      <h2>MY WORKFLOW</h2>
      <div className="workflow-container">
        {workflowSteps.map((step, index) => (
          <div key={index} className="workflow-step">
            <span className="step-number">{step.number}</span>
            <span className="step-title">{step.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWorkflow;

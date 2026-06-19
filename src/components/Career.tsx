import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LLM Validation Intern (Freelancing)</h4>
                <h5>Outlier AI</h5>
              </div>
              <h3>Nov 2024 – Jan 2025</h3>
            </div>
            <p>
              Developed and reviewed front-end components using React.js and Bootstrap. 
              Validated and evaluated LLM-generated outputs for accuracy and quality. 
              Collaborated with project reviewers to deliver high-quality code reviews 
              within sprint deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Scriptures and Research Technologies</h5>
              </div>
              <h3>May 2026 – Present</h3>
            </div>
            <p>
              Contributing to the development of an AI-powered agent for team workflow 
              management. Designing intelligent automation systems and integrating 
              AI-driven decision-making workflows. Building scalable software solutions 
              leveraging Agentic AI frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

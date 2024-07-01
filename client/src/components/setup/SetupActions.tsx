import React from 'react';
import { Link } from 'react-router-dom';

const SetupActions: React.FC = () => {
  return (
    <div className="dash-buttons">
      <Link to="/create-difficultylevel" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Create Difficulty
        Level for a Question
      </Link>
      <Link to="/create-question" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Create Question
      </Link>
      <Link to="/create-topic" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Create Topic for a
        Question
      </Link>
      <Link to="/create-subject" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Create Subject for a
        Question
      </Link>
      <Link to="/create-tests" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Create Test
      </Link>

      <Link to="/create-user-performance" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Enter Student Test
        Result
      </Link>
    </div>
  );
};

export default SetupActions;

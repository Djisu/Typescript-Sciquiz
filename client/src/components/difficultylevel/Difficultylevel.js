import React, { useState, useEffect } from 'react';
import { createDifficultyLevel } from '../../actions/difficulty_level';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';

const Difficultylevel = () => {
  const [difficultylevelData, setDifficultylevel] = useState({
    level: '',
  });
  const dispatch = useDispatch();

  const { level } = difficultylevelData;

  const handleInputChange = (e) => {
    setDifficultylevel({
      ...difficultylevelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!difficultylevelData) {
      dispatch(setAlert('Difficultylevel Creation Successful', 'success'));
    }

    dispatch(createDifficultyLevel(difficultylevelData));
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Difficulty Level:</label>
          <input
            type="text"
            name="level"
            value={level}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add difficulty level
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default Difficultylevel;

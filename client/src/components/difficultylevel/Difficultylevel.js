import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  createDifficultyLevel,
  deleteDifficultyLevel,
  loadDifficultyLevels,
} from '../../actions/difficulty_level.js';
import { setAlert } from '../../actions/alert.js';

const Difficultylevel = () => {
  const difficultyLevels = useSelector(
    (state) => state.difficultyLevel.difficultyLevels
  );

  console.log('difficultyLevels:', difficultyLevels);

  const [difficultylevelData, setDifficultylevel] = useState({
    level: '',
  });
  const dispatch = useDispatch();

  const { level } = difficultylevelData;

  useEffect(() => {
    console.log('in useEffect');
    dispatch(loadDifficultyLevels());
  }, [dispatch]);

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

  const deleteHandler = (id) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteDifficultyLevel(id));
    }
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

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>LEVEL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {difficultyLevels.map((difficultyLevel) => (
            <tr key={difficultyLevel._id}>
              <td>{difficultyLevel._id}</td>
              <td>{difficultyLevel.level}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => deleteHandler(difficultyLevel._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Difficultylevel;

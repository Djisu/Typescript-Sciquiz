import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSubject } from '../../actions/subject.js';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert.js';


const Subject = () => {
  const [subjectData, setSubjectData] = useState({
    subject_name: '',
  });
  const dispatch = useDispatch()

  const {subject_name} = subjectData

  const handleInputChange = (e) => {
     
     setSubjectData({ ...subjectData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subjectData){
         dispatch(setAlert('Subject Creation Successful', 'success'));
    }

    dispatch(createSubject(subjectData));
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject_name"
            value={subject_name}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add subject
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
    </section>
  );
};


//const mapStateToProps = (state) => ({
//  isAuthenticated: state.auth.isAuthenticated,
//});
export default Subject;

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  createSubject,
  loadSubjects,
  deleteSubject,
} from '../../actions/subject.ts';
import { setAlert } from '../../actions/alert.ts';
import { RootState } from '../../reducers/index.ts';
import { setAlertValue } from '../../actions/action-types/alert.ts';
import { ThunkDispatch } from 'redux-thunk';

const Subject: React.FC = () => {
  const [subjectData, setSubjectData] = useState({
    subject_name: '',
  });

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  useEffect(() => {
    dispatch(loadSubjects());
  }, [dispatch]);

  //const subjects = useSelector((state: RootState) => state.subjects);
  //const { subjects } = useSelector((state: RootState) => state);
  const { subjects } = useSelector((state: RootState) => state.subject);

  const { subject_name } = subjectData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectData({ ...subjectData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!subjectData) {
      dispatch(setAlertValue('Subject Creation Successful', 'success', '01'));
    }

    dispatch(createSubject(subjectData));
  };

  const deleteHandler = (id: string) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteSubject(id));
    }
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
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>SUBJECT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{subject.subject_name}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => deleteHandler(subject.subject_name)}
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

//const mapStateToProps = (state) => ({
//  isAuthenticated: state.auth.isAuthenticated,
//});
export default Subject;

import React, { useState, useEffect } from 'react';
import {
  createUserPerformance,
  loadUserPerformances,
  deleteUserPerformance,
} from '../../actions/user_performance.ts';
import { getProfiles } from '../../actions/profile.ts';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../actions/alert.ts';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers/index.ts';
import { ObjectId } from 'mongoose';
import { Profile } from '../../reducers/profiles.ts';
import { ProfilesState } from '../../reducers/profiles.ts';

interface IUserPerformance {
  _id: string
  userId: string 
  test_name: string 
  score: number 
  date: Date 
  email: string 
  test_details: string
}

interface Props {
  userPerformances: IUserPerformance[];
  deleteHandler: (id: string) => void;
}

const User_Performance: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>(''); // Initialize selectedProfile state

  let [userPerformanceData, setUserPerformanceData] = useState<IUserPerformance>({
    _id: '',
    userId: '',
    test_name: '',
    score: 0,
    date: new Date(),
    email: '',
    test_details: '',
  });

  //  const userEmail = localStorage.getItem('email');

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  useEffect(() => {
    console.log('in useEffect, loadUserPerformances() ');

    dispatch(loadUserPerformances());
  }, [dispatch]);

  const userPerformances = useSelector(
    (state: RootState) => state.userPerformance.userPerformances
  );

  console.log('userPerformances:::', userPerformances);

  useEffect(() => {
    console.log('in useEffect getProfiles()');

    dispatch(getProfiles());
  }, [dispatch]);

  useEffect(() => {
    setUserPerformanceData((prevData) => ({
      ...prevData,
      userId: localStorage.getItem('id') || '',
      date: new Date(),
    }));
  }, []);

  const {profiles} = useSelector((state: RootState) => state.profiles) 

  console.log('profiles==', profiles);

  let { userId, test_name, score, date, email, test_details } = userPerformanceData;

  userPerformanceData.userId = localStorage.getItem('id') || '';
  userPerformanceData.date = new Date();

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setUserPerformanceData((prevData) => ({
      ...prevData,
      [name]: name === 'score' ? parseInt(value) : value,
    }));

    if (name === 'userId') {
      setSelectedProfile(value); // Update the selectedProfile state if userId changes
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userPerformanceData) {
      dispatch(setAlert('No data found', 'danger'));
      return;
    }

    if (!test_name) {
      dispatch(setAlert('Test name missing', 'danger'));
      return;
    }
    
    if (score === 0) {
      dispatch(setAlert('Test score missing', 'danger'));
      return;
    }

    email = selectedProfile;

    if (!email) {
      dispatch(setAlert('Email of candidate missing', 'danger'));
      return;
    }

    if (!test_details) {
      dispatch(setAlert('Test details missing', 'danger'));
      return;
    }

    // Ensure score is an integer
    score = parseInt(score.toString());

    // Update userPerformanceData with email and score
    const updatedUserPerformanceData = {
      ...userPerformanceData,
      email: email,
      score: score
    };

    // Dispatch the action to create user performance
    dispatch(createUserPerformance(updatedUserPerformanceData));
  };


  const deleteHandler = (id: string) => {
    console.log('in deleteHandler');

    if (window.confirm('Are you sure?')) {
      console.log('id:', id);
      dispatch(deleteUserPerformance(id));
    }
  };

  const handleSave = () => {
    // Generate _id (you might use a unique identifier library like uuid)
    const generatedId = generateId();
    const newUserPerformanceData: IUserPerformance = {
      ...userPerformanceData,
      _id: generatedId
    };
    // Do something with newUserPerformanceData, e.g., save to database or use locally
    console.log(newUserPerformanceData);
  };

  const generateId = (): string => {
    // Function to generate a unique identifier (e.g., using uuid library)
    return 'generated-id'; // Replace this with your actual implementation
  };

  return (
    <section className="container">
      <br />
      <br />
      <br />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Test Name: Month/Year/Subject</label>
          <input
            type="text"
            name="test_name"
            value={test_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Test Score:</label>
          <input
            type="text"
            name="score"
            value={score}
            onChange={handleInputChange}
          />
        </div>
        {/* I HAVE TO USE selector to list all users !admin */}
        <h2>Email of student/candidate</h2>
        <select
          name="profiles"
          value={selectedProfile}
          onChange={handleInputChange}
        >
          <option disabled value="">
            Select an email
          </option>
          {profiles.map((profile) => (
            <option key={profile._id} value={profile.email}>
              {profile.email}
            </option>
          ))}
        </select>

        <div className="form-group">
          <label>Test Details: Topic and Score for each question</label>
          <textarea
            name="test_details"
            value={test_details}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Test Score
        </button>
        <Link to="/dashboard" className="primary m-3">
          Go Back
        </Link>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>TEST NAME</th>
            <th>TEST SCORE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userPerformances.map((userPerformance: IUserPerformance) => (
            <tr key={userPerformance._id || userPerformance.userId}>
              <td>{userPerformance.test_name}</td>
              <td>{userPerformance.score}</td>
              <td>
              {userPerformance._id && (
              <button
                type="button"
                className="btn btn-primary small"
                onClick={() => deleteHandler(userPerformance._id!)}
              >
                Delete
              </button>
            )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default User_Performance;

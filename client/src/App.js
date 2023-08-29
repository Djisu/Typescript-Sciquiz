import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Alert from './components/layout/Alert.js';
import AdminRoute from './components/AdminRoute.js';
import Dashboard from './components/dashboard/Dashboard.js';
import SearchText from './components/layout/SearchText.js';
import ProfileForm from './components/profile-forms/ProfileForm.js';
import Profiles from './components/profiles/Profiles.js';
import Profile from './components/profile/Profile.js';

import Difficultylevel from './components/difficultylevel/Difficultylevel.js';
import Question from './components/question/Question.js';
import Subject from './components/subject/Subject.js';
import Tests from './components/tests/Tests.js';
import StuTests from './components/stutest/StuTests.js';
import Topic from './components/topic/Topic.js';
import User_Performance from './components/user_performance/User_Performance.js';

import NotFound from './components/layout/NotFound.js';

import PrivateRoute from './components/routing/PrivateRoute.js';
import { LOGOUT } from './actions/types.js';

// Redux  MainTestTopicsDifficultyLevels
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
//import PaymentEntry from './components/payments/PaymentEntry.js';
import StuTestDashboard from './components/stutest/StuTestDashboard.js';

import MainTest from './components/stutest/MainTest.js';
import MainTestTopics from './components/stutest/MainTestTopics.js';
import MainTestDifficultyLevels from './components/stutest/MainTestDifficultyLevels.js';
import MainTestSubjects from './components/stutest/MainTestSubjects.js';

import MainTestTopicsDifficultyLevels from './components/stutest/MainTestTopicsDifficultyLevels.js';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    //<Provider store={store}>
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        {/*<Route path="/" element={<Landing />} />*/}
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="profile/:status" element={<SearchText />} />
        {/*<Route path="payment-entry" element={<PaymentEntry />} />*/}
        {/* url = `/maintest/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userid}/${noofquestions}`; */}
        <Route
          path="/maintest/:checkedTopics/:checkedDifficultylevels/:checkedSubjects/:userId/:noofquestions"
          element={<MainTest />}
        />

        <Route
          path="/maintesttopics/:checkedTopics/:checkedSubjects/:userId/:noofquestions"
          element={<MainTestTopics />}
        />

        <Route
          path="/maintestdifficultylevels/:checkedDifficultylevels/:checkedSubjects/:userId/:noofquestions"
          element={<MainTestDifficultyLevels />}
        />

        <Route
          path="/maintestsubjects/:checkedSubjects/:userId/:noofquestions"
          element={<MainTestSubjects />}
        />

        <Route
          path="/maintesttopicsdifficultylevels/:checkedTopics/:checkedDifficultylevels/:checkedSubjects/:userId/:noofquestions"
          element={<MainTestTopicsDifficultyLevels />}
        />

        <Route
          path="dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="create-profile"
          element={<PrivateRoute component={ProfileForm} />}
        />
        <Route
          path="edit-profile"
          element={<PrivateRoute component={ProfileForm} />}
        />

        <Route path="/create-difficultylevel" element={<Difficultylevel />} />

        <Route path="/create-question" element={<Question />} />

        <Route path="/create-topic" element={<Topic />} />

        <Route path="/create-subject" element={<Subject />} />

        <Route path="/create-tests" element={<Tests />} />
        <Route path="/create-stutests" element={<StuTestDashboard />} />

        <Route path="/create-user-performance" element={<User_Performance />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
    //</Provider>
  );
};

export default App;

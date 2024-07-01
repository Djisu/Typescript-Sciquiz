import React, { useState, useEffect, FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar.tsx';
import Landing from './components/layout/Landing.tsx';
import Register from './components/auth/Register.tsx';
import Login from './components/auth/Login.tsx';
import UserEdit from './components/auth/UserEdit.tsx';

import Alert from './components/layout/Alert.tsx';
import AdminRoute from './components/AdminRoute.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
import SearchText from './components/layout/SearchText.tsx';
import ProfileForm from './components/profile-forms/ProfileForm.tsx';
import Profiles from './components/profiles/Profiles.tsx';
import ProfileData from './components/profile/ProfileData.tsx';
import ProfileTestResult from './components/profile/ProfileTestResult.tsx';
import ProfileMarkTest from './components/profile/ProfileMarkTest.tsx';

import Difficultylevel from './components/difficultylevel/Difficultylevel.tsx';
import QuestionForm from './components/question/QuestionForm.tsx';

import ExcelUpload from './components/question/ExcelUpload.tsx';

import Subject from './components/subject/Subject.tsx';

import TopicForm from './components/topic/Topic.tsx';
import User_Performance from './components/user_performance/User_Performance.tsx';

import NotFound from './components/layout/NotFound.tsx';

import PrivateRoute from './components/routing/PrivateRoute.tsx';
import { LOGOUT } from './actions/types.ts';

// Redux  MainTestTopicsDifficultyLevels
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store.ts';
import { loadUser } from './actions/auth.ts';
import setAuthToken from './utils/setAuthToken.ts';
import StuCreateTest from './components/stutest/StuCreateTest.tsx';
import CurrentTestResult from './components/stutest/CurrentTestResult.tsx';

import MainTest from './components/stutest/MainTest.tsx';
import MainTestTopics from './components/stutest/MainTestTopics.tsx';
import MainTestDifficultyLevels from './components/stutest/MainTestDifficultyLevels.tsx';
import MainTestSubjects from './components/stutest/MainTestSubjects.tsx';

import MainTestTopicsDifficultyLevels from './components/stutest/MainTestTopicsDifficultyLevels.tsx';
import MarkTest from './components/stutest/MarkTest.tsx';
import GeneralStats from './components/profiles/GeneralStats.tsx';
import ViewOverallStats from './components/stutest/ViewOverallStats.tsx';

import './App.css';
import { useDispatch } from 'react-redux';
import { RootState } from './reducers/index.ts';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setAlert } from './actions/alert.ts';

import { register } from './actions/auth.ts';
import { AuthState } from './reducers/auth.ts';
import { Profile, ProfileState } from './reducers/profile.ts';
import { props } from 'prop-types-ts';

import { useParams } from 'react-router-dom';



interface NavbarProps {
  auth: {
    isAuthenticated: boolean;
  };
}


export interface ProfileDataProps {
  profile: ProfileState;
  auth: AuthState;
}

const App: FC = () => {

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      dispatch(loadUser());
    }
    

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);


  const isAuthenticated = useSelector((state: RootState) => state.auth);
  const {profile, loading, error}: ProfileState = useSelector((state: RootState) => state.profile)

  const id: string = localStorage.getItem('id') || ''

 

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    //<Provider store={store}>
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register setAlert={setAlert} register={register} /> } />
        {/* <Route path="login" element={<Login isAuthenticated={isAuthenticated}/>} /> */}

        <Route path="login" element={<Login />} />

        

        <Route path="/user-edit" element={<UserEdit />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="profiletestresult" element={<ProfileTestResult userId={id} />} />
        {/* <Route path="profileData/:id" element={<ProfileData />} /> */}

        <Route
          path="/profileData/:profile/:auth"
          element={<ProfileData {...props} />}
        />
        
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
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/create-profile"
          element={
            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          }
        />


        <Route path="/create-difficultylevel" element={<Difficultylevel />} />
        <Route path="/create-question" element={<QuestionForm />} />
        <Route path="/excel-uploads" element={<ExcelUpload />} />
        <Route path="/create-topic" element={<TopicForm />} />
        <Route path="/create-subject" element={<Subject />} />
       
        <Route path="/create-stutests" element={<StuCreateTest />} />

        <Route path="/current-test-result" element={<CurrentTestResult />} />

        <Route path="/profile-mark-test" element={<ProfileMarkTest userId={id} />} /> 

      
        <Route path="/create-user-performance" element={<User_Performance />} />
        <Route path="/mark-test" element={<MarkTest />} />
        <Route path="/show-general-stats" element={<GeneralStats />} />
        <Route path="/view-overall-stats" element={<ViewOverallStats />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
    //</Provider>
  );
};

export default App;

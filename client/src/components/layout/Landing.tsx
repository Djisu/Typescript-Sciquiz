import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { LOGOUT } from '../../actions/types';

interface IProps {
  isAuthenticated: boolean;
}

const Landing: React.FC<IProps> = ({ isAuthenticated }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ type: LOGOUT });
    }
  }, [dispatch, isAuthenticated]);

  // if (isAuthenticated) {
  //   return <Navigate to="/dashboard" />;
  // }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">iQuiz</h1>
          <p className="lead">Create a student profile and take tests.</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>


            {/* {!isAuthenticated && (
              <Link to="/login" className="btn btn-light">
                Logout
              </Link>
            )}
            {isAuthenticated && (
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            )}  */}

            
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state: { auth: { isAuthenticated: boolean } }) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;



// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'; //, loading
// import { RootState } from '../../reducers';

// const PrivateRoute: React.FC = ({
//   component: Component,
//   auth: { isAuthenticated },
// }) => {
//   if (isAuthenticated) return <Component />;

//   return <Navigate to="/login" />;
// };
// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state: RootState) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);

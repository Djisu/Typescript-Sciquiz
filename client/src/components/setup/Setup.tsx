import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import SetupActions from './SetupActions';
import { getCurrentProfile } from '../../actions/profile';
import { RootState } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';

interface IProps {
  getCurrentProfile: () => void;
  auth: AuthState;
  profile: ProfileState;
}

interface User {
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
  token: string;
}

interface Profile {
  _id: string;
  user: string; // Using the ObjectId as a string
  school: string;
  status: string;
  name: string;
  bio?: string;
  email: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
}

interface ProfileState {
  profile: Profile | null;
  loading: boolean;
  error?: string | null;
}

const Dashboard: React.FC<IProps> = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary" style={{ marginTop: '80px' }}>
        Setup
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {user && user.isAdmin && (
        <Fragment>
          <SetupActions />
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: RootState): { auth: AuthState; profile: ProfileState } => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, any>) => ({
  getCurrentProfile: () => dispatch(getCurrentProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);





// import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
// import SetupActions from './SetupActions';
// import { getCurrentProfile } from '../../actions/profile';
// import { RootState } from '../../reducers';
// import { ThunkDispatch } from 'redux-thunk';

// interface IProps {
//   getCurrentProfile: () => void;
//   auth: AuthState;
//   profile: ProfileState;
// }

// interface User {
//   name: string;
//   email: string;
//   avatar: string;
//   isAdmin: boolean;
//   token: string;
// }

// interface Profile {
//   _id: string;
//   user: string; // Using the ObjectId as a string
//   school: string;
//   status: string;
//   name: string;
//   bio?: string;
//   email: string;
//   avatar: string;
// }

// interface AuthState {
//   user: User | null;
// }

// interface ProfileState {
//   profile: Profile | null;
//   loading: boolean;
//   error?: string | null;
// }

// const Dashboard: React.FC<IProps> = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, [getCurrentProfile]);

//   return loading && profile === null ? (
//     <Spinner />
//   ) : (
//     <Fragment>
//       <h1 className="large text-primary" style={{ marginTop: '80px' }}>
//         Setup
//       </h1>
//       <p className="lead">
//         <i className="fas fa-user"></i> Welcome {user && user.name}
//       </p>
//       {user && user.isAdmin && (
//         <Fragment>
//           <SetupActions />
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// const mapStateToProps = (state: RootState): { auth: AuthState; profile: ProfileState } => ({
//   auth: state.auth,
//   profile: {
//     profile: state.profiles.profiles,
//     loading: state.profiles.loading,
//     error: state.profiles.error,
//   },
// });

// const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, any>) => ({
//   getCurrentProfile: () => dispatch(getCurrentProfile()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);








// // import React, { Fragment, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { connect } from 'react-redux';
// // import Spinner from '../layout/Spinner';
// // import SetupActions from './SetupActions';
// // import { getCurrentProfile } from '../../actions/profile';
// // import { RootState } from '../../reducers';
// // import { ThunkDispatch } from 'redux-thunk';

// // interface IProps {
// //   getCurrentProfile: () => void;
// //   auth: AuthState;
// //   profile: ProfileState;
// // }

// // interface User {
// //   name: string;
// //   email: string;
// //   avatar: string;
// //   isAdmin: boolean;
// //   token: string;
// // }

// // interface Profile {
// //   _id: string;
// //   user: string; // Using the ObjectId as a string
// //   school: string;
// //   status: string;
// //   name: string;
// //   bio?: string;
// //   email: string;
// //   avatar: string;
// // }

// // interface AuthState {
// //   user: User | null;
// // }

// // interface ProfileState {
// //   profile: Profile | null;
// //   loading: boolean;
// // }

// // const Dashboard: React.FC<IProps> = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
// //   useEffect(() => {
// //     getCurrentProfile();
// //   }, [getCurrentProfile]);

// //   return loading && profile === null ? (
// //     <Spinner />
// //   ) : (
// //     <Fragment>
// //       <h1 className="large text-primary" style={{ marginTop: '80px' }}>
// //         Setup
// //       </h1>
// //       <p className="lead">
// //         <i className="fas fa-user"></i> Welcome {user && user.name}
// //       </p>
// //       {user && user.isAdmin && (
// //         <Fragment>
// //           <SetupActions />
// //         </Fragment>
// //       )}
// //     </Fragment>
// //   );
// // };

// // const mapStateToProps = (state: RootState): { auth: AuthState; profile: ProfileState } => ({
// //   auth: state.auth,
// //   profile: state.profile,
// // });

// // const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, any>) => ({
// //   getCurrentProfile: () => dispatch(getCurrentProfile()),
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);






// // // import React, { Fragment, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { connect } from 'react-redux';
// // // import Spinner from '../layout/Spinner';
// // // import SetupActions from './SetupActions';
// // // import { getCurrentProfile } from '../../actions/profile';
// // // import { RootState } from '../../reducers';
// // // import { ThunkDispatch } from 'redux-thunk';

// // // interface IProps {
// // //   getCurrentProfile: () => void;
// // //   auth: AuthState;
// // //   profile: ProfileState;
// // // }

// // // interface User {
// // //   name: string;
// // //   email: string;
// // //   avatar: string;
// // //   isAdmin: boolean;
// // //   token: string;
// // // }

// // // interface Profile {
// // //   _id: string;
// // //   user: string; // Using the ObjectId as a string
// // //   school: string;
// // //   status: string;
// // //   name: string;
// // //   bio?: string;
// // //   email: string;
// // //   avatar: string;
// // // }

// // // interface AuthState {
// // //   user: User | null;
// // // }

// // // interface ProfileState {
// // //   profile: Profile | null;
// // //   loading: boolean;
// // // }

// // // const Dashboard: React.FC<IProps> = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
// // //   useEffect(() => {
// // //     getCurrentProfile();
// // //   }, [getCurrentProfile]);

// // //   return loading && profile === null ? (
// // //     <Spinner />
// // //   ) : (
// // //     <Fragment>
// // //       <h1 className="large text-primary" style={{ marginTop: '80px' }}>
// // //         Setup
// // //       </h1>
// // //       <p className="lead">
// // //         <i className="fas fa-user"></i> Welcome {user && user.name}
// // //       </p>
// // //       {user && user.isAdmin && (
// // //         <Fragment>
// // //           <SetupActions />
// // //         </Fragment>
// // //       )}
// // //     </Fragment>
// // //   );
// // // };

// // // const mapStateToProps = (state: RootState) => ({
// // //   auth: state.auth,
// // //   profile: state.profile,
// // // });

// // // const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, unknown, any>) => ({
// // //   getCurrentProfile: () => dispatch(getCurrentProfile()),
// // // });

// // // export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);








// // // // import React, { Fragment, useEffect } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { connect } from 'react-redux';
// // // // import Spinner from '../layout/Spinner';
// // // // import SetupActions from './SetupActions';
// // // // import { getCurrentProfile } from '../../actions/profile';
// // // // import { AuthState } from '../../reducers/types/Auth';
// // // // import { ProfileState } from '../../reducers/profile';
// // // // import { RootState } from '../../reducers';

// // // // interface IProps {
// // // //   getCurrentProfile: () => void;
// // // //   auth: AuthState;
// // // //   profile: ProfileState;
// // // // }

// // // // interface User {
// // // //   name: string;
// // // //   email: string;
// // // //   avatar: string;
// // // //   isAdmin: boolean;
// // // //   token: string;
// // // // }

// // // // export interface Profile {
// // // //   _id: string;
// // // //   user: string; // Using the ObjectId as a string
// // // //   school: string;
// // // //   status: string;
// // // //   name: string;
// // // //   bio?: string;
// // // //   email: string;
// // // //   avatar: string;
// // // // }

// // // // // Destructure props
// // // // const Dashboard: React.FC<IProps> = ({
// // // //   getCurrentProfile,
// // // //   auth: { user },
// // // //   profile: { profile, loading },
// // // // }) => {
// // // //   useEffect(() => {
// // // //     getCurrentProfile();
// // // //   }, [getCurrentProfile]);

// // // //   return loading && profile === null ? (
// // // //     <Spinner />
// // // //   ) : (
// // // //     <Fragment>
// // // //       <h1 className="large text-primary" style={{ marginTop: '80px' }}>
// // // //         Setup
// // // //       </h1>
// // // //       <p className="lead">
// // // //         <i className="fas fa-user"></i> Welcome {user && user.name}
// // // //       </p>
// // // //       {user && user.isAdmin && (
// // // //         <Fragment>
// // // //           <SetupActions />
// // // //         </Fragment>
// // // //       )}
// // // //     </Fragment>
// // // //   );
// // // // };

// // // // // mapStateToProps to select the needed portion of the state
// // // // const mapStateToProps = (state: RootState) => ({
// // // //   auth: state.auth,
// // // //   profile: state.profile,
// // // // });

// // // // // Wrap connect around mapStateToProps and the action. Then component name
// // // // export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);



// // // // // import React, { Fragment, useEffect } from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import PropTypes from 'prop-types';
// // // // // import { connect } from 'react-redux';
// // // // // import Spinner from '../layout/Spinner.js';
// // // // // import SetupActions from './SetupActions.js';
// // // // // import { getCurrentProfile } from '../../actions/profile.js';
// // // // // import { AuthState } from '../../reducers/types/Auth.js';
// // // // // import { ProfileState } from '../../reducers/profile.js';
// // // // // import { RootState } from '../../reducers/index.js';


// // // // // interface IProps {
// // // // //   getCurrentProfile: () => void
// // // // //   auth: AuthState
// // // // //   profile: ProfileState
// // // // // }

// // // // // interface User {
// // // // //   name: string;
// // // // //   email: string;
// // // // //   avatar: string;
// // // // //   isAdmin: boolean;
// // // // //   token: string;
// // // // // }

// // // // // export interface Profile { 
// // // // //   _id: string
// // // // //   user: string; // Using the ObjectId as a string
// // // // //   school: string;
// // // // //   status: string;
// // // // //   name: string;
// // // // //   bio?: string
// // // // //   email: string;
// // // // //   avatar: string
// // // // // }

// // // // // // Destructure props
// // // // // const Dashboard: React.FC<IProps> = ({
// // // // //   getCurrentProfile,
// // // // //   auth: { user: User },
// // // // //   profile: { profile, loading },
// // // // // }) => {
// // // // //   // console.log('in dashboard')

// // // // //   // useEffect, call the action to run once
// // // // //   useEffect(() => {
// // // // //     getCurrentProfile();
// // // // //   }, []);

// // // // //   return loading && profile === null ? (
// // // // //     <Spinner />
// // // // //   ) : (
// // // // //     <Fragment>
// // // // //       <h1 className="large text-primary" style={{ marginTop: '80px' }}>
// // // // //         Setup
// // // // //       </h1>
// // // // //       <p className="lead">
// // // // //         <i className="fas fa-user"></i>
// // // // //         Welcome {user && user.name}
// // // // //       </p>
// // // // //       {user.isAdmin && (
// // // // //         <Fragment>
// // // // //           <SetupActions />
// // // // //         </Fragment>
// // // // //       )}
// // // // //     </Fragment>
// // // // //   );
// // // // // };

// // // // // // getCurrentProfile: a function to retrieve the profile: an action
// // // // // // auth: auth is needed for authentication
// // // // // // profile: it is needed. An object holding the profile
// // // // // // Dashboard.propTypes = {
// // // // // //   getCurrentProfile: PropTypes.func.isRequired,
// // // // // //   auth: PropTypes.object.isRequired,
// // // // // //   profile: PropTypes.object.isRequired,
// // // // // // };

// // // // // // mapStateToProps to select the needed portion of the state
// // // // // const mapStateToProps = (state: RootState) => ({
// // // // //   auth: state.auth,
// // // // //   profile: state.profile,
// // // // // });

// // // // // // Wrap connect around mapStateToProps and the action. Then component name
// // // // // export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

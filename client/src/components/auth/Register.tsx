import React, { Dispatch, useState } from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth.ts';
import { RootState } from '../../reducers/types';


type FormData = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

// Define props coming from Redux actions
const mapDispatch = {
  setAlert,
  register,
};

// Define the connected props type
const connector = connect(null, mapDispatch);

//   setAlert: (msg: string, alertType: string, timeout?: number) => void;
//   register: (formData: FormData) => Promise<void>;
//   isAuthenticated: boolean | null;
// };

type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux & {
  isAuthenticated: boolean | null;
};

const Register: React.FC<IProps> = ({ setAlert, register, isAuthenticated }) => {
  const navigate = useNavigate() // Import useNavigate from 'react-router-dom'

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      await register(formData)
      //return <Navigate to="/dashboard" />; // Redirect after successful registration
      navigate('/dashboard'); // Redirect after successful registration
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container" style={{ textAlign: 'center' }}>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use an email
            with a photo.
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// const mapDispatchToProps = {
//   setAlert,
//   register,
// };

export default connect(mapStateToProps)(Register);
//export default connector(Register);







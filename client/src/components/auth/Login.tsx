import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { RootState } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AuthState } from '../../reducers/auth';

interface IState {
  email: string;
  password: string;
}

interface IProps {
  isAuthenticated: AuthState
}

const Login: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth);

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [authenticated, setAuthenticated] = useState(false)

  const [formData, setFormData] = useState<IState>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(login(email, password));

    setAuthenticated(isAuthenticated);

    const userId = localStorage.getItem('id')

    if (userId) {
      setAuthenticated(isAuthenticated);
    }
  };

  if (authenticated) {
    return <Navigate to="/dashboard" />;
  } 

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength={6}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;






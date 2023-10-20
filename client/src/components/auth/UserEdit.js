import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../actions/auth.js';
import { setAlert } from '../../actions/alert.js';

export default function UserEdit() {
  console.log('in UserEdit');

  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, isAdmin);
    dispatch(updateUser({ email, isAdmin }));
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <br />
        <br />
        <br />
        <div>
          <h1>Edit User</h1>
        </div>
        <div>
          <div>
            <label style={{ margin: '10px' }} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ margin: '10px' }} htmlFor="isAdmin">
              Set Admin
            </label>

            <input
              id="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
              style={{ display: 'flex', alignItems: 'center' }}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Update Admin Status
          </button>
        </div>
      </form>
    </div>
  );
}

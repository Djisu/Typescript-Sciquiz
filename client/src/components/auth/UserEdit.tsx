import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { USER_UPDATE_REQUEST } from '../../actions/types';
import { User } from '../../actions/action-types/user';
import { updateUser } from '../../actions/auth.ts';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../reducers';

const UserEdit: React.FC = () => {
  console.log('in UserEdit');

  const [email, setEmail] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(storedIsAdmin);
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, isAdmin);

    const userData = {
      email,
      isAdmin,
    };

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
};

export default UserEdit
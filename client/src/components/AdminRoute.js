import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route,  Routes, Navigate } from 'react-router-dom';

function AdminRoute({ component: Component, ...rest }) {
 const userInfo = localStorage.getItem("name")
 const isAdmin = localStorage.getItem('isAdmin');

 console.log('Component:', Component);
 console.log('isAdmin:', isAdmin);

  return (
    <Routes>
      <Route>
        ...rest render=
        {(props) => isAdmin ? (
            <Component {...props}></Component>
          ) : (
            // <Redirect to="/signin" />
            //  <Route path="/" element={<Navigate to="/signin" />} />
            <Navigate to="/signin" />
          )
        }
      </Route>
    </Routes>
  );
}

export default AdminRoute;

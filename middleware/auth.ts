import express, { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from 'config';

import { AuthRequest, IUser } from '../types.js';

const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if there's a token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.get('jwtSecret')) as JwtPayload;

    // Set the user object in the request
    req.user = decoded.user as IUser;

    // Call the next middleware
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default auth;

// import express, { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import config from 'config';

// import { AuthRequest, IUser } from '../types'

// const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
//    //console.log('in auth middleware')

//   // Get the token from the request header
//   const token = req.header('Authorization');

//   //console.log('token: ', token)


//   // Check if there's a token
//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, config.get('jwtSecret'));

//     // Set the user object in the request
//     req.user = decoded.user  as IUser;
    

//     // Call the next middleware
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };
// export default auth;


// // import jwt from 'jsonwebtoken';
// // import config from 'config';

// // export const auth = (req, res, next) => {
// //   console.log('in auth middleware req: ')

// //   const authHeader = req.header('Authorization');

// //   console.log("authHeader: ", authHeader)

// //   if (!authHeader || authHeader === undefined) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   const token = authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : null;

// //   if (!token) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, config.get('jwtSecret'));
// //     req.user = decoded.user;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token is not valid' });
// //   }
// // };

// // export default auth;





// // import jwt from 'jsonwebtoken'
// // import config from 'config'; //We will need the secret

// // export default function (req, res, next) {

// //   console.log('in auth middleware')
// //   // Get token from the header
// //   const token = req.header('x-auth-token')

// //   console.log('token found: ', token)

// //   // Check if no token
// //   if (!token) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' })
// //   }

// //   // if token then Verify token
// //   try {
// //     // Decode the token.
// //     const decoded = jwt.verify(token, config.get('jwtSecret'))

// //     // Set req object to decoded user
// //     req.user = decoded.user

// //     next()
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token is not valid' })
// //   }
// // }






// // import jwt from 'jsonwebtoken';
// // import config from 'config';

// // export const auth = (req, res, next) => {

// // console.log('in middleware auth')

// //   const authHeader = req.header('Authorization');

// //   if (!authHeader) {
// //     console.log('No token, authorization denied' )

// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7, authHeader.length) : null;

// //   if (!token) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, config.get('jwtSecret'));
// //     req.user = decoded.user;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token is not valid' });
// //   }
// // };

// // export default auth;








// // import jwt from 'jsonwebtoken';
// // import config from 'config';

// // export const auth = (req, res, next) => {
// //   const authHeader = req.header('Authorization');

// //   if (!authHeader) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   const token = authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : null;

// //   if (!token) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, config.get('jwtSecret'));
// //     req.user = decoded.user;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token is not valid' });
// //   }
// // };

// // export default auth;






// // export default function (req, res, next) {
// //   // Get token from the header
// //   const token = req.header('x-auth-token')

// //   console.log('token:: ', token)

// //   // Check if no token
// //   if (!token) {
// //     return res.status(401).json({ msg: 'No token, authorization denied' })
// //   }

// //   // if token then Verify token
// //   try {
// //     // Decode the token.
// //     const decoded = jwt.verify(token, config.get('jwtSecret'))

// //     // Set req object to decoded user
// //     req.user = decoded.user

// //     next()
// //   } catch (err) {
// //     res.status(401).json({ msg: 'Token is not valid' })
// //   }
// // }

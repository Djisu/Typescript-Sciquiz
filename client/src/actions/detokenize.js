import React from 'react'
import jwtDecode from 'jwt-decode';

function detokenize(token) {
 
//console.log("in detokenize")
 // Assuming you have the JWT token stored in a variable called 'token'
 const tokenx = token //'your_jwt_token_here';

 // Decode the token to extract user information
 const decodedToken = jwtDecode(tokenx);

 // Now, you can access the user information from the decodedToken object
 const userId = decodedToken.user.id;
 const userName = decodedToken.user.name;
 const userEmail = decodedToken.user.email;
 const isAdmin = decodedToken.user.isAdmin;

// console.log(userId, userName, userEmail, isAdmin);

 return [userId, userName, userEmail, isAdmin];
}

export default detokenize


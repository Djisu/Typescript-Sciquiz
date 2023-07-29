////import firebase from 'firebase/app';
//import { getStorage } from 'firebase/storage';
//
//import { initializeApp } from 'firebase/app';
//import firebaseConfig from './firebaseConfig'; // Replace this with your Firebase config
////import 'firebase/auth'; // Import additional modules if you need them (e.g., 'firebase/database', 'firebase/firestore', etc.)
//

// For Firebase version 8 and below
import firebase from 'firebase/app';
import 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional //, firebase as default
const firebaseConfig = {
  apiKey: 'AIzaSyDKZKMUyS-jZQUf1dGywQlj5W5Yqnk6FdQ',
  authDomain: 'fir-react-upload-aa945.firebaseapp.com',
  projectId: 'fir-react-upload-aa945',
  storageBucket: 'fir-react-upload-aa945.appspot.com',
  messagingSenderId: '308316262650',
  appId: '1:308316262650:web:cf353487aed7c72b007943',
  measurementId: 'G-S99V1FQSMG',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Access Firebase Storage module after initialization
//const storage = getStorage(app);
//
export default storage ;

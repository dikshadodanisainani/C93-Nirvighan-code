import firebase from 'firebase';
require ('@firebase/firestore')




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGTndFA_5bd7zxkJDSARbl_WIxkACDJjU",
    authDomain: "punctual-lifestyle.firebaseapp.com",
    databaseURL: "https://punctual-lifestyle.firebaseio.com",
    projectId: "punctual-lifestyle",
    storageBucket: "punctual-lifestyle.appspot.com",
    messagingSenderId: "535805708473",
    appId: "1:535805708473:web:5e02dbaba4208025cdb368"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
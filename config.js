import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAUGtOYj45YKcvqan5VXd5z1GhndzlsQSw",
    authDomain: "school-attendance-app-5744f.firebaseapp.com",
    databaseURL: "https://school-attendance-app-5744f-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-5744f",
    storageBucket: "school-attendance-app-5744f.appspot.com",
    messagingSenderId: "717953376929",
    appId: "1:717953376929:web:92b19569b1b3e33bb306e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
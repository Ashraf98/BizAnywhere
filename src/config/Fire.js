

import firebase from 'firebase';

const configFire = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDES0qrJKM6A1OLp53DDXk2EuAga5MU0WA",
    authDomain: "bestchoicebizanywhere.firebaseapp.com",
    databaseURL: "https://bestchoicebizanywhere.firebaseio.com",
    projectId: "bestchoicebizanywhere",
    storageBucket: "bestchoicebizanywhere.appspot.com",
    messagingSenderId: "16363341964",
    appId: "1:16363341964:web:329fd772e8e1f0a7b7d3a9",
    measurementId: "G-FXP6GH9R44"
};
const fire = firebase.initializeApp(configFire);
export default fire;
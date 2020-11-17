import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4FH1lnbrD7rsBWhxbUk17xmdE9X2fddk",
    authDomain: "clone-cff54.firebaseapp.com",
    databaseURL: "https://clone-cff54.firebaseio.com",
    projectId: "clone-cff54",
    storageBucket: "clone-cff54.appspot.com",
    messagingSenderId: "390606717101",
    appId: "1:390606717101:web:9799f6aec378747290c624",
    measurementId: "G-0LFE2EEZFE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
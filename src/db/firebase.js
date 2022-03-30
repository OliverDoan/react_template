import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT0vlvu8OBLJ3AajxxSN-5MupoGByW1e8",
  authDomain: "work-list-9f535.firebaseapp.com",
  databaseURL:
    "https://work-list-9f535-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "work-list-9f535",
  storageBucket: "work-list-9f535.appspot.com",
  messagingSenderId: "61881660558",
  appId: "1:61881660558:web:3909e9ef6fc1b0e4ae85df",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

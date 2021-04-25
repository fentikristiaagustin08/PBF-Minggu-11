import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe8Zl1ObbyFclvF6gQrd03R-IbJ0vvJyo",
    authDomain: "fir-react-2acb2.firebaseapp.com",
    projectId: "fir-react-2acb2",
    storageBucket: "fir-react-2acb2.appspot.com",
    messagingSenderId: "715391060119",
    appId: "1:715391060119:web:12a7529a50400b03c481d2",
    measurementId: "G-9MH562FGEH"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
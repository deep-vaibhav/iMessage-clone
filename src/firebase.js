import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWcCywMf61o9IF0JeyJaO7UXOdnJByv64",
  authDomain: "imessage-clone-6010d.firebaseapp.com",
  databaseURL: "https://imessage-clone-6010d.firebaseio.com",
  projectId: "imessage-clone-6010d",
  storageBucket: "imessage-clone-6010d.appspot.com",
  messagingSenderId: "813124575623",
  appId: "1:813124575623:web:e6276ef636c1af01d0b322",
  measurementId: "G-73TGJXT7BP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

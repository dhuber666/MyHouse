import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDpyNkFOclZ5u5_dJ6mLK5aGEwvF0K-c0Y",
  authDomain: "myhouse-55adb.firebaseapp.com",
  databaseURL: "https://myhouse-55adb.firebaseio.com",
  projectId: "myhouse-55adb",
  storageBucket: "",
  messagingSenderId: "479929567639"
};
firebase.initializeApp(config);

export default firebase;

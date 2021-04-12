import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3trBryz24q7GkXh5hbBHER2Y5FpE2McE",
  authDomain: "africa-young-scholars.firebaseapp.com",
  projectId: "africa-young-scholars",
  storageBucket: "africa-young-scholars.appspot.com",
  messagingSenderId: "834357430472",
  appId: "1:834357430472:web:73fae718b55bf7685abdfd",
  measurementId: "G-0LGTCL03ZP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

import firebase from "@firebase/app";
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSrviVQbqUcBfLYZJ4MbWAn_YqYqlERbo",
  authDomain: "boardgameseek.firebaseapp.com",
  databaseURL: "https://boardgameseek-default-rtdb.firebaseio.com",
  projectId: "boardgameseek",
  storageBucket: "boardgameseek.appspot.com",
  messagingSenderId: "658114409780",
  appId: "1:658114409780:web:b55cde90c339d690062161"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

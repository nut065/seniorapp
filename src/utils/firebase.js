//import firebase from 'firebase';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAIFrBFQNBwh-sH8BF4cKQKWaDgINmQw3o",
  authDomain: "senior-project-5361e.firebaseapp.com",
  databaseURL: "https://senior-project-5361e-default-rtdb.firebaseio.com",
  projectId: "senior-project-5361e",
  storageBucket: "senior-project-5361e.appspot.com",
  messagingSenderId: "910373566922",
  appId: "1:910373566922:web:453babd4a83750e73e3733",
  measurementId: "G-JTKRWMJNXD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDU8OjI3WOh_umJdLAAlnk5kuKO8CK7uA",
    authDomain: "galerie-51f05.firebaseapp.com",
    projectId: "galerie-51f05",
    storageBucket: "galerie-51f05.appspot.com",
    messagingSenderId: "1080840899387",
    appId: "1:1080840899387:web:37aa72d88af98bd4a3c51e"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };
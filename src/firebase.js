import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD8IwI4m9faPn1hmpvjli5G_SgY4KhE11A",
  authDomain: "ewastehub-7444a.firebaseapp.com",
  databaseURL: "https://ewastehub-7444a-default-rtdb.firebaseio.com",
  projectId: "ewastehub-7444a",
  storageBucket: "ewastehub-7444a.appspot.com",
  messagingSenderId: "178562777158",
  appId: "1:178562777158:web:964ac98524cda0c5d64a47",
  measurementId: "G-M0QRYPPTG6"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();   
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const analytics = firebase.analytics();
  
 
  export{auth, provider, storage , analytics};  
  export default db;
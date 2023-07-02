import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDii9JcM2-zjW-6gAGx6VeLoH1WNWJZMWg",
    authDomain: "reno-project-fa61b.firebaseapp.com",
    projectId: "reno-project-fa61b",
    storageBucket: "reno-project-fa61b.appspot.com",
    messagingSenderId: "1022375214581",
    appId: "1:1022375214581:web:a84a282a1cf6473d0334bc",
    measurementId: "G-T3QE62WWBH"
    // apiKey: "AIzaSyBGGjXkPejbQlBl_V-mnGXNOKUWnXqMh0s",
    // authDomain: "reno-tech.firebaseapp.com",
    // projectId: "reno-tech",
    // storageBucket: "reno-tech.appspot.com",
    // messagingSenderId: "542770781700",
    // appId: "1:542770781700:web:771429b87cf03979375f51",
    // measurementId: "G-JCYDJ0Y07W"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();   
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
 
  export{auth, provider, storage};  
  export default db;
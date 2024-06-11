import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe9AbtMJZ4E6556Vu0Z_YHMHx3iUcaZl8",
  authDomain: "blog-app-8eac6.firebaseapp.com",
  projectId: "blog-app-8eac6",
  storageBucket: "blog-app-8eac6.appspot.com",
  messagingSenderId: "202910868835",
  appId: "1:202910868835:web:c5b67d7756dd573438df56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };

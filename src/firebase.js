import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVrfeFny_v0vjCo9VfVmV5HScsWmkxbaY",
  authDomain: "manit-student-auth.firebaseapp.com",
  projectId: "manit-student-auth",
  storageBucket: "manit-student-auth.appspot.com",
  messagingSenderId: "599422698365",
  appId: "1:599422698365:web:0908a510c13468be83c214",
  measurementId: "G-NCKRJCNWKD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

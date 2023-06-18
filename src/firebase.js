import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJwsHr4BwrZzyV0F5S3ziO7c0p588GO5o",
  authDomain: "dashboard-c3a70.firebaseapp.com",
  projectId: "dashboard-c3a70",
  storageBucket: "dashboard-c3a70.appspot.com",
  messagingSenderId: "871153463148",
  appId: "1:871153463148:web:9bbd2ce95c16e56d8a0d49",
  measurementId: "G-2SWG7PZ91J",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyAFwPeTuSInxxv96ZbCY67zQFiuQhl9ZR8",
  authDomain: "movies-6a81b.firebaseapp.com",
  projectId: "movies-6a81b",
  storageBucket: "movies-6a81b.appspot.com",
  messagingSenderId: "650660108514",
  appId: "1:650660108514:web:360076596853acb1af26bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)
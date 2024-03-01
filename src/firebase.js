import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD9wjWIlEIhtdjG1CNimHgzkf-a_2syAo",
  authDomain: "payper-8a2f9.firebaseapp.com",
  projectId: "payper-8a2f9",
  storageBucket: "payper-8a2f9.appspot.com",
  messagingSenderId: "817209135798",
  appId: "1:817209135798:web:466d51365c5d6b1bed4c17",
  measurementId: "G-07WHPBKNPV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();

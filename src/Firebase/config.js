import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtGa5HGmRaWvzfILPYyNK_jCMXsgCi3pk",
  authDomain: "resume-react-fc6f4.firebaseapp.com",
  projectId: "resume-react-fc6f4",
  storageBucket: "resume-react-fc6f4.appspot.com",
  messagingSenderId: "170128741142",
  appId: "1:170128741142:web:9eca48cbca0fe76a003637",
  measurementId: "G-T613D57NV8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };

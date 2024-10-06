// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDDC_72p6Mwxq0xAOqY8P47N-eaEgr7o2w",
  authDomain: "practical-exam-fb6ab.firebaseapp.com",
  projectId: "practical-exam-fb6ab",
  storageBucket: "practical-exam-fb6ab.appspot.com",
  messagingSenderId: "386697441023",
  appId: "1:386697441023:web:49cf295b5179c2baf426ca",
  measurementId: "G-R4TVG8XC3N"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default(auth);









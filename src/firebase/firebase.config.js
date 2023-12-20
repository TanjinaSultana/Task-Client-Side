// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCecPmEapeBgakHeRwN8_xERG061r-s8b0",
  authDomain: "task-client-side.firebaseapp.com",
  projectId: "task-client-side",
  storageBucket: "task-client-side.appspot.com",
  messagingSenderId: "234808016452",
  appId: "1:234808016452:web:bec4fbbff9f5da6ff38611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
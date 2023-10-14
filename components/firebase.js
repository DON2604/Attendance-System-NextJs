// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO0215ow0sbXKCPDgdsmfnL6BpuiPDR4U",
  authDomain: "attendance-sys-2bb94.firebaseapp.com",
  projectId: "attendance-sys-2bb94",
  storageBucket: "attendance-sys-2bb94.appspot.com",
  messagingSenderId: "815631501175",
  appId: "1:815631501175:web:360c54c7c404c4bcc5c372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
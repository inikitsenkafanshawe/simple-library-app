import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARc40aqTHp_j7Zy4ErJZSperjHDCjLU68",
  authDomain: "simplelibrary-309d8.firebaseapp.com",
  projectId: "simplelibrary-309d8",
  storageBucket: "simplelibrary-309d8.firebasestorage.app",
  messagingSenderId: "983243794400",
  appId: "1:983243794400:web:9e9ad0f07f28042f5f2d85",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

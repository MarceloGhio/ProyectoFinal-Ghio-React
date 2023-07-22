
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//"AIzaSyCv9cwmhf4jz1yVkst58tBcMRf_lq47kRU"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactf-314ea.firebaseapp.com",
  projectId: "reactf-314ea",
  storageBucket: "reactf-314ea.appspot.com",
  messagingSenderId: "625117758592",
  appId: "1:625117758592:web:7b4f1cb80ee48c0cf75265"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
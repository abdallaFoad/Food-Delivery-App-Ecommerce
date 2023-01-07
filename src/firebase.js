import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpU5KLR5RL8inLedoIFGuCvsubzSgcEk8",
  authDomain: "authdelivery-8dbea.firebaseapp.com",
  projectId: "authdelivery-8dbea",
  storageBucket: "authdelivery-8dbea.appspot.com",
  messagingSenderId: "852201659223",
  appId: "1:852201659223:web:555d8a9b4cc588a845bc12",
  measurementId: "G-1MT89PT42C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
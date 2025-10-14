// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFGd7OGNuAvt9HazsdcLsWyS4mbfz9n5c",
  authDomain: "iprkaro-729d3.firebaseapp.com",
  projectId: "iprkaro-729d3",
  storageBucket: "iprkaro-729d3.firebasestorage.app",
  messagingSenderId: "165087210161",
  appId: "1:165087210161:web:65171994c2da9bd4e39090",
  measurementId: "G-V5E1ZSWW1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
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

// Lazy-load Analytics - defers ~142 KiB gtag download until after page load
let analytics;
if (typeof window !== 'undefined') {
  // Wait for page to finish loading before initializing analytics
  const initAnalytics = () => {
    // Delay Firebase analytics by 2.5s to give room for LCP and hydration
    setTimeout(() => {
      import('firebase/analytics').then(({ getAnalytics }) => {
        analytics = getAnalytics(app);
      });
    }, 2500);
  };
  if (document.readyState === 'complete') {
    initAnalytics();
  } else {
    window.addEventListener('load', initAnalytics, { once: true });
  }
}

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };
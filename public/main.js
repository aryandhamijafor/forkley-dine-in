// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtG7b1-J54XnBMmhOIP4lWLVWwZ1jzdkQ",
  authDomain: "forkley-dine-in.firebaseapp.com",
  projectId: "forkley-dine-in",
  storageBucket: "forkley-dine-in.firebasestorage.app",
  messagingSenderId: "819630639665",
  appId: "1:819630639665:web:122e18112e992502cf631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
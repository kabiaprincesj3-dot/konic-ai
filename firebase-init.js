// KONIC AI - Centralized Firebase Initializer
// Links frontend views and admin workflows to your Firebase project

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUI7u3f9P2qSHsqxjfYd5Tic33BFJ9lsg",
  authDomain: "konic-ai-8676b.firebaseapp.com",
  projectId: "konic-ai-8676b",
  storageBucket: "konic-ai-8676b.firebasestorage.app",
  messagingSenderId: "586387423181",
  appId: "1:586387423181:web:a86347c77aac236d5c0e84",
  measurementId: "G-NXG8RDLDPZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

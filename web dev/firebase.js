import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDV6qGPjyTw90T5UvAdgX9S4couwdCyyCQ",
  authDomain: "web-dev-213.firebaseapp.com",
  projectId: "web-dev-213",
  storageBucket: "web-dev-213.firebasestorage.app",
  messagingSenderId: "236091464076",
  appId: "1:236091464076:web:f33013d3f289e5a7db9ea9",
  measurementId: "G-RMQD62DBTH"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
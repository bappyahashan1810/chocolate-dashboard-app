// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoMqSLUK3WwQQr632GRB5Anqs_-PWfLyY",
    authDomain: "chocolate-dashboard-app.firebaseapp.com",
    projectId: "chocolate-dashboard-app",
    storageBucket: "chocolate-dashboard-app.appspot.com",
    messagingSenderId: "477514877311",
    appId: "1:477514877311:web:3a2a1376647706828c724a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
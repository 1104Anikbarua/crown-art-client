// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtrwc_hxqD-zlCwR-KQcSDm2ekftG_67Y",
    authDomain: "crown-art.firebaseapp.com",
    projectId: "crown-art",
    storageBucket: "crown-art.appspot.com",
    messagingSenderId: "1005877729180",
    appId: "1:1005877729180:web:fe6f5f74c87e5424309a59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
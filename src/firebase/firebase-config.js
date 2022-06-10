// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEDUg550xCewZq7Om4hoTjdm9eOJHYQyM",
    authDomain: "ziya-invites-e8086.firebaseapp.com",
    databaseURL: "https://ziya-invites-e8086-default-rtdb.firebaseio.com",
    projectId: "ziya-invites-e8086",
    storageBucket: "ziya-invites-e8086.appspot.com",
    messagingSenderId: "1033710184554",
    appId: "1:1033710184554:web:a9bb8253cba3b358294213",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export {db, storage};

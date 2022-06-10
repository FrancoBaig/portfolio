import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhxrBJqeqo1rH6tGS6OEWcq2Eh5KXqzOY",
    authDomain: "portfolio-89b38.firebaseapp.com",
    projectId: "portfolio-89b38",
    storageBucket: "portfolio-89b38.appspot.com",
    messagingSenderId: "204525013010",
    appId: "1:204525013010:web:1ae7b4e98d1de16a2bf0cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

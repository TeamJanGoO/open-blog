import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDpEP73G5nJEjCTth7mt5JYQ9Wp-MSCG4g",
    authDomain: "open-blog-e5366.firebaseapp.com",
    projectId: "open-blog-e5366",
    storageBucket: "open-blog-e5366.appspot.com",
    messagingSenderId: "29686819224",
    appId: "1:29686819224:web:2ef41c5392b816ca6623ed"
}

const app = initializeApp(firebaseConfig)

console.log(app)
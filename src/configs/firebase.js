import firebase from "firebase/app";
import "firebase/firestore";

const configFirebase = firebase.initializeApp({
    apiKey: "AIzaSyBu8_9t2PG34IshEadUtj6ksyU_kxEyUmg",
    authDomain: "juliandenaro-391d8.firebaseapp.com",
    projectId: "juliandenaro-391d8",
    storageBucket: "juliandenaro-391d8.appspot.com",
    messagingSenderId: "672521518226",
    appId: "1:672521518226:web:ef092a9365e8db75d63a4b"
});

export function getFirebase() {
    return configFirebase;
}

export function getFirestore() {
    return firebase.firestore(configFirebase);
}
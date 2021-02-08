import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyAmFOlsxAbYz0eYFCDII2H9clKgapTTryk",
    authDomain: "chat-mess-22f19.firebaseapp.com",
    projectId: "chat-mess-22f19",
    storageBucket: "chat-mess-22f19.appspot.com",
    messagingSenderId: "1010965043835",
    appId: "1:1010965043835:web:06fb2d00c55fe6c89920de",
    measurementId: "G-H002KH59SK"
});

const db = firebase.firestore();

export default db;
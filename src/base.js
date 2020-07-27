import * as firebase from "firebase/app";
import "firebase/auth";

// Файербэйс используется только для проверки логина

const app = firebase.initializeApp({
    apiKey: "AIzaSyDaBwlQoCR_OkjIE6KzRZqWX1VzeB6EgFI",
    authDomain: "test-task-auth-app.firebaseapp.com",
    databaseURL: "https://test-task-auth-app.firebaseio.com",
    projectId: "test-task-auth-app",
    storageBucket: "test-task-auth-app.appspot.com",
    messagingSenderId: "1059483287712",
});

export default app;
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // Config firebase data
  apiKey: "AIzaSyAqX-FvvvC0YUy7xDvXAPcW2ujBg48EhcQ",
  authDomain: "clone-app-e703f.firebaseapp.com",
  projectId: "clone-app-e703f",
  storageBucket: "clone-app-e703f.appspot.com",
  messagingSenderId: "1039744766440",
  appId: "1:1039744766440:web:80c449fbfd1cefd4dd945d",
  measurementId: "G-ZH2K8FD1CS",
});

const auth = firebase.auth();

export { auth };

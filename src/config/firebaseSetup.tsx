import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuEOd97va3QH9aADERkQHNepPzyk1gYfo",
  authDomain: "sentimentanalysis-2644f.firebaseapp.com",
  projectId: "sentimentanalysis-2644f",
  storageBucket: "sentimentanalysis-2644f.appspot.com",
  messagingSenderId: "592616500971",
  appId: "1:592616500971:web:a861e16ecfb0e4edfd98ae",
  measurementId: "G-VTL49QXQY8",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

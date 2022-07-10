import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANFs8U-dde3ItFcbr2Vv6_4lv0tvsxd38",
  authDomain: "mydoctor-90519.firebaseapp.com",
  databaseURL:
    "https://mydoctor-90519-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mydoctor-90519",
  storageBucket: "mydoctor-90519.appspot.com",
  messagingSenderId: "840384383607",
  appId: "1:840384383607:web:9ad3110fa72e1567ac1472",
  measurementId: "G-PVLE0Z4JEN",
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBHbeiWxQsFGxNGjQ8FG3spjgjjlX8gvWU",
  authDomain: "dokter-c5c5b.firebaseapp.com",
  projectId: "dokter-c5c5b",
  storageBucket: "dokter-c5c5b.appspot.com",
  messagingSenderId: "39872919540",
  appId: "1:39872919540:web:b3340b1e3633e8a4942ba1",
  measurementId: "G-TYD20W6Q2W",
  databaseURL:
    "https://dokter-c5c5b-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;

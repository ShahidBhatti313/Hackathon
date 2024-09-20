// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCutTJGFhZSa_5Xd4jEDFMC1z4_MBoksmw",
  authDomain: "hackathon-81eb6.firebaseapp.com",
  projectId: "hackathon-81eb6",
  storageBucket: "hackathon-81eb6.appspot.com",
  messagingSenderId: "931584461869",
  appId: "1:931584461869:web:2fa7247be4a4425c0c3ca4",
  measurementId: "G-W4GHVJR91G",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cnic = document.getElementById("cnic");
let userType = document.getElementById("userType");

window.AddStudent = () => {
  let obj = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    password: password.value,
    cnic: cnic.value,
    userType: userType.value,
  };
  console.log(obj);

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      console.log(res);
      obj.id = res.user.uid;
      delete obj.password;
      const reference = doc(db, "Users", obj.id);
      setDoc(reference, obj)
        .then(() => {
          console.log(obj);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });

  const reference = collection(db, "students");
  addDoc(reference, obj)
    .then((res) => {
      console.log("Saved Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

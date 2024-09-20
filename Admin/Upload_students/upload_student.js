// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutTJGFhZSa_5Xd4jEDFMC1z4_MBoksmw",
  authDomain: "hackathon-81eb6.firebaseapp.com",
  projectId: "hackathon-81eb6",
  storageBucket: "hackathon-81eb6.appspot.com",
  messagingSenderId: "931584461869",
  appId: "1:931584461869:web:2fa7247be4a4425c0c3ca4",
  measurementId: "G-W4GHVJR91G",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let course = document.getElementById("course");
let studentId = document.getElementById("studentId");
let marks = document.getElementById("marks");
let totalMarks = document.getElementById("totalMarks");
let grade = document.getElementById("grade");

window.UploadStudent = () => {
  let obj = {
    course: course.value,
    studentId: studentId.value,
    marks: marks.value,
    totalMarks: totalMarks.value,
    grade: grade.value,
  };
  console.log(obj);

  const reference = collection(db, "admin");
  addDoc(reference, obj)
    .then(() => {
      console.log("successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

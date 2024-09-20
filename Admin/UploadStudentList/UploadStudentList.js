// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  getDocs,
  collection,
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

const table__Body = document.getElementById("table__Body");

const studentMarks = [];

const renderTables = () => {
  table__Body.innerHTML = "";
  studentMarks.forEach((x) => {
    table__Body.innerHTML += `
        <tr class="bg-white border-b hover:bg-gray-100 transition-all">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${x.course}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.studentId}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.marks}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.totalMarks}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.grade}</td>
</tr>
        `;
  });
};

const getMarks = async () => {
  const reference = collection(db, "admin");
  const dt = await getDocs(reference);

  dt.forEach((doc) => {
    studentMarks.push({
      ...doc.data(),
    });
  });
  console.log(studentMarks);
  renderTables();
};
getMarks();

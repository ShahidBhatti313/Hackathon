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

const tableBody = document.getElementById("tableBody");

const studentData = [];

const renderTable = () => {
  tableBody.innerHTML = "";
  studentData.forEach((x) => {
    tableBody.innerHTML += `
        <tr class="bg-gray-100 border-b hover:bg-gray-200 transition duration-200 ease-in-out">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">${x.first_name}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.last_name}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.email}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.password}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.cnic}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.userType}</td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button onclick="editStudent('${x.id}')"
            class="text-blue-600 hover:text-blue-900 bg-blue-200 py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
            Edit
        </button>
        <button onclick="deleteStudent(${x.id})"
            class="ml-2 text-red-600 hover:text-red-900 bg-red-200 py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
            Delete
        </button>
    </td>
</tr>
        `;
  });
};
const editStudent = (id) => {
  localStorage.setItem("editStudentId", id);

  window.location.href = "../../Student/student_edit.html";
};

const getData = async () => {
  const reference = collection(db, "students");
  const dt = await getDocs(reference);

  dt.forEach((doc) => {
    studentData.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(studentData);
  renderTable();
};
getData();

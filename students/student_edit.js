  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getFirestore,collection,addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
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
    measurementId: "G-W4GHVJR91G"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  
  let first_name_edit = document.getElementById("first_name_edit");
  let last_name_edit = document.getElementById("last_name_edit");
  let cnic_edit = document.getElementById("cnic_edit");
  
  window.studentEdit = async () => {
      try {
          let updatedData = {
              first_name: first_name_edit.value,
              last_name: last_name_edit.value,
              cnic: cnic_edit.value,
          };
  
          const docRef = await addDoc(collection(db, "students"), updatedData);
          console.log("Student profile added with ID: ", docRef.id);
          alert("Profile updated successfully!");
  
          window.location.href = "../Admin/studentList/studentList.html";
      } catch (error) {
          console.error("Error updating student data: ", error);
          alert("Failed to update profile!");
      }
  };
  
  window.onload = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      querySnapshot.forEach((doc) => {
          const studentData = doc.data();
          first_name_edit.value = studentData.first_name;
          last_name_edit.value = studentData.last_name;
          cnic_edit.value = studentData.cnic;
      });
  };
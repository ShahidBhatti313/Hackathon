  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore,doc,getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
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

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

window.signin = () => {
    let obj = {
        email: email.value,
        password: password.value,
    }
    console.log(obj);

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(async (res) => {
            let id = res.user.uid;
            const reference = doc(db, 'Users', id)

            const user = await getDoc(reference)
            if (user.exists()) {
                console.log(user.data());
            }
        })
        .catch((err) => {
            console.log(err);
        })

}
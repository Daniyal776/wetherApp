  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBwcRYqVdd-nSv4zJH-4YyWj-F-aRbQIR4",
    authDomain: "blog-app-59e38.firebaseapp.com",
    projectId: "blog-app-59e38",
    storageBucket: "blog-app-59e38.appspot.com",
    messagingSenderId: "136105825826",
    appId: "1:136105825826:web:e1d534b33da82b105bdc7b",
    measurementId: "G-T08GMM3BFD"
    
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
console.log(app)
console.log(auth)


  const registerform=document.getElementById('register-form')

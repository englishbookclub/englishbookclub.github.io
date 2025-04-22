// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVBh7ZLxe8dDSTmGf7nnk_tyncLCaW0CU",
  authDomain: "englishbookclub-a6fb7.firebaseapp.com",
  projectId: "englishbookclub-a6fb7",
  storageBucket: "englishbookclub-a6fb7.firebasestorage.app",
  messagingSenderId: "768980120912",
  appId: "1:768980120912:web:e18e34ba1c8b9014a9e855",
  measurementId: "G-5FX85XZ1BB"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log("User logged in:", res.user);
      const userName = res.user.email.split('@')[0];
      location.href = 'index.html';

      //LocalStorage
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('userName', userName);
    })
    .catch((err) => {
      alert("Greška: " + err.message);
      console.error(err.code, err.message);
    });
}

// Register Function
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log("User registered:", res.user);
      alert("Registracija uspješna!");
      location.href = 'index.html';
    })
    .catch((err) => {
      alert("Greška: " + err.message);
      console.error(err.code, err.message);
    });
}





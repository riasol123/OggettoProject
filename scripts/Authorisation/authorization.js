
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAsTpy0hlOYuLNy8v8Pdd-yVUTJOkfgdeQ",
      authDomain: "oggetto-test.firebaseapp.com",
      databaseURL: "https://oggetto-test-default-rtdb.firebaseio.com",
      projectId: "oggetto-test",
      storageBucket: "oggetto-test.appspot.com",
      messagingSenderId: "385710351413",
      appId: "1:385710351413:web:bd67cb22fe155c6f05fd7c"
    };
  
    alert(123)

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    const user = auth.currentUser;
    let toLogin=document.getElementById('toLogin')

//     signup.addEventListener('click', (e) => {

//       var email = document.getElementById('login').value;
//       var password = document.getElementById('password').value;

//       createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
    
//     set(ref(database, 'users/' + user.uid), {
//       password: password,
//       email: email
//     })
//     alert('user created');
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//     })

    
    toLogin.addEventListener('click', (e) => {

      var email = document.getElementById('login').value;
      var password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const dt = new Date();

    update(ref(database, 'users/' + user.uid), {
      last_login: dt
    })
    alert('User loged in');

      window.location.href = "TestList.html";
  })

    })

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyApj3geTk0886REutxJz-fb0X74pPhxOxA",
      authDomain: "class-41fd0.firebaseapp.com",
      databaseURL: "https://class-41fd0-default-rtdb.firebaseio.com",
      projectId: "class-41fd0",
      storageBucket: "class-41fd0.appspot.com",
      messagingSenderId: "701998147567",
      appId: "1:701998147567:web:26c1b017e318c89188f81a",
      measurementId: "G-81Z6BLNW17"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

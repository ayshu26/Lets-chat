const firebaseConfig = {
    apiKey: "AIzaSyCQY-8zWR8Vdq2zB49hfAROUg_VBRKlEQ8",
    authDomain: "kwitter-a2f49.firebaseapp.com",
    databaseURL: "https://kwitter-a2f49-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2f49",
    storageBucket: "kwitter-a2f49.appspot.com",
    messagingSenderId: "371060895632",
    appId: "1:371060895632:web:aed56326e4adfbe7e48d15",
    measurementId: "G-22K3VN43PY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'>#" + Room_names + "</div><hr>"

                document.getElementById("output").innerHTML += row
                //End code
          });
    });
}
getData();

username = localStorage.getItem("username")
document.getElementById("username").innerHTML = "Welcome " + username + " !!"
 function logout(){
    localStorage.removeItem("username")
    window.location="index.html"
 }
  function redirectToRoom(name){
    localStorage.setItem("roomname",name)
    window.location="kwitterpage.html"
 }
 function addRoom(){
    roomname = document.getElementById("roomName").value
    firebase.database().ref("/").child(roomname).update({
        purpose: "adding new room"

 })
 localStorage.setItem("roomname",roomname)
 window.location = "database.html"
}

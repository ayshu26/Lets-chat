//YOUR FIREBASE LINKS
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
roomname = localStorage.getItem("roomname")
username = localStorage.getItem("username")
function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}

getData();
function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location = "index.html"
}

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(roomname).push({
            name: username, message: msg, like: 0
      })
      document.getElementById("msg").value = ""
}
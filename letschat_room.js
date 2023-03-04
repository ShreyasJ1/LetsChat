
var firebaseConfig = {
      apiKey: "AIzaSyDvmTLV6pZo9weV1GuK7F9QW4R2Xmk8WIU",
      authDomain: "kwitter-60997.firebaseapp.com",
      databaseURL: "https://kwitter-60997-default-rtdb.firebaseio.com",
      projectId: "kwitter-60997",
      storageBucket: "kwitter-60997.appspot.com",
      messagingSenderId: "706859354583",
      appId: "1:706859354583:web:9f9cc89593ec14ce4ae392",
      measurementId: "G-5MZKSVF4TD"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "letschat_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

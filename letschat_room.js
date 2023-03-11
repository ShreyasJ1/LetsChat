var firebaseConfig = {
      apiKey: "AIzaSyDN_bs-SZnnRjg-xWTQDW95Ni75U1-e5QM",
      authDomain: "letschat-5bce1.firebaseapp.com",
      databaseURL: "https://letschat-5bce1-default-rtdb.firebaseio.com",
      projectId: "letschat-5bce1",
      storageBucket: "letschat-5bce1.appspot.com",
      messagingSenderId: "1048408156663",
      appId: "1:1048408156663:web:f0ae5d4575add3876a26f2",
      measurementId: "G-YTKCHTLVP4"
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

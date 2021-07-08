
var firebaseConfig = {
      apiKey: "AIzaSyCDPiqHoYujmco2jXovHG1vUUmAdEySadA",
      authDomain: "kwitter-3c88f.firebaseapp.com",
      databaseURL: "https://kwitter-3c88f-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c88f",
      storageBucket: "kwitter-3c88f.appspot.com",
      messagingSenderId: "408468895822",
      appId: "1:408468895822:web:bc9915a9b2148b88c5ab1f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
 function addRoom(){
      room_name=document.getElementById ("room_name").value;
      firebase.database().ref('/').child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+Room_name);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}
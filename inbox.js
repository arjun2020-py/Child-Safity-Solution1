let saftyPassword = "";
const passwordInput = document.querySelector("#password");

function getPassword() {
  saftyPassword = passwordInput.value;

  if (saftyPassword){
    alert("Password successfully saved");
    let link = document.createElement("a")
   link.href = "./parent.html";
    link.click();

  }
  else{
    alert("acess deined")
  }
  
}

function askPassword() {

  let password = prompt("Give me the password");
  if (saftypasswrod == password) {
    let link = document.createElement("a")
    link.href = "./chatroom.html";
    link.click();
    alert("acess okkk");
  }
  else {
    alert("acess deined");
  }

}
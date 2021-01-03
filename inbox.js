let saftyPassword = "";
const passwordInput = document.querySelector("#password");

function getPassword() {
  saftyPassword = passwordInput.value;

  if (saftyPassword)
    alert("Password successfully saved");
}

function askPassword() {

  let Pervoispasswrod = 'mptc123';
  let password = prompt("Give me the password");
  if (Pervoispasswrod == password) {
    let link = document.createElement("a")
    link.href = "./chatroom.html";
    link.click();
    alert("acess okkk");
  }
  else {
    alert("acess deined");
  }

}
let saftyPasswrod = "mptc123";

const chatroom_button = document.getElementById("chatbox_button");
if(chatroom_button)
{
chatroom_button.addEventListener("click", askPassword);
}
const passwordInput = document.querySelector("#password");
function getPassword() {
  saftyPassword = passwordInput.value;

  if (saftyPassword) {
    alert("Password successfully saved");
    let link = document.createElement("a")
    link.href = "./parent.html";
    link.click();

  }
  else {
    alert("acess deined")
  }

}

function askPassword(e) {
  e.preventDefault();

  let password = prompt("Give me the password");
  if (saftyPasswrod === password) {
    let link = document.createElement("a")
    link.href = "./chatroom.html";
    link.click();
  }
  else {
    alert("acess deined");
  }

}
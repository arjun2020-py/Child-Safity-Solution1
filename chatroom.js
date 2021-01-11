const outgoing = document.querySelector(".outgoing");
const incomming = document.querySelector(".incoming");
const input = document.querySelector("input");
const currentUser = document.querySelector("#currentUser");

const sendMessage = () => {
  if (input.value.trim() !== "") {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("bubble");
    messageDiv.innerHTML = input.value;
    outgoing.appendChild(messageDiv);
    input.value = "";
  }
}
  /*list persion item cliock item send to 'e'*/ 
const toggleClass = (e) => {
  const persons = document.getElementsByClassName("person");

  for (let i = 0; i < persons.length; i++) {
    persons[i].classList.remove("focus");
  }

  e.classList.add("focus");
  /*elelment content change or data get or set use innerHtml*/ 
  const messageDiv = document.createElement("div");
  currentUser.innerHTML = e.childNodes[1].innerHTML;
  messageDiv.classList.add("bubble");
  messageDiv.innerHTML = e.childNodes[6].innerHTML;
  /*incmoing & outgoing is clear chyan */
  incomming.innerHTML="";
   outgoing.innerHTML=" ";
  incomming.appendChild(messageDiv)
}
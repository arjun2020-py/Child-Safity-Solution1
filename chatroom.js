const messageBox = document.querySelector(".outgoing");
const input = document.querySelector("input");

const sendMessage = () => {
  if (input.value.trim() !== "") {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("bubble");
    messageDiv.innerHTML = input.value;
    messageBox.appendChild(messageDiv);
    input.value = "";
  }
}

const toggleClass = (e) => {
  const persons = document.getElementsByClassName("person");

  for (let i = 0; i < persons.length; i++) {
    persons[i].classList.remove("focus");
  }

  e.classList.add("focus");
}
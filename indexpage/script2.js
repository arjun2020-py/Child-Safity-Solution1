const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pwd");
const loginSubmit = document.querySelector("#loginSubmit");

const signUpSubmit = document.querySelector("#signup-submit");  

// Signin
const signIn = (event) => {
  // preventing reloading page
   event.preventDefault();

  // Getting email and password
  const email = emailInput.value;
  const password = passwordInput.value;

  // Splitting email by '_'
  const split = email.split("_");

  // First element will be user type ie. pa | ch | pu
  if (split[0] === "ch") {
    alert("You are a child")
    const childLink = document.createElement("a");
    childLink.href = "child.html";
    childLink.click()
    
    
  

  }
  else if (split[0] === "pa") {
    alert("You are a Parent")
    const parentLink = document.createElement("a");
    parentLink.href = "parent.html";
    parentLink.click()
    
  }
  else if ((split[0] === "pu")) {
    alert("You are Public")
    const publicLink = document.createElement("a");
    publicLink.href = "public.html";
    publicLink.click()
    
  }

}

// Signup
const signUp = (event) => {
  // preventing reloading page
   event.preventDefault();  
  alert("signin up..........")
}
  
// Adding event listener to the signin button
loginSubmit.addEventListener("click", signIn);

// Adding event listener to the signup button
signUpSubmit.addEventListener("click", signUp);


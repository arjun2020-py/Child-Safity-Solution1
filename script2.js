//golble scope varible 
let userType="Child";
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pwd");
const loginSubmit = document.querySelector("#loginSubmit");

const signUpSubmit = document.querySelector("#signup-submit");

const signup = document.getElementById("signup");
const signin = document.getElementById("signin");
const gotoSignUpLink = document.getElementById("gotoSignupLink");
const gotoSignInLink = document.getElementById("gotoSigninLink");

// goto signup
gotoSignUpLink.addEventListener("click", () => {
  signup.style.display = "flex";
  signin.style.display = "none";
});

// goto signin
gotoSignInLink.addEventListener("click", () => {
  signup.style.display = "none";
  signin.style.display = "flex"; 
})

// Signin
// const signIn = (event) => {
//   // preventing reloading page
//   event.preventDefault();

//   // Getting email and password
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   // Splitting email by '_'
//   const split = email.split("_");

//   // First element will be user type ie. pa | ch | pu
//   if (split[0] === "ch") {
//     alert("You are a child")
//     const childLink = document.createElement("a");
//     childLink.href = "child.html";
//     childLink.click()




//   }
//   else if (split[0] === "pa") {
//     alert("You are a Parent")
//     const parentLink = document.createElement("a");
//     parentLink.href = "parent.html";
//     parentLink.click()

//   }
//   else if ((split[0] === "pu")) {
//     alert("You are Public")
//     const publicLink = document.createElement("a");
//     publicLink.href = "Public.html";
//     publicLink.click()

//   }
//   else {
//     alert("Login error!...")
//   }

// }

// // Signup
// const signUp = (event) => {
//   // preventing reloading page
//   event.preventDefault();
// }

// // Adding event listener to the signin button
// loginSubmit.addEventListener("click", signIn);

// // Adding event listener to the signup button
// signUpSubmit.addEventListener("click", signUp);


// const username = document.getElementById("username")
// const email = document.getElementById('signEmail')
// const password = document.getElementById('signUpPwd')
//const confompasswrod = document.getElementById('conformPwd')
// const submit = document.getElementById('signup-submit')
// const errorElement = document.getElementById('error')

// submit.addEventListener('click', (e) => {

//   const message = [];

//   if (!username.value) {
//     message.push("Username is requied")
//   }
//   if (!email.value) {
//     message.push("email is requied")
//   }
//   if (password.value < 8) {
//     message.push("Password must need atleast 8 characters");
//   }
//   if (!password.value) {
//     message.push("password is requied")
//   }
//if (password.value !== confompasswrod.value) {

  // message.push("Please check your conform password");
  //}

//   if (message.length) {
//     for (let i = 0; i < message.length; i++) {
//       const div = document.createElement("div");
//       div.innerHTML = message[i];
//       errorElement.appendChild(div);
//     }

//   }
//   else {
//     alert("singin successfully....")
//   }

// })


function getUserType(e){
   userType=e.value;


}
function signUpsubmit(e){
//e.preventDefault();
//common declare  varble 
const password = document.getElementById('signUpPwd')
const confompasswrod = document.getElementById('conformPwd')
let link=document.createElement("a");
if (password.value !==confompasswrod.value) {
  
  alert("Please check your conform password");
 }
 else{
   alert('hai')
if(userType==='Parent'){

    link.href='./saftypass.html';
  }
  else if(userType==='Child'){
    link.href='./selectparent.html';

  }
  else{
    link.href='./public.html';
}
link.click();
 }
}
function signInpsubmit(e){
 //   e.preventDefault();
  //common declare  varble 
  let link=document.createElement("a");
  if(userType==='Parent'){

      link.href='./saftypass.html';
    }
    else if(userType==='Child'){
      link.href='./selectparent.html';

    }
else{
      link.href='./Public.html';
    }
    link.click();
  }



//golble scope varible 
let userType="Parent";
const password = document.getElementById('signUpPwd')
const confompasswrod = document.getElementById('conformPwd')
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
function getUserType(e){
   userType=e.value;
}


 /*id of form element*/      /*event type */      /*action to perform*//*function name*/
signup.addEventListener("submit",signUpsubmit)
function signUpsubmit(e){
e.preventDefault();
//common declare  varble 

let link=document.createElement("a");
if (password.value !==confompasswrod.value) {
  
  alert("Please check your conform password");
 }
 else{
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
 
}

signin.addEventListener("submit",signInpsubmit)
function signInpsubmit(e){
 e.preventDefault();
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
  let intro =  document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logospan =document.querySelectorAll('.logo');
window.addEventListener('load',()=>{
   setTimeout(() => {
      
    logospan.forEach((span,idx)=>{

        setTimeout(() => {
            
            span.classList.add('active');
        }, [idx + 1]+400);
    });

setTimeout(() => {
    
    logospan.forEach((span,idx)=>{
        setTimeout(() => {
           
            span.classList.remove('active');
            span.classList.add('fade');
  
        },[idx + 1]*50);
    })
},5000);

setTimeout(() => {
    intro.style.top = '-100vh';
},5000);

   },)
})


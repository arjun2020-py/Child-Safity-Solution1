const password = document.getElementById('signUpPwd')
const confompasswrod = document.getElementById('conformPwd')
let link1=document.createElement("a");
const form=document.getElementById("form_id");
  form.addEventListener("submit",forgoton_button)
  function forgoton_button(e){
   e.preventDefault();
   /**/
   if (password.value !==confompasswrod.value) {
  
    alert("Please check your conform password");
   }else{
     alert("change password succfully");
    link1.href="./index.html";
    link1.click();
    }
  }
    

 
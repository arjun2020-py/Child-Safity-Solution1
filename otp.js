const otp_sumbit = document.getElementById('opt_form')
otp_sumbit.addEventListener("submit",submitOtp)
let link=document.createElement('a')
function submitOtp(e){
e.preventDefault();
alert("passwroad reset sussfully")
link.href="./index.html";
link.click();
}
/*function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }*/


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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/*setup timeinterval for images*/ 
setInterval(()=>plusSlides(1),3000);  
const User=document.getElementById('activity');

if(user==='public'){

  setting.style.display = "none";
}
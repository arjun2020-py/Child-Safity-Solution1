const form=document.getElementById("form1");

form.addEventListener("submit",GotoHome)

function GotoHome(e){
    e.preventDefault();
    let link=document.createElement("a");
    link.href='./child.html';
    link.click();
}
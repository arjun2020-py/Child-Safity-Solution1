const commentElement = document.querySelector(".commentBox > textarea")

  function addLike(button) {
    button.style.color = "#1b53d4";
  }

  function addComment() {
    document.querySelector(".commentBox").style.display = "flex";
  }

  function uploadComment() {
    alert(commentElement.value);
    document.querySelector(".commentBox").style.display = "none";
  }
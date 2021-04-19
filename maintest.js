window.onload = function() {functionOnLoad()};
window.onscroll = function() {myFunction()};

var header = null;
var sticky = null;
function functionOnLoad() {
  header = document.getElementById("myHeader");
  console.log(header + "header testing");
  sticky = header.offsetTop;
  console.log(sticky + "sticky testing");
}

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function goBack() {
    window.history.back();
}

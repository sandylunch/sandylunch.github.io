// Get the header
/*var header = document.getElementById('all-tag');
console.log(header + "header....");

// Get the offset position of the navbar
var sticky = header.offsetTop;*/
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


$(window).on('scroll', function () {
  myFunction();
  var scrollPosition = $(document).scrollTop();

  $('.confetti > *').each(function () {
    if ($(this).hasClass("parallax-immediate")) {
      var relativeScroll = scrollPosition;
    } else {
      var relativeScroll = scrollPosition - ($(this).offset().top - 300);
    }

    $(this).css('transform', 'translate3d(0, ' + relativeScroll * -0.3 + 'px, 0)');
  });
});

$(document).ready(() => {
  $(".mean-toggle").click(() => {
    $(".mean-toggle").toggleClass("active");
    $(".nav-res").toggleClass("active");
  });
});

// function toggleMargin() {
//   var myDiv = document.getElementById("myDiv");
//   var currentMargin = parseInt(getComputedStyle(myDiv).marginTop);

//   if (currentMargin === 0) {
//     myDiv.style.marginTop = "100px";
//   } else {
//     myDiv.style.marginTop = "0";
//   }
// }

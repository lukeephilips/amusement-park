$(document).ready(function() {
  var height = parseInt(prompt("Enter your height in inches:"));
  console.log(height);

  if (height < 60) {
    $(".short").addClass("highlighted");
  } else if (height < 70) {
    $(".short, .medium").addClass("highlighted");
  } else {
    $(".short, .medium, .tall").addClass("highlighted");
  }

});

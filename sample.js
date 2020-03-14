$(function() {
  let style;
  $(window).mousemove(function(e) {
    $("#txt1").val(e.clientX);
    $("#txt2").val(e.clientY);
    style = "ellipse(150px 150px at " + e.clientX + "px " + e.clientY + "px)";
    console.log(style);
    $(".circle").css("clip-path", style);
  });
});

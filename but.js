var btnTop = $("#back-to-top");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnTop.fadeIn(500);
  } else {
    btnTop.fadeOut(500);
  }
});

btnTop.on("click", function() {
  $("html,body").animate({ scrollTop: 0 });
});
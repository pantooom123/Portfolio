// $(document).ready(function () {
//   $("#main_menu > li > a").click(function () {
//     $(this).next($(".snd_menu")).slideToggle("fast");
//   });

//   // 버튼 클릭 시 색 변경
//   $("li > a").focus(function () {
//     $(this).addClass("selec");
//   });
//   $("li > a").blur(function () {
//     $(this).removeClass("selec");
//   });
// });
$(document).ready(function () {
  $("#main_menu > li > a").click(function () {
    const clickedSubMenu = $(this).next($(".snd_menu"));

    // 다른 .snd_menu를 닫음
    $(".snd_menu").not(clickedSubMenu).slideUp("fast");

    // 클릭한 .snd_menu를 열거나 닫음
    clickedSubMenu.slideToggle("fast");
  });

  // 버튼 클릭 시 색 변경
  $("li > a").focus(function () {
    $(this).addClass("selec");
  });
  $("li > a").blur(function () {
    $(this).removeClass("selec");
  });
});

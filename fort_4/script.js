// header sticky
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 140);
});

//menu icon
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".gnb");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

///////////////gsap////////////////
var intro = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
});

intro.from(".introduction--text > span > span", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.3,
});

intro.to(
  ".introduction--text > span > span",
  {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: {
      each: 0.3,
      from: "start",
    },
  },
  "+=2"
);
// ///////////////////
let roller = document.querySelector(".box4-layout");
roller.id = "roller1";
let clone = roller.cloneNode(true);

clone.id = "roller2";
document.querySelector(".box4").appendChild(clone);

roller.classList.add("original");
clone.classList.add("clone");

/////////////////////////////////////

//////메인 visual jq
$(".nav .gnb li").click(function () {
  $(".gnb-sub").slideUp();
  if ($(this).children(".gnb-sub").is(":hidden")) {
    $(this).children(".gnb-sub").slideDown();
  } else {
    $(this).children(".gnb-sub").slideUp();
  }
});
///////////////

////////jq//
$(document).ready(function () {
  $(".gnb li").click(function () {
    // Remove 'rotate' class from all li elements
    $(".gnb li").not(this).find(".fa-angle-down").removeClass("rotate");
    // Toggle 'rotate' class on the clicked li element
    $(this).find(".fa-angle-down").toggleClass("rotate");
  });
});

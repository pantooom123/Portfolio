////////////메뉴js////////////////
$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let result = $(this).attr("data-alt");
  $(".tabs div").removeClass("active");
  $("#" + result).addClass("active");
});

// ///////네비게이션 ////////////
let gnb = document.querySelectorAll("#gnbb > li");
let gnbElement = document.querySelector("#gnbb");

for (let i = 0; i < gnb.length; i++) {
  gnb[i].addEventListener("mouseover", () => {
    gnbElement.classList.add("on");
  });
}

let header = document.querySelector("#headerr");

header.addEventListener("mouseout", (e) => {
  if (e.target.id == "gnbb") {
    gnbElement.classList.remove("on");
  }
});

////////////햄버거 버튼/////////////

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".gnb");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

/////////////////////////
let mainText = document.querySelector(".sec2-l_box");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 1600 || value < 300) {
    mainText.style.animation = "disappear 1s ease forwards";
  } else {
    mainText.style.animation = "slide 1s ease";
  }
});
